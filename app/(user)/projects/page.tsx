'use client';
import { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Calendar,
  Star,
  Code,
  Search,
  ArrowRight,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  content?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    displayName: string;
    email: string;
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects?published=true');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch {
      console.error('Error fetching projects:');
    } finally {
      setLoading(false);
    }
  };

  // Get all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
    const matchesFeatured = !showFeaturedOnly || project.featured;

    return matchesSearch && matchesTech && matchesFeatured;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                My{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                A collection of projects I&apos;ve built using modern technologies and best practices.
                Each project represents a unique challenge and learning experience.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm">
                  <Code className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {projects.length} Projects
                  </span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {featuredProjects.length} Featured
                  </span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {allTechnologies.length} Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Highlighting some of my most impactful and innovative work
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <div 
                  key={project.id} 
                  className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up ${
                    index % 2 === 0 ? 'animation-delay-200' : 'animation-delay-400'
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Code className="w-16 h-16 text-white opacity-80" />
                      </div>
                    )}
                    
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>

                    {/* Action buttons overlay */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.githubUrl && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </button>
                      )}
                      {project.liveUrl && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                      <span>By {project.author.displayName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                All Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my complete portfolio of projects across different technologies and domains
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Technology Filter */}
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>

                {/* Featured Filter */}
                <label className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFeaturedOnly}
                    onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 mr-2"
                  />
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-gray-700 dark:text-gray-300">Featured Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in-up animation-delay-400">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => {
                  let technologies: string[] = [];
                  try {
                    // Try to parse as JSON first
                    technologies = JSON.parse(project.technologies || '[]');
                  } catch {
                    // If JSON parsing fails, treat as comma-separated string
                    if (typeof project.technologies === 'string' && project.technologies.trim()) {
                      technologies = project.technologies.split(',').map(tech => tech.trim());
                    } else {
                      technologies = [];
                    }
                  }
                  return (
                    <Link
                      key={project.id}
                      href={`/projects/${project.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Code className="w-12 h-12 text-gray-400" />
                          </div>
                        )}
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            {project.githubUrl && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                                }}
                                className="p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors"
                              >
                                <Github className="w-5 h-5" />
                              </button>
                            )}
                            {project.liveUrl && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                                }}
                                className="p-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded-full">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                              +{technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(project.createdAt).toLocaleDateString()}
                          </span>
                          <span>By {project.author.displayName}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm || selectedTech || showFeaturedOnly
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No projects available at the moment.'
                }
              </p>
              {(searchTerm || selectedTech || showFeaturedOnly) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTech('');
                    setShowFeaturedOnly(false);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
