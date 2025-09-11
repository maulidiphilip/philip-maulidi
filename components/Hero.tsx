import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-20">
          <div className="mb-8">
            <Image
              src="/profile-photo.jpg"
              alt="Philip Maulidi - Fullstack Software Engineer"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-lg mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Philip Maulidi</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Fullstack Software Engineer with a unique background in education. 
            I create innovative solutions that bridge technology and learning, making complex concepts 
            accessible and engaging for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              View My Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
