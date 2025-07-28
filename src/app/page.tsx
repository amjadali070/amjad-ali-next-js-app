"use client";

import React from "react";
import NavBar from "./components/NavBar";
import HomeNav from "./components/HomeNav";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Skills from "./components/SkillsNew";
import Projects, { Project } from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import myProfile from "../app/assets/image.png";
import dev from "../app/assets/amjad-dev.png";
import CRMThumbnail from "../app/assets/CRM Thumbnail.png";
import EaseWebhumbnail from "../app/assets/EaseWen Thumbnail.png";
import HRMThumbnail from "../app/assets/HRM Thumbnail.png";
import AIDBThumbnail from "../app/assets/AIDashboard.png";

import {
  FaMobileAlt,
  FaDesktop,
  FaCloud,
  FaPalette,
  FaDatabase,
  FaCode,
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
      title: "HR Management System (HRM)",
      description:
        "Developed a comprehensive HRM system with features including attendance tracking, leave management, and payroll processing. Designed a user-friendly dashboard to streamline HR tasks and improve operational efficiency.",
      image: HRMThumbnail,
      link: "https://github.com/amjadali070/hrm-martechsol-frontend",
      tags: ["MERN", "HRM", "Dashboard"],
    },
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Built a feature-rich CRM platform with contact management, sales tracking, and customer support integration. Implemented analytics and reporting modules for real-time insights.",
      image: CRMThumbnail,
      link: "https://github.com/amjadali070/crm-martechsol-frontend",
      tags: ["CRM", "Full-Stack", "Analytics"],
    },
    {
      title: "AI Finance Dashboard",
      description:
        "Developed a predictive finance dashboard providing actionable insights and financial recommendations. Leveraged ChatGPT for personalized user guidance and enhanced financial planning.",
      image: AIDBThumbnail,
      link: "https://github.com/amjadali070/ai-prototype-charcentric",
      tags: ["AI", "Finance", "Next.js", "ChatGPT"],
    },
    {
      title: "EaseWeb (Easy Website Builder)",
      description:
        "Created a user-friendly drag-and-drop interface enabling users to effortlessly build websites. Implemented dynamic template rendering to enhance user engagement.",
      image: EaseWebhumbnail,
      link: "https://github.com/amjadali070/site-builder-easeweb",
      tags: ["MERN", "Website Builder", "Drag-and-Drop"],
    },
  ];

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section id="home">
          <HomeNav
            name="AMJAD ALI"
            greeting="Hi, I am"
            role="FULL STACK SOFTWARE ENGINEER"
            profileImage={myProfile}
            onHireMe={handleHireMe}
            onDownloadResume={handleDownloadResume}
            stats={[
              { value: "3+", label: "Years Experience" },
              { value: "15+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
            ]}
            socialLinks={{
              github: "https://github.com/amjadali070",
              linkedin: "https://www.linkedin.com/in/amjadali070/",
            }}
          />
        </section>

        <section id="services">
          <Services
            heading="My Services"
            subheading="Transforming ideas into powerful digital solutions with cutting-edge technologies and innovative approaches."
            services={[
              {
                icon: <FaMobileAlt />,
                title: "Mobile App Development",
                description:
                  "Creating intuitive and performant mobile applications with modern frameworks like React Native and Flutter.",
              },
              {
                icon: <FaDesktop />,
                title: "Web Development",
                description:
                  "Building responsive, scalable web applications using React, Next.js, and modern development practices.",
              },
              {
                icon: <FaCloud />,
                title: "Cloud Solutions",
                description:
                  "Implementing robust cloud architectures with AWS, Azure, and Google Cloud for scalability and reliability.",
              },
              {
                icon: <FaPalette />,
                title: "UI/UX Design",
                description:
                  "Crafting beautiful and user-friendly interfaces that provide exceptional user experiences.",
              },
              {
                icon: <FaDatabase />,
                title: "Database Architecture",
                description:
                  "Designing efficient database systems and APIs that ensure data integrity and optimal performance.",
              },
              {
                icon: <FaCode />,
                title: "Full-Stack Development",
                description:
                  "End-to-end development solutions from concept to deployment using modern technology stacks.",
              },
            ]}
          />
        </section>

        <section id="about">
          <AboutMe
            heading="About Me"
            subheading="Full Stack Software Engineer"
            content={`I'm a passionate Full Stack Developer with expertise in modern web technologies, AI integration, and scalable system architecture. With a proven track record of delivering high-quality solutions, I specialize in React, Next.js, Node.js, and cloud technologies. I believe in writing clean, maintainable code and creating exceptional user experiences that drive business growth.`}
            image={dev}
            buttonLabel="Download CV"
            onDownloadCV={handleDownloadResume}
          />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects heading="Featured Projects" projects={projects} />
        </section>

        <section id="contact">
          <ContactMe />
        </section>

        <Footer />
      </main>
    </>
  );
}
