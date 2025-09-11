"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, User, Tag, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Building Accessible Educational Technology: Lessons from the Field",
      excerpt: "Exploring how my background in education shapes my approach to creating inclusive software solutions that work for everyone.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Educational Tech",
      tags: ["Accessibility", "Education", "UX Design"],
      featured: true
    },
    {
      id: 2,
      title: "From Classroom to Code: My Journey as an Educator-Developer",
      excerpt: "How transitioning from education to software engineering has given me a unique perspective on problem-solving and user experience.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Career",
      tags: ["Career Change", "Education", "Personal Growth"],
      featured: false
    },
    {
      id: 3,
      title: "Modern React Patterns for Educational Applications",
      excerpt: "Best practices and patterns I've discovered while building learning management systems and educational tools.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Technical",
      tags: ["React", "JavaScript", "Best Practices"],
      featured: true
    },
    {
      id: 4,
      title: "The Power of TypeScript in Large-Scale Educational Projects",
      excerpt: "Why TypeScript has become essential in my toolkit for building robust, maintainable educational software.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Technical",
      tags: ["TypeScript", "JavaScript", "Development"],
      featured: false
    },
    {
      id: 5,
      title: "Creating Engaging User Interfaces for Learning Platforms",
      excerpt: "Design principles and techniques for building educational interfaces that keep students engaged and motivated.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Design",
      tags: ["UI/UX", "Education", "Design Systems"],
      featured: false
    },
    {
      id: 6,
      title: "Building Real-time Collaboration Features with Socket.io",
      excerpt: "A deep dive into implementing real-time features for educational platforms, from chat to collaborative editing.",
      content: "Full article content here...",
      author: "Philip Maulidi",
      date: "2023-12-15",
      readTime: "15 min read",
      category: "Technical",
      tags: ["Socket.io", "Real-time", "Collaboration"],
      featured: false
    }
  ];

  const categories = ["All", "Technical", "Educational Tech", "Career", "Design"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Sharing knowledge at the intersection of education and technology
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="text-4xl font-bold mb-2">{post.title.charAt(0)}</div>
                      <div className="text-sm opacity-75">Featured Article</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                />
              </div>
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-slate-400 dark:text-slate-500">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              No Articles Found
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about education, technology, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
