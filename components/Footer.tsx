"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Heart,
  ArrowUp,
  Code,
  Palette,
  Zap
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Web Development", icon: Code },
    { name: "UI/UX Design", icon: Palette },
    { name: "Performance Optimization", icon: Zap }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/maulidi",
      icon: Github,
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/philip-maulidi",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      href: "mailto:maulidiphilip@gmail.com",
      icon: Mail,
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Philip Maulidi</h3>
                  <p className="text-slate-400 text-sm">Fullstack Engineer & Educator</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Passionate about creating innovative solutions that bridge education and technology. 
                Building the future, one line of code at a time.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Zomba, Malawi</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+265 991 103 578</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{service.name}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">Available for Projects</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Currently accepting new opportunities and collaborations.
                </p>
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
              <p className="text-slate-300 mb-6">
                Ready to start your next project? Let's discuss how we can work together.
              </p>
              
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:bg-slate-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Project</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
                <span>&copy; {currentYear} Philip Maulidi. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Malawi</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="text-slate-400 text-sm">
                  Built with Next.js & Tailwind CSS
                </span>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
