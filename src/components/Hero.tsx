import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Benaka Prasad M
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Building innovative tech solutions with the MERN stack. Passionate about crafting seamless, efficient, and user-focused web applications that solve real-world problems.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Benakaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/benakaprasadm"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              <a
                href="mailto:benakaprasadm82@gmail.com"
                className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-red-600" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Email
                </span>
              </a>

              <a
                href="tel:+917483622436"
                className="group relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-green-600" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Phone
                </span>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
}
