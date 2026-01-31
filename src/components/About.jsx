import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                  I am a Full Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and a proven track record of building seamless, efficient, and user-focused web applications.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  Highly skilled at translating ideas into responsive and scalable digital solutions that prioritize performance, data privacy, and intuitive user experiences. Driven by continuous learning, I leverage technology to solve real-world problems through clean architecture, optimized backend systems, and engaging front-end design.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          Global Academy Of Technology, Bangalore
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Information Science and Engineering
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          CGPA: 8.91 | Expected: July 2027
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          RNS Vidyanikethan Composite PU College
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          State Board (PU) | GPA: 86.17 | Sept 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Certifications
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• IBM Z Datathon - October 2025</li>
                      <li>• Software Engineering Simulation - J.P. Morgan Chase</li>
                      <li>• Green Sunday Volunteer Program</li>
                      <li>• Artificial Intelligence Foundation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
