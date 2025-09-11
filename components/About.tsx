export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Passionate Fullstack Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I&apos;m a dedicated Fullstack Software Engineer with a unique background in education, 
              holding a Bachelor of Education from the prestigious University of Malawi Chancellor College. 
              This educational foundation has given me exceptional communication skills and a deep 
              understanding of how to break down complex problems into manageable solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I specialize in modern web development technologies and am passionate about creating 
              user-friendly applications that solve real-world problems. My approach combines 
              technical expertise with educational insight to deliver solutions that are both 
              powerful and accessible.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Education</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Bachelor of Education</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">University of Malawi</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Focus</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Fullstack Development</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Web Applications</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-6">What I Bring</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Strong problem-solving skills</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Excellent communication abilities</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Modern development practices</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>User-centered design thinking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
