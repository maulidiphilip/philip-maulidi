"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Shield,
  Zap,
  BookOpen,
  Users
} from "lucide-react";

export default function SkillsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript (ES6+)", level: 94 },
        { name: "HTML5/CSS3", level: 96 },
        { name: "shadcn/ui", level: 96 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "PostgreSQL/Neon Serverless", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Drizzle ORM", level: 75 },
        { name: "Prisma", level: 75 }
      ]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Expo", level: 85 },
        { name: "Flutter", level: 50 },
        { name: "Android Development", level: 48 }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Render", level: 88 },
        { name: "Docker", level: 82 },
        { name: "Vercel", level: 90 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      category: "Tools & Workflow",
      icon: GitBranch,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git/GitHub", level: 100 },
        { name: "VS Code", level: 97 },
        { name: "Postman", level: 85 },
      ]
    },
    {
      category: "Educational Technology",
      icon: BookOpen,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Learning Management Systems", level: 88 },
        { name: "Educational Content Creation", level: 92 },
        { name: "Interactive Learning Tools", level: 85 },
        { name: "Assessment Platforms", level: 80 },
        { name: "Student Engagement Systems", level: 87 }
      ]
    }
  ];

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
            Skills & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond Technical Skills
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              My educational background brings unique value to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Team Leadership",
                description: "Leading development teams with clear communication and mentorship"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive and accessible user experiences"
              },
              {
                icon: Shield,
                title: "Security Best Practices",
                description: "Implementing robust security measures in all applications"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Building fast, efficient, and scalable applications"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-xl">
            <BookOpen className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-4 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Continuous Learning Philosophy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              As an educator turned software engineer, I believe that learning never stops. 
              I stay current with the latest technologies and best practices, always seeking 
              to improve my skills and share knowledge with others.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Always Learning",
                "Teaching Others",
                "Best Practices",
                "Innovation",
                "Quality Focus"
              ].map((principle, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
