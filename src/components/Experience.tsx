import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      organization: "Bosch Global Software Technologies",
      period: "October 2024 - Present",
      location: "Hyderabad, Telangana, India",
      description: "Angular Developer in the CNC HMI Team, responsible for developing and maintaining dynamic and reusable widgets using Angular.",
      highlights: [
        "Implementing responsive UI components with Angular framework",
        "Integrating with backend data layers for seamless functionality",
        "Collaborating with cross-functional teams to deliver high-quality features",
        "Enhancing user experience and performance of CNC system interfaces",
        "Working in agile development environment with continuous delivery"
      ]
    },
    {
      title: "Project Trainee",
      organization: "Bosch Global Software Technologies",
      period: "January 2023 - May 2023",
      location: "Bengaluru, Karnataka, India",
      description: "Completed comprehensive training program focusing on software development practices and modern web technologies.",
      highlights: [
        "Gained hands-on experience with Angular and TypeScript",
        "Learned industry best practices for software development",
        "Participated in team projects and code reviews",
        "Developed understanding of enterprise-level application architecture"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in software development, building robust applications and delivering exceptional user experiences
          </p>
        </motion.div>

        <Timeline items={experiences} type="experience" />
      </div>
    </section>
  );
};

export default Experience;