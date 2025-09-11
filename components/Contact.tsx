export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 mb-8 text-center max-w-2xl mx-auto">
            Ready to start your next project? I&apos;d love to hear from you! Whether it&apos;s a web application, 
            mobile app, or educational technology solution, let&apos;s create something amazing together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Email</p>
                  <p className="text-slate-600 dark:text-slate-300">maulidiphilip@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Phone</p>
                  <p className="text-slate-600 dark:text-slate-300">+265 991 103 578</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Location</p>
                  <p className="text-slate-600 dark:text-slate-300">Zomba, Malawi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-6">Ready to Start?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I&apos;m always excited to discuss new projects and opportunities.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Let&apos;s turn your ideas into reality!
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
