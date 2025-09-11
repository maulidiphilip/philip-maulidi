export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frontend</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Java</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Tools & Database */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tools & Database</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Git & GitHub</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
