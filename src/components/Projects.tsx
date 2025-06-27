import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Investment Calculator",
      description: "A web app to calculate investment growth over time with interactive charts.",
      longDescription: "A React-based investment calculator that allows users to input principal, interest rate, and duration to visualize investment growth. Features dynamic charting, responsive UI, and real-time calculations. Built with React, TypeScript, and Chart.js.",
      technologies: ["Angular", "Typescript" , "Javascript" , "HTML" , "CSS"],
      image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/sudeep467/investment-calculator",
      liveUrl: "https://investment-calc.dev",
      duration: "2 weeks",
      team: "Solo project",
      challenges: [
        "Implemented compound interest calculations with edge case handling",
        "Integrated Chart.js for dynamic data visualization",
        "Ensured mobile responsiveness and accessibility"
      ],
      features: [
        "Real-time investment growth visualization",
        "Customizable input parameters",
        "Interactive and responsive charts",
        "Export results as images"
      ]
    },
    {
      id: 2,
      title: "Hotel Appointment App",
      description: "A booking platform for hotel appointments with calendar integration and notifications.",
      longDescription: "Developed a full-stack hotel appointment app enabling users to book, modify, and cancel hotel appointments. Features include calendar integration, email notifications, and admin dashboard. Built with React, Node.js, and MongoDB.",
      technologies: ["Angular", "Typescript" , "Javascript" , "HTML" , "CSS"],
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/sudeep467/appointment-app",
      liveUrl: "https://hotelapp.dev",
      duration: "1 month",
      team: "2 developers",
      challenges: [
        "Integrated third-party calendar APIs",
        "Implemented secure authentication and authorization",
        "Handled booking conflicts and real-time updates"
      ],
      features: [
        "User-friendly booking interface",
        "Calendar and email notification integration",
        "Admin dashboard for managing appointments",
        "Responsive and accessible design"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Framer Motion animations",
      longDescription: "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies including React, TypeScript, and Framer Motion for smooth animations. Features responsive design, contact form integration, and project showcase with detailed modals.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/sudeep467/my-portfolio",
      liveUrl: "https://my-portfolio-ivvli570s-sudeep-k-us-projects.vercel.app/",
      duration: "3 weeks",
      team: "Solo project",
      challenges: [
        "Implemented smooth scroll animations and micro-interactions",
        "Created responsive design that works across all device sizes",
        "Integrated EmailJS for contact form functionality",
        "Optimized performance and accessibility scores"
      ],
      features: [
        "Responsive design with mobile-first approach",
        "Smooth scroll animations and transitions",
        "Interactive project showcase with modals",
        "Contact form with email integration",
        "SEO optimized with meta tags",
        "Fast loading with optimized assets"
      ]
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-lg hover:bg-white transition-all duration-200 transform scale-95 hover:scale-100"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-lg transition-all duration-200 hover:shadow-md"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-lg transition-all duration-200 hover:shadow-md"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;