"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up animation-delay-200"
                >
                  Hi, I&apos;m{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Philip Maulidi
                  </span>
                </h1>
                
                <p
                  className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-400"
                >
                  Fullstack Software Engineer & Educator
                </p>
                
                <p
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl animate-fade-in-up animation-delay-600"
                >
                  Passionate about creating innovative web solutions and sharing knowledge. 
                  With a background in education and expertise in modern web technologies, 
                  I build applications that make a difference.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 animate-fade-in-up animation-delay-1000">
                <a
                  href="https://github.com/maulidiphilip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/philip-maulidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:maulidiphilip@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Philip Maulidi"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            
            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Taught</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
