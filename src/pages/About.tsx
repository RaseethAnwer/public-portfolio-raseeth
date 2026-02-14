import React from 'react';
import { GraduationCap, Brain, Code, Server, Globe, Cpu, Zap, Database } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.E – Electronics and Communication Engineering (ECE). Solid foundation in systems and logic."
    },
    {
      icon: Brain,
      title: "Experience",
      description: "Background in Technical Training, now specialized in Product Development with a focus on Backend Engineering."
    },
    {
      icon: Cpu,
      title: "Tech Focus",
      description: "Specializing in Java, Spring Boot, and integrating AI technologies into traditional development workflows."
    },
    {
      icon: Zap,
      title: "Content Creation",
      description: "Active content creator sharing technical insights and educational resources with the developer community."
    }
  ];

  const skills = [
    {
      category: "Backend Development",
      icon: Server,
      items: ["Java", "Spring Boot", "Spring Security", "Microservices", "RESTful APIs", "System Design"]
    },
    {
      category: "Frontend Development",
      icon: Globe,
      items: ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      category: "Programming Languages",
      icon: Code,
      items: ["Java", "C++", "SQL", "JavaScript"]
    },
    {
      category: "AI & Modern Technologies",
      icon: Brain,
      items: ["AI-assisted Development", "AI Integrations", "LLM-based Workflows", "Intelligent Systems Support"]
    },
    {
      category: "Tools & Platforms",
      icon: Database,
      items: ["AWS", "Docker", "Git", "CI/CD", "PostgreSQL", "MySQL"]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

          {/* Image Column */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md aspect-[4/3]">

              {/* Decorative Pattern Grid Background */}
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-green-500/20 rounded-2xl z-0"></div>
              <div className="absolute -left-4 -top-4 w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl z-0 transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2 z-10 bg-gray-900 border border-white/10">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src="boat-pic.png"
                  alt="Raseeth Anwar"
                  className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-110"
                />

                {/* Tech Overlays */}
                <div className="absolute top-4 right-4 z-30">
                  <Cpu className="w-8 h-8 text-white/50 animate-pulse" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>

                {/* Name Tag */}
                <div className="absolute bottom-6 left-6 z-30">
                  <p className="text-white font-bold text-xl tracking-wide">Raseeth Anwar</p>
                  <p className="text-green-400 text-sm font-medium">Backend Engineer</p>
                </div>
              </div>

              {/* Tech Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-green-500 z-40"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-green-500 z-40"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Me</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                I'm <span className="font-semibold text-green-600 dark:text-green-400">Raseeth Anwar</span>, a dedicated Backend Engineer and Product Developer.
                With a background in technical training, I bring a unique perspective to software development—focusing not just on code, but on clarity, scalability, and user impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4 max-w-3xl mx-auto lg:mx-0">
                Currently, I specialize in building robust backend systems using <span className="font-medium text-gray-900 dark:text-white">Java and Spring Boot</span>, while actively exploring the intersection of traditional engineering and <span className="font-medium text-gray-900 dark:text-white">Artificial Intelligence</span>. I believe in leveraging AI to build smarter, more efficient development workflows and applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{highlight.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Technical Arsenal</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className={`${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''} bg-white dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow`}>
                <div className="flex items-center space-x-3 mb-4">
                  <skillGroup.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;