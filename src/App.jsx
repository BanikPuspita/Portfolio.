import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "./assets/my_pic.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white">
          <span className="text-teal-400 text-4xl">P</span>uspita Banik
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-teal-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-teal-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-teal-400 transition">
            Skills
          </a>
          <a href="#education" className="hover:text-teal-400 transition">Education</a>
          <a href="#resume" className="hover:text-teal-400 transition">
            Resume
          </a>
          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          <a
            href="#about"
            className="block hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
           <a href="#education" className="block hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>Education</a>
          <a
            href="#resume"
            className="block hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="block hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section with Picture */}
      <section className="flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-6 gap-10 pt-16">
        {/* Picture Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={profileImg}
            alt="Puspita Banik"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-teal-400 shadow-lg hover:scale-105 transform transition"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-teal-400">Puspita Banik</span>
          </h1>
          <p className="text-gray-300 mb-6">
            A passionate Web Developer who loves building interactive and modern
            web applications with React, Node JS, and Next JS.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-full shadow-lg hover:bg-teal-400 transition"
          >
            View My Work
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-center max-w-3xl mx-auto"
        >
          I am a web developer with expertise in ReactJS and NodeJS. I love
          building responsive and interactive applications that are both
          visually appealing and technically efficient.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-400">
              NutrifyLife - Health & Diet Management
            </h3>
            <p className="text-gray-300 mb-4">
              Team project: Contributed to the admin dashboard and key features
              of a health-focused web app built with React, Firebase, and
              MongoDB. Features include BMI & calorie calculator, personalized
              diet recommendations, and an AI-powered diet chatbot.
            </p>
            <a
              href="https://github.com/jannatulbakia/Nutrify_Life"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-medium"
            >
              View Project →
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-400">
              Travel & Tourism – Bangladesh Explorer
            </h3>
            <p className="text-gray-300 mb-4">
              Team project: Contributed to the destination pages, filter, and
              search functionality of a travel web app built with Next.js,
              Firebase, and MongoDB. Features include event calendar and a
              Gemini AI-powered chatbot for personalized travel recommendations.
            </p>
            <a
              href="https://github.com/jannatulbakia/Travel_And_Tourism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-medium"
            >
              View Project →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12 text-teal-400"
        >
          My Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Technical Skills
            </h3>
            {[
              { name: "HTML", level: 95 },
              { name: "CSS / Tailwind", level: 90 },
              { name: "JavaScript", level: 90 },
              { name: "ReactJS", level: 85 },
              { name: "NodeJS", level: 80 },
              { name: "NextJS", level: 65 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between mb-1 text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div
                    className="bg-teal-400 h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { name: "Communication", level: 90 },
                { name: "Teamwork", level: 90 },
                { name: "Problem Solving", level: 80 },
                { name: "Time Management", level: 90 },
              ].map((skill, index) => {
                const radius = 40; // % of SVG width
                const circumference = 2 * Math.PI * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full rotate-[-90deg]">
                        
                        <circle
                          cx="50%"
                          cy="50%"
                          r={radius}
                          className="stroke-gray-800 stroke-4 fill-none"
                        />
                      
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r={radius}
                          stroke="#14b8a6" // teal-400
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference}
                          animate={{
                            strokeDashoffset:
                              circumference * (1 - skill.level / 100),
                          }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-semibold">
                        {skill.level}%
                      </div>
                    </div>
                    <span className="mt-2 text-gray-300">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* education section */}
      {/* Education Timeline Section */}
<section id="education" className="py-20 px-6 md:px-20 bg-gray-800">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-bold text-center mb-12 text-teal-400"
  >
    Education
  </motion.h2>

  <div className="relative max-w-3xl mx-auto">
    {/* Vertical line */}
    <div className="absolute left-4 top-0 h-full w-1 bg-teal-500"></div>

    {/* B.Sc. */}
    <div className="relative pl-12 mb-12">
      <span className="absolute left-0 top-1 w-8 h-8 bg-teal-500 rounded-full border-4 border-gray-800"></span>
      <h3 className="text-xl font-semibold text-teal-400">
        Bachelor of Science in Computer Science & Engineering (CSE)
      </h3>
      <p className="text-gray-300">
        Bangladesh Army International University of Science & Technology, BAIUST, Bangladesh | 2022 – Present <br /> CGPA: 3.83 / 4.00
      </p>
    </div>

    {/* HSC */}
    <div className="relative pl-12 mb-12">
      <span className="absolute left-0 top-1 w-8 h-8 bg-teal-500 rounded-full border-4 border-gray-800"></span>
      <h3 className="text-xl font-semibold text-teal-400">
        Higher Secondary Certificate (H.S.C.)
      </h3>
      <p className="text-gray-300">
        Cumilla Govt Women's College | 2018 – 2020 <br /> GPA: 5.00 / 5.00
      </p>
    </div>

    {/* SSC */}
    <div className="relative pl-12">
      <span className="absolute left-0 top-1 w-8 h-8 bg-teal-500 rounded-full border-4 border-gray-800"></span>
      <h3 className="text-xl font-semibold text-teal-400">
        Secondary School Certificate (S.S.C.)
      </h3>
      <p className="text-gray-300">
        Our Lady Of Fatima Girls' High School, Bangladesh | 2018 <br /> GPA: 5.00 / 5.00
      </p>
    </div>
  </div>
</section>



      {/* Resume Section */}
      <section
        id="resume"
        className="py-20 px-6 md:px-20 bg-gray-900 text-center"
      >
        <h2 className="text-3xl font-bold text-teal-400 mb-6">My Resume</h2>
        <p className="text-gray-300 mb-6">
          Download my resume to see my skills, projects.
        </p>
        <a
          href="../public/Puspita Banik_resume.pdf"
          download
          className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-full shadow-lg hover:bg-teal-400 transition inline-flex items-center gap-2"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-800">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-teal-400"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <p className="text-gray-300 mb-2">
            📧 Email:{" "}
            <a
              href="mailto:puspitabanik213@gmail.com"
              className="text-teal-400 hover:underline"
            >
              puspitabanik213@gmail.com
            </a>
          </p>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/puspita.banik.2024?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/BanikPuspita"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/puspitabanik/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
