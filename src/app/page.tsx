"use client";

import React from "react";
import NavBar from "./components/NavBar";
import HomeNav from "./components/HomeNav";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
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
    window.location.href = "mailto:amjadpitafi070@gmail.com";
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1RL7kYxOqW5IqenJfAnwbfSMSfSEyPYeQ/view?usp=sharing";
    link.download = "Amjad_Ali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <main className="p-4 bg-gradient-to-r from-gray-900 to-black text-white min-h-screen">
        <section id="home" className="pt-10">
          <HomeNav
            name="AMJAD ALI"
            greeting="Hi, I am"
            role="FULL STACK SOFTWARE ENGINEER"
            profileImage={myProfile}
            onHireMe={handleHireMe}
            onDownloadResume={handleDownloadResume}
            stats={[
              { value: "3+", label: "Experiences" },
              { value: "4+", label: "Projects done" },
              { value: "20+", label: "Happy Clients" },
            ]}
            socialLinks={{
              github: "https://github.com/amjadali070",
              linkedin: "https://www.linkedin.com/in/amjadali070/",
            }}
          />
        </section>

        <section id="services" className="pt-10">
          <Services
            heading="Services"
            subheading="Providing scalable web and AI-powered software solutions to drive business success."
            services={[
              {
                icon: <FaMobileAlt />,
                title: "App Design",
                description:
                  "Crafting intuitive mobile applications with a focus on user-centric design and performance.",
              },
              {
                icon: <FaDesktop />,
                title: "Web Design",
                description:
                  "Designing responsive and modern web interfaces that engage and convert users.",
              },
              {
                icon: <FaCloud />,
                title: "Cloud Integration",
                description:
                  "Implementing seamless cloud solutions to enhance scalability and efficiency.",
              },
              {
                icon: <FaPalette />,
                title: "UI/UX Design",
                description:
                  "Creating visually appealing and user-friendly designs that improve user experiences.",
              },
              {
                icon: <FaDatabase />,
                title: "Database Management",
                description:
                  "Ensuring robust and secure data management systems to support business operations.",
              },
              {
                icon: <FaCode />,
                title: "Custom Development",
                description:
                  "Developing tailor-made software solutions that meet specific business needs.",
              },
            ]}
          />
        </section>

        <section id="about" className="pt-10">
          <AboutMe
            heading="About Me"
            subheading="Full Stack Software Engineer"
            content={`Results-driven Full Stack Developer with expertise in JavaScript, TypeScript, React JS, Next JS, Node JS, databases, and AI-powered solutions. Proven ability to deliver scalable web applications and collaborate with cross-functional teams. Passionate about continuous learning and solving complex problems in technology.`}
            image={dev}
            buttonLabel="Download CV"
            onDownloadCV={handleDownloadResume}
          />
        </section>

        <section id="skills" className="pt-10">
          <Skills />
        </section>

        <section id="projects" className="pt-8">
          <Projects heading="Noteable Projects" projects={projects} />
        </section>

        <section id="contact" className="pt-8">
          <ContactMe />
        </section>

        <Footer />
      </main>
    </>
  );
}
