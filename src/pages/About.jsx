import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('project');

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Lead Developer",
      specialization: "Full-Stack Development & IoT Integration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "Arduino", "Python"],
      github: "alexrod",
      linkedin: "alex-rodriguez"
    },
    {
      name: "Priya Sharma",
      role: "Hardware Engineer",
      specialization: "Circuit Design & Embedded Systems",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=150&h=150&fit=crop&crop=face",
      skills: ["PCB Design", "Microcontrollers", "Sensors", "CAD"],
      github: "priyaeng",
      linkedin: "priya-sharma"
    },
    {
      name: "David Chen",
      role: "Data Analyst",
      specialization: "Power Systems & Data Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "Power Analysis", "SQL"],
      github: "davidchen",
      linkedin: "david-chen"
    },
    {
      name: "Sarah Kim",
      role: "UI/UX Designer",
      specialization: "Interface Design & User Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "React", "Design Systems", "User Research"],
      github: "sarahkim",
      linkedin: "sarah-kim"
    }
  ];

  const mentor = {
    name: "Dr. Michael Thompson",
    title: "Professor of Electrical Engineering",
    institution: "Institute of Technology",
    specialization: "Smart Grid Systems & Renewable Energy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    experience: "15+ years",
    research: ["Smart Grid Technology", "IoT in Power Systems", "Renewable Energy Integration"],
    email: "m.thompson@institute.edu",
    publications: "50+ research papers"
  };

  const projectFeatures = [
    {
      icon: "⚡",
      title: "Real-time Monitoring",
      description: "Live tracking of voltage, current, power, and energy consumption with millisecond precision."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with historical trends, predictive insights, and usage patterns."
    },
    {
      icon: "🔒",
      title: "Secure Communication",
      description: "End-to-end encryption for data transmission with industrial-grade security protocols."
    },
    {
      icon: "📱",
      title: "Multi-platform Access",
      description: "Responsive web interface accessible from desktop, tablet, and mobile devices."
    },
    {
      icon: "⚙️",
      title: "Smart Automation",
      description: "Intelligent load management and automated switching based on consumption patterns."
    },
    {
      icon: "🌐",
      title: "IoT Integration",
      description: "Seamless integration with existing IoT infrastructure and smart home systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Our Project
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Revolutionizing electrical monitoring with cutting-edge IoT technology and real-time analytics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            {['project', 'mentor', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Section */}
        {activeTab === 'project' && (
          <div className="space-y-12">
            {/* Project Overview */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="w-4 h-4 bg-cyan-400 rounded-full mr-4 animate-pulse"></span>
                  Smart Electrical Monitoring System
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Project Vision</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Our project aims to create an intelligent electrical monitoring ecosystem that provides real-time insights into power consumption, 
                      enables predictive maintenance, and optimizes energy usage for residential and commercial applications.
                    </p>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Arduino', 'MongoDB', 'WebSocket', 'Python', 'TensorFlow'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-400 mb-4">Key Objectives</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Reduce energy consumption by 30%
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Enable predictive maintenance alerts
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Provide intuitive user interface
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Ensure scalable IoT architecture
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectFeatures.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition duration-300"></div>
                  <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mentor Section */}
        {activeTab === 'mentor' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-purple-500/30"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">{mentor.name}</h2>
                    <p className="text-purple-400 text-xl font-semibold mb-1">{mentor.title}</p>
                    <p className="text-gray-400 text-lg mb-4">{mentor.institution}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">Specialization</h3>
                        <p className="text-gray-300 mb-4">{mentor.specialization}</p>
                        
                        <h3 className="text-lg font-semibold text-green-400 mb-3">Experience</h3>
                        <p className="text-gray-300 mb-4">{mentor.experience}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-pink-400 mb-3">Research Areas</h3>
                        <ul className="space-y-2 mb-4">
                          {mentor.research.map((area, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                      <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                        📧 {mentor.email}
                      </span>
                      <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                        📚 {mentor.publications}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-20 h-20 rounded-full object-cover border-2 border-cyan-500/30"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-1">{member.role}</p>
                      <p className="text-gray-400 text-sm mb-3">{member.specialization}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded text-purple-300 text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a href={`https://github.com/${member.github}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href={`https://linkedin.com/in/${member.linkedin}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}