import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaExternalLinkAlt, FaGlobe, FaCalendarAlt } from "react-icons/fa";

import {
  SiGo,
  SiLaravel,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiGooglecloud,
  SiRedis,
  SiMongodb,
  SiExpress,
  SiTrpc,
  SiEthereum,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

function App() {
  const skills = [
    { name: "Go", icon: <SiGo className="text-cyan-400" />, level: "Advanced" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: "Intermediate" },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" />, level: "Advanced" },
    { name: "tRPC", icon: <SiTrpc className="text-blue-400" />, level: "Intermediate" },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: "Advanced" },
    { name: "React", icon: <SiReact className="text-cyan-400" />, level: "Intermediate" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, level: "Advanced" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: "Intermediate" },
    { name: "GCP", icon: <SiGooglecloud className="text-green-500" />, level: "Intermediate" },
    { name: "Redis", icon: <SiRedis className="text-red-600" />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "Intermediate" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: "Intermediate" },
  ];

  const projects = [
    {
      title: "Finance & Accounting System",
      period: "Aug 2025 (Ongoing)",
      tech: ["Go (Echo)", "PostgreSQL", "Docker", "React.js", "gRPC"],
      description: "Enterprise accounting system with microservices architecture using gRPC and REST Gateway.",
      link: "#",
      company: "Freelance Project"
    },
    {
      title: "Flight Search Microservice",
      period: "Aug 2025",
      tech: ["Go (Fiber)", "Docker", "Redis", "SSE"],
      description: "Real-time flight search using Redis Streams and Server-Sent Events for low-latency responses.",
      link: "#",
      company: "Personal Project"
    },
    {
      title: "Online Food Ordering",
      period: "Jun 2025",
      tech: ["Go Echo", "PostgreSQL", "GCP", "Docker", "DDD"],
      description: "Microservices-based food ordering system implementing Domain-Driven Design principles.",
      link: "#",
      company: "Bootcamp Project"
    },
    {
      title: "Blockchain Voting DApp",
      period: "2025",
      tech: ["Solidity", "Web3.js", "Hardhat", "Ethereum"],
      description: "Decentralized voting system with smart contracts deployed on Sepolia Testnet.",
      link: "#",
      company: "Blockchain Project"
    }
  ];

  const experiences = [
    {
      company: "PT Cypress Consulting",
      position: "Lead Software Developer",
      period: "Oct 2025 - Present",
      location: "Jakarta, Indonesia (Remote)",
      highlights: [
        "Leading a team of 3 developers in building scalable backend solutions",
        "Architecting microservices with gRPC and REST APIs",
        "Implementing CI/CD pipelines and containerization strategies"
      ]
    },
    {
      company: "PT Ciptakomunindo Pradipta",
      position: "Software Developer",
      period: "Jan 2025 - Present",
      location: "Jakarta, Indonesia",
      highlights: [
        "Developed enterprise-level systems with Laravel and Go",
        "Designed database schemas and optimized SQL queries",
        "Implemented real-time features using WebSocket and Server-Sent Events"
      ]
    },
    {
      company: "PT Ciptakom Media Nusa (Ciputra Group)",
      position: "Software Developer",
      period: "Dec 2023 – Jan 2025",
      location: "Jakarta, Indonesia",
      highlights: [
        "Developed ERP, WMS, and Recruitment systems serving 500+ daily users",
        "Managed VPS infrastructure with Plesk for high availability",
        "Conducted performance testing with JMeter achieving 95% response time improvement"
      ]
    }
  ];

  const education = [
    {
      institution: "Pelita Harapan University",
      degree: "Master of Informatics",
      period: "2023 – Present",
      gpa: "3.8/4.0 (Current)"
    },
    {
      institution: "Widya Dharma University Pontianak",
      degree: "Bachelor of Information System",
      period: "2019 – 2023",
      gpa: "3.70/4.00 (Cum Laude)"
    }
  ];

  const certifications = [
    {
      name: "Hacktiv8 - Back End Golang",
      issued: "Aug 2025",
      file: "/certificate-hacktiv8.pdf",
      issuer: "Hacktiv8 Indonesia"
    },
    {
      name: "Google Cloud Fundamentals",
      issued: "Jul 2025",
      file: "#",
      issuer: "Google Cloud"
    },
    {
      name: "Dumbways Indonesia - Fullstack Web Developer",
      issued: "Sept 2023",
      file: "/certificate-dumbways.pdf",
      issuer: "Dumbways Bootcamp"
    },
    {
      name: "Harisenin.com - Fullstack Laravel",
      issued: "May 2023",
      file: "/certificate-harisenin.pdf",
      issuer: "Harisenin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 font-sans">
      
      {/* Navigation - Professional */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-cyan-400">ERWIN</span>
            <span className="text-gray-300">DEV</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition text-sm"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section - Professional */}
      <section id="home" className="relative overflow-hidden py-32 px-6 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Flagship Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
              <FaCalendarAlt className="text-cyan-400" />
              <span className="text-sm">Available for remote positions worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-300">Backend</span>
              <span className="block text-cyan-400">Engineer</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-light mb-8 text-gray-400 max-w-2xl">
              Building scalable systems with Go • Microservices • Cloud Infrastructure
            </div>
            
            <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Software Engineer with 2+ years experience specializing in backend development. 
              Currently building enterprise systems with Go and Laravel. Passionate about 
              clean architecture, system performance, and DevOps practices.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Status</span>
                </div>
                <p className="text-lg">Open to Opportunities</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-3">
                  <FaGlobe className="text-cyan-400" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-lg">Jakarta, Indonesia</p>
                <p className="text-sm text-gray-500">(Remote Available)</p>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-3">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <p className="text-lg">2+ Years</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition group"
              >
                <FaEnvelope /> Contact for Opportunities
              </a>
              
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-transparent border-2 border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition"
              >
                <FaDownload /> Download CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </section>

      {/* Experience Section - Timeline Style */}
      <section id="experience" className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Professional</span> Experience
            </h2>
            <p className="text-gray-400 text-lg">2+ years building enterprise software solutions</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:w-1/2' : 'md:mr-auto md:w-1/2'}`}
                style={{ maxWidth: '500px' }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-950 z-10"></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-3">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                        <p className="text-cyan-400 text-lg font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <span className="flex items-center gap-2 text-gray-400">
                          <FaMapMarkerAlt size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Card Grid */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies I work with daily</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-cyan-400">
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    style={{ 
                      width: skill.level === 'Advanced' ? '90%' : 
                             skill.level === 'Intermediate' ? '70%' : '50%' 
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Tools & Methodologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST API Design', 'Microservices', 'gRPC', 'RabbitMQ', 
                'System Design', 'Clean Architecture', 'CI/CD', 'Git',
                'Agile/Scrum', 'Performance Testing', 'Database Design', 'DevOps'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-sm border border-gray-800 hover:border-cyan-500/30 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Cards */}
      <section id="projects" className="py-24 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Recent work showcasing technical capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400 mb-3">
                        {project.company}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    </div>
                    <span className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                    <a
                      href={project.link}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition group/link"
                    >
                      View Details
                      <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform" size={14} />
                    </a>
                    
                    {project.title.includes("Blockchain") && (
                      <div className="flex items-center gap-2 text-purple-500">
                        <SiEthereum size={20} />
                        <span className="text-sm">Blockchain</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                <span>Education</span>
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 transition group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <span className="text-sm text-cyan-400">{edu.gpa}</span>
                    </div>
                    <p className="text-cyan-400 mb-3">{edu.degree}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                <span>Certifications</span>
              </h2>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/30 transition group"
                  >
                    <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-cyan-400">Issued: {cert.issued}</span>
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg text-sm hover:bg-gray-700 transition group/link"
                      >
                        View
                        <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform" size={12} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Professional */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-950 to-black border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Currently open to backend engineering roles, freelance projects, 
              and technical discussions. Available for remote positions worldwide.
            </p>
            
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <FaEnvelope className="text-cyan-400 text-2xl mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:erwin14120824@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
                  erwin14120824@gmail.com
                </a>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <FaPhone className="text-cyan-400 text-2xl mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+62 857-1523-1512</p>
                <p className="text-sm text-gray-500 mt-1">WhatsApp Available</p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Jakarta, Indonesia</p>
                <p className="text-sm text-gray-500 mt-1">Remote Available</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/erwin1412"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition"
              >
                <FaLinkedin /> LinkedIn Profile
              </a>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-700 transition"
              >
                <FaGithub /> GitHub Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-cyan-400">ERWIN</span>
                <span className="text-gray-300">DEV</span>
              </div>
              <p className="text-gray-500 text-sm">Backend Engineer • System Architect</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-6 mb-4">
                <a href="https://github.com" className="text-gray-400 hover:text-white transition">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/erwin1412" className="text-gray-400 hover:text-[#0A66C2] transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:erwin14120824@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
                  <FaEnvelope size={20} />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Erwin. Available for opportunities worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;