import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Gamepad2, Baby } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      icon: Baby,
      title: 'Child Vaccination Reminder & Management System',
      type: 'Backend System',
      description:
        'An automated reminder and notification system built with Node.js and Express, featuring multi-channel delivery via SMS and email, ensuring parents never miss important vaccination schedules.',
      tech: [
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'Twilio API',
        'Gmail OAuth2',
        'Cron Jobs',
        'Flutter',
      ],
      highlights: [
        'Automated vaccination alert system with cron jobs',
        'Secure multi-channel notifications via Twilio SMS and Gmail',
        'Robust error handling and API architecture',
        'Data encryption and secure authentication',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Gamepad2,
      title: 'Bingo Multiplayer Game',
      type: 'Real-time Application',
      description:
        'A real-time multiplayer Bingo game leveraging WebSockets for instant synchronization, featuring solo and multiplayer modes with smooth gameplay and intuitive UI design.',
      tech: ['Node.js', 'Express.js', 'WebSockets', 'HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Real-time game state synchronization with WebSockets',
        'Solo and multiplayer game modes',
        'Fair matchmaking with coin-toss system',
        'Optimized for low-latency communication',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my academic and technical projects showcasing full-stack development and problem-solving skills
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? '-translate-x-10 opacity-0'
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-br ${project.gradient} shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {project.type}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors" />
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
