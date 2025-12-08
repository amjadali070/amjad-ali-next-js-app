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
      link.href = "/Amjad_Ali_Resume.pdf";
      link.download = "Amjad_Ali_Resume.pdf";
      link.target = "_blank";
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
      image: AIDBThumbnail,
      link: "#", // Client project - no demo available
      tags: ["Full-Stack", "Analytics", "Real-Time"],
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Developed a secure voting app using Ethereum smart contracts. Ensured transparent vote recording and result validation.",
      image: AIDBThumbnail,
      link: "#", // Client project - no demo available
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
      <main className="bg-gradient-to-br from-slate-900 via-[#0C2B4E] to-slate-900">
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
              { value: "10+", label: "Happy Clients" },
            ]}
            socialLinks={{
              github: "https://github.com/amjadali070",
              linkedin: "https://www.linkedin.com/in/amjadali070/",
            }}
          />
        </section>

        {/* 2. About - Personal Introduction */}
        <section id="about">
          <AboutMe />
        </section>

        {/* 3. Services - What I Offer */}
        <section id="services">
          <Services />
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
          <Projects />
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
