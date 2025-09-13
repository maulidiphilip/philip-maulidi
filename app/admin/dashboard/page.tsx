'use client';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  FileText, 
  FolderOpen, 
  Users, 
  Settings,
  Plus,
  Eye,
  MessageSquare,
  TrendingUp,
  Calendar,
  Activity
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user, userData, isAdmin, loading } = useAuth();

  const stats = [
    { 
      title: 'Total Projects', 
      value: '12', 
      icon: FolderOpen, 
      color: 'bg-blue-500',
      trend: '+2 this month',
      trendUp: true
    },
    { 
      title: 'Blog Posts', 
      value: '8', 
      icon: FileText, 
      color: 'bg-green-500',
      trend: '+3 this week',
      trendUp: true
    },
    { 
      title: 'Page Views', 
      value: '1,234', 
      icon: Eye, 
      color: 'bg-purple-500',
      trend: '+12% this week',
      trendUp: true
    },
    { 
      title: 'Comments', 
      value: '45', 
      icon: MessageSquare, 
      color: 'bg-orange-500',
      trend: '+5 today',
      trendUp: true
    },
  ];

  const quickActions = [
    { 
      title: 'New Project', 
      href: '/admin/projects/new', 
      icon: Plus, 
      color: 'bg-blue-600',
      description: 'Add a new project to your portfolio'
    },
    { 
      title: 'New Blog Post', 
      href: '/admin/blog/new', 
      icon: FileText, 
      color: 'bg-green-600',
      description: 'Write and publish a new article'
    },
    { 
      title: 'Manage Projects', 
      href: '/admin/projects', 
      icon: FolderOpen, 
      color: 'bg-purple-600',
      description: 'View and edit existing projects'
    },
    { 
      title: 'Settings', 
      href: '/admin/settings', 
      icon: Settings, 
      color: 'bg-gray-600',
      description: 'Configure your portfolio settings'
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'success',
      title: 'Portfolio deployed successfully',
      time: '2 hours ago',
      icon: Activity,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'info',
      title: 'New project added: E-learning Platform',
      time: '1 day ago',
      icon: FolderOpen,
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'info',
      title: 'Blog post published: "Getting Started with Next.js"',
      time: '3 days ago',
      icon: FileText,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'info',
      title: 'New comment on "React Best Practices"',
      time: '5 days ago',
      icon: MessageSquare,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, {user?.displayName || 'Admin'}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Here's what's happening with your portfolio today.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center text-xs">
                  <TrendingUp className={`w-3 h-3 mr-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={stat.trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Get things done faster
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              href={action.href}
              className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start space-x-3">
                <div className={`${action.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <Link 
              href="/admin/analytics" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 ${activity.color}`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            This Week
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Views</span>
              </div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">+234</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Visitors</span>
              </div>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">+89</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Comments</span>
              </div>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">+12</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
