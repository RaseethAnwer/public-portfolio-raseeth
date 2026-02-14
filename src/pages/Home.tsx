import React from 'react';
import { ArrowDown, Code, Database, Cloud } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                Raseeth Anwar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate <span className="font-semibold text-green-600 dark:text-green-400">Backend Engineer</span> specializing in scalable architecture, AI-powered solutions, and robust Java applications.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                <Code className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Backend Engineering</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                <Database className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-5 py-2 shadow-sm border border-gray-100 dark:border-gray-700">
                <Cloud className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Java & Spring Boot</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More About Me
                <ArrowDown className="ml-2 w-5 h-5" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border border-green-600 dark:border-green-400 text-lg font-medium rounded-xl text-green-600 dark:text-green-400 bg-transparent hover:bg-green-600 dark:hover:bg-green-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12 preserve-3d">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>

              {/* Spinning Tech Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-full animate-spin-slow pointer-events-none"></div>
              <div className="absolute inset-4 border border-green-500/20 rounded-full pointer-events-none"></div>

              {/* Inner Decorative Ring - Counter Rotating */}
              <div className="absolute inset-6 border border-green-500/20 rounded-full animate-reverse-spin-slow pointer-events-none border-dashed opacity-70"></div>

              {/* Center Focus Glow */}
              <div className="absolute inset-16 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-slow"></div>

              {/* Profile Image */}
              <div className="relative h-full w-full flex items-center justify-center transform translate-z-20">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:border-green-500/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src="profile-pic.jpeg"
                    alt="Raseeth Anwar"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-green-500/30 animate-bounce-slow transform translate-z-30">
                <span className="flex items-center gap-2 text-sm font-bold text-green-600 dark:text-green-400">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Open to Work
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 italic">
        Crafting intelligent backend systems
      </p>
    </section>
  );
};

export default Home;