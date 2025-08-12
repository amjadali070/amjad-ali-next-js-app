"use client";

import React from "react";
import NavBar from "./components/NavBar";
import HomeNav from "./components/HomeNav";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Skills from "./components/SkillsNew";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects, { Project } from "./components/Project";
import Articles from "./components/Articles";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import myProfile from "../app/assets/image.png";
import CRMThumbnail from "../app/assets/CRM Thumbnail.png";
import EaseWebhumbnail from "../app/assets/EaseWen Thumbnail.png";
import HRMThumbnail from "../app/assets/HRM Thumbnail.png";
import AIDBThumbnail from "../app/assets/AIDashboard.png";

import {
  FaDesktop,
  FaDatabase,
  FaCode,
  FaBrain,
} from "react-icons/fa";

export default function Home() {
  const handleHireMe = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:amjadpitafi070@gmail.com";
    }
  };

  const handleDownloadResume = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/file/d/1RL7kYxOqW5IqenJfAnwbfSMSfSEyPYeQ/view?usp=sharing";
      link.download = "Amjad_Ali_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const projects: Project[] = [
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Built a feature-rich CRM platform with contact management, sales tracking, and customer support integration. Implemented analytics and reporting modules for real-time insights.",
      image: CRMThumbnail,
      link: "https://github.com/amjadali070/crm-martechsol-frontend",
      tags: ["CRM", "Full-Stack", "Analytics"],
    },
    {
      title: "HR Management System (HRM)",
      description:
        "Developed a comprehensive HRM system with features including attendance tracking, leave management, and payroll processing. Designed a user-friendly dashboard to streamline HR tasks and improve operational efficiency.",
      image: HRMThumbnail,
      link: "https://github.com/amjadali070/hrm-martechsol-frontend",
      tags: ["MERN", "HRM", "Dashboard"],
    },
    {
      title: "AI Finance Dashboard",
      description:
        "Built a finance dashboard that shows predictions and budget advice using AI. Integrated ChatGPT to answer financial questions interactively.",
      image: AIDBThumbnail,
      link: "https://github.com/amjadali070/ai-prototype-charcentric",
      tags: ["AI", "Finance", "Next.js", "ChatGPT"],
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Created a dashboard to monitor live data and performance metrics. Used charts and graphs to visualize trends in real-time.",
      image: AIDBThumbnail, // Using AI Dashboard image as placeholder
      link: "#", // Add your GitHub link when available
      tags: ["Full-Stack", "Analytics", "Real-Time"],
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Developed a secure voting app using Ethereum smart contracts. Ensured transparent vote recording and result validation.",
      image: AIDBThumbnail, // Using AI Dashboard image as placeholder
      link: "#", // Add your GitHub link when available
      tags: ["Blockchain", "Solidity", "React"],
    },
    {
      title: "EaseWeb (Easy Website Builder)",
      description:
        "Built a drag-and-drop tool for users to design and publish websites. Supported live preview and responsive templates for easy customization.",
      image: EaseWebhumbnail,
      link: "https://github.com/amjadali070/site-builder-easeweb",
      tags: ["MERN", "Website Builder", "Drag-and-Drop"],
    },
  ];

  return (
    <>
      <NavBar />
      <main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* 1. Home - Landing/Hero Section */}
        <section id="home">
          <HomeNav
            name="AMJAD ALI"
            greeting="Hi, I am"
            role="SOFTWARE ENGINEER"
            profileImage={myProfile}
            onHireMe={handleHireMe}
            onDownloadResume={handleDownloadResume}
            stats={[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "15+", label: "Happy Clients" },
            ]}
            socialLinks={{
              github: "https://github.com/amjadali070",
              linkedin: "https://www.linkedin.com/in/amjadali070/",
            }}
          />
        </section>

        {/* 2. About - Personal Introduction */}
        <section id="about">
          <AboutMe
            heading="About Me"
            subheading="Software Engineer"
            content={`I'm a passionate Software Engineer with 2+ years of experience in building secure and scalable web applications using modern technologies. Currently working as a Software Engineer at Esanad (UAE), I specialize in full-stack development with expertise in React, Node.js, TypeScript, and backend technologies. I have extensive experience in creating comprehensive business solutions including CRM, HRM systems, AI dashboards, and insurance data platforms. I hold certifications from Harvard University (CS50) and freeCodeCamp, and I'm committed to writing clean, maintainable code while delivering exceptional user experiences that drive business growth.`}
            buttonLabel="Download CV"
            onDownloadCV={handleDownloadResume}
          />
        </section>

        {/* 3. Services - What I Offer */}
        <section id="services">
          <Services
            heading="My Services"
            subheading="Transforming ideas into powerful digital solutions with cutting-edge technologies and innovative approaches."
            services={[
              {
                icon: <FaCode />,
                title: "Full-Stack Development",
                description:
                  "End-to-end development solutions from concept to deployment using modern technology stacks like MERN, Next.js, and TypeScript.",
              },
              {
                icon: <FaDesktop />,
                title: "Web Development",
                description:
                  "Building responsive, scalable web applications with React, Next.js, and modern development practices for optimal performance.",
              },
              {
                icon: <FaBrain />,
                title: "AI & Machine Learning",
                description:
                  "Developing intelligent applications with AI integration, ChatGPT APIs, and machine learning models for predictive analytics.",
              },
              {
                icon: <FaDatabase />,
                title: "Backend & Database",
                description:
                  "Designing robust backend architectures, APIs, and database systems that ensure scalability and optimal performance.",
              },
            ]}
          />
        </section>

        {/* 4. Skills - Technical Expertise */}
        <section id="skills">
          <Skills />
        </section>

        {/* 5. Experience - Work History */}
        <section id="experience">
          <Experience />
        </section>

        {/* 6. Education - Academic Background */}
        <section id="education">
          <Education />
        </section>

        {/* 7. Projects - Portfolio Showcase */}
        <section id="projects">
          <Projects heading="Featured Projects" projects={projects} />
        </section>

        {/* 8. Certifications - Professional Credentials */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* 9. Articles - Thought Leadership */}
        <section id="articles">
          <Articles />
        </section>

        {/* 10. Testimonials - Social Proof */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* 11. Contact - Call to Action */}
        <section id="contact">
          <ContactMe />
        </section>

        <Footer />
      </main>
    </>
  );
}
