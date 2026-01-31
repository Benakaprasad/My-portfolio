import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Wrench, Monitor, Users } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['C', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Frameworks',
      skills: ['Node.js', 'Express.js', 'Websockets.io', 'React'],
      color: 'purple',
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub'],
      color: 'green',
    },
    {
      icon: Monitor,
      title: 'Platforms',
      skills: ['PyCharm', 'Visual Studio Code', 'IntelliJ IDE'],
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Adaptability', 'Task Prioritization', 'Teamwork'],
      color: 'pink',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      icon: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      icon: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      icon: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200',
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      icon: 'text-orange-600 dark:text-orange-400',
      badge: 'bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200',
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900',
      icon: 'text-pink-600 dark:text-pink-400',
      badge: 'bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200',
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-96 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
                  <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge} transition-transform duration-300 hover:scale-110`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
