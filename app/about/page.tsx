"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              About Philip
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Where Education Meets Innovation in Software Engineering
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl">
                <Image
                  src="/profile-photo.jpg"
                  alt="Philip Maulidi"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    Philip Maulidi
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    Fullstack Software Engineer & Educator
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                  My Journey
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I&apos;m a passionate Fullstack Software Engineer with a unique foundation in education, 
                  holding a Bachelor of Education from the University of Malawi Chancellor College. 
                  This educational background has shaped my approach to software development, 
                  emphasizing clear communication, systematic problem-solving, and user-centered design.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My dual expertise in education and technology allows me to create solutions that 
                  are not only technically sound but also intuitive and accessible to users from 
                  all backgrounds.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <GraduationCap className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm opacity-90">Bachelor of Education</p>
                  <p className="text-sm opacity-90">University of Malawi</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                  <Code className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Specialization</h4>
                  <p className="text-sm opacity-90">Fullstack Development</p>
                  <p className="text-sm opacity-90">Modern Web Apps</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={fadeInUp} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
              Core Values & Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "User-Centered Design",
                  description: "Every solution I create prioritizes the end user's experience and needs."
                },
                {
                  icon: Lightbulb,
                  title: "Educational Mindset",
                  description: "I believe in making complex technology accessible and understandable."
                },
                {
                  icon: Code,
                  title: "Technical Excellence",
                  description: "Committed to writing clean, maintainable, and scalable code."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What I Bring to Every Project
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                A unique blend of technical expertise and educational insight
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Problem-Solving Excellence",
                "Clear Communication",
                "Modern Development Practices",
                "User Experience Focus",
                "Educational Technology",
                "Team Collaboration",
                "Continuous Learning",
                "Quality Assurance"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
