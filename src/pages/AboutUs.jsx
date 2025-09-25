import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Shield, 
  Zap,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Star,
  Code,
  Cpu,
  BarChart3,
  Palette
} from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('project');

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Lead Developer",
      specialization: "Full-Stack Development & IoT Integration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "Arduino", "Python"],
      icon: Code,
      github: "alexrod",
      linkedin: "alex-rodriguez"
    },
    {
      name: "Priya Sharma",
      role: "Hardware Engineer",
      specialization: "Circuit Design & Embedded Systems",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=150&h=150&fit=crop&crop=face",
      skills: ["PCB Design", "Microcontrollers", "Sensors", "CAD"],
      icon: Cpu,
      github: "priyaeng",
      linkedin: "priya-sharma"
    },
    {
      name: "David Chen",
      role: "Data Analyst",
      specialization: "Power Systems & Data Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "Power Analysis", "SQL"],
      icon: BarChart3,
      github: "davidchen",
      linkedin: "david-chen"
    },
    {
      name: "Sarah Kim",
      role: "UI/UX Designer",
      specialization: "Interface Design & User Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "React", "Design Systems", "User Research"],
      icon: Palette,
      github: "sarahkim",
      linkedin: "sarah-kim"
    }
  ];

  const mentor = {
    name: "Prof. Jaimala Gambhir",
    title: "Associate Professor of Electrical Engineering",
    institution: "Punjab Engineering College, Chandigarh",
    specialization: "Renewable Energy, Power Electronics, Smart Grid",
    image: "/jaimalamaam.jpg",
    experience: "15+ years",
    research: ["Smart Grid Technology", "IoT in Power Systems", "Renewable Energy Integration"],
    email: "j.gambhir@pec.edu.in",
    publications: "50+ research papers"
  };

  const projectFeatures = [
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live tracking of voltage, current, power, and energy consumption with millisecond precision.",
      color: "bg-yellow-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with historical trends, predictive insights, and usage patterns.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "End-to-end encryption for data transmission with industrial-grade security protocols.",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Multi-platform Access",
      description: "Responsive web interface accessible from desktop, tablet, and mobile devices.",
      color: "bg-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Smart Automation",
      description: "Intelligent load management and automated switching based on consumption patterns.",
      color: "bg-orange-500"
    },
    {
      icon: Award,
      title: "IoT Integration",
      description: "Seamless integration with existing IoT infrastructure and smart home systems.",
      color: "bg-pink-500"
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'Arduino', category: 'Hardware', color: 'bg-orange-100 text-orange-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-purple-100 text-purple-800' },
    { name: 'WebSocket', category: 'Communication', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Python', category: 'Analytics', color: 'bg-red-100 text-red-800' },
    { name: 'TensorFlow', category: 'AI/ML', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const objectives = [
    "Reduce energy consumption by 30%",
    "Enable predictive maintenance alerts",
    "Provide intuitive user interface",
    "Ensure scalable IoT architecture",
    "Implement real-time monitoring",
    "Create comprehensive analytics dashboard"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing electrical monitoring with cutting-edge IoT technology and real-time analytics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1">
            {[
              { id: 'project', label: 'Project Overview' },
              { id: 'mentor', label: 'Project Mentor' },
              { id: 'team', label: 'Our Team' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Section */}
        {activeTab === 'project' && (
          <div className="space-y-12">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Smart Electrical Monitoring System</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Vision</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our project aims to create an intelligent electrical monitoring ecosystem that provides real-time insights into power consumption, 
                    enables predictive maintenance, and optimizes energy usage for residential and commercial applications.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Objectives</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {objectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {techStack.map((tech, index) => (
                      <div key={index} className="text-center">
                        <span className={`inline-block px-3 py-2 rounded-lg text-sm font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Project Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mentor Section */}
        {activeTab === 'mentor' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="relative">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-48 h-48 rounded-xl object-cover shadow-lg"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&size=200&background=3b82f6&color=ffffff&bold=true`;
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{mentor.name}</h2>
                  <p className="text-blue-600 text-xl font-semibold mb-2">{mentor.title}</p>
                  <p className="text-gray-600 text-lg mb-6">{mentor.institution}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-500" />
                        Specialization
                      </h3>
                      <p className="text-gray-700 mb-4">{mentor.specialization}</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-green-500" />
                        Experience
                      </h3>
                      <p className="text-gray-700 mb-4">{mentor.experience}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                        Research Areas
                      </h3>
                      <div className="space-y-2 mb-4">
                        {mentor.research.map((area, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                    <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800 text-sm">{mentor.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                      <Star className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 text-sm">{mentor.publications}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-3">{member.specialization}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <a
                            href={`https://github.com/${member.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing electrical monitoring and energy management. 
            Experience the future of smart power systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              View Documentation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              GitHub Repository
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;