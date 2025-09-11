"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Github, 
  Calendar,
  Tag,
  ArrowRight,
  Code,
  Palette,
  Smartphone
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "EduTrack Learning Management System",
      description: "A comprehensive LMS built with Next.js and PostgreSQL, featuring real-time collaboration, progress tracking, and interactive assessments.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com/maulidi/edutrack",
      live: "https://edutrack-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow Project Manager",
      description: "Modern project management tool with Kanban boards, team collaboration, and real-time updates using Socket.io.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      github: "https://github.com/maulidi/taskflow",
      live: "https://taskflow-pm.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "MalawiWeather Mobile App",
      description: "React Native weather application providing accurate forecasts for Malawi with offline capabilities and location-based services.",
      image: "/api/placeholder/600/400",
      category: "Mobile",
      technologies: ["React Native", "Expo", "Weather API", "AsyncStorage"],
      github: "https://github.com/maulidi/malawi-weather",
      live: "https://expo.dev/@maulidi/malawi-weather",
      featured: false
    },
    {
      id: 4,
      title: "CodeMentor Platform",
      description: "Educational platform connecting students with coding mentors, featuring video calls, code sharing, and progress tracking.",
      image: "/api/placeholder/600/400",
      category: "Educational Tech",
      technologies: ["Next.js", "WebRTC", "Firebase", "Stripe", "Framer Motion"],
      github: "https://github.com/maulidi/codementor",
      live: "https://codementor-platform.vercel.app",
      featured: true
    },
    {
      id: 5,
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for e-commerce management with analytics, inventory tracking, and order management capabilities.",
      image: "/api/placeholder/600/400",
      category: "Frontend",
      technologies: ["React", "Chart.js", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/maulidi/ecommerce-dashboard",
      live: "https://ecommerce-admin-mw.netlify.app",
      featured: false
    },
    {
      id: 6,
      title: "Student Portal API",
      description: "RESTful API for student management system with authentication, grade tracking, and course enrollment features.",
      image: "/api/placeholder/600/400",
      category: "Backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/maulidi/student-portal-api",
      live: "https://student-portal-api.herokuapp.com/docs",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "Educational Tech"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === "All" || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I&apos;m always working on exciting projects that push the boundaries of technology and education. 
            Here&apos;s a showcase of my recent work, ranging from web applications to educational tools.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="text-slate-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  Featured Project
                </div>
              )}
              
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-slate-300 dark:text-slate-500">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life with modern technology and educational insight.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
