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
import dummyImage from "../app/assets/log-in.jpg";

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
    alert("Hire Me clicked!");
  };

  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A scalable e-commerce platform built with Next.js and Node.js.",
      image: dummyImage,
      link: "https://example.com/ecommerce",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "A sleek portfolio website to showcase my work and skills.",
      image: dummyImage,
      link: "https://example.com/portfolio",
      tags: ["React", "Tailwind CSS", "Vercel"],
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot built using TensorFlow and Python.",
      image: dummyImage,
      link: "https://example.com/ai-chatbot",
      tags: ["Python", "TensorFlow", "AI"],
    },
  ];

  return (
    <>
      <NavBar />
      <main className="p-4 bg-gradient-to-r from-gray-900 to-black text-white min-h-screen">
        <section id="home" className="pt-4">
          <HomeNav
            name="AMJAD ALI"
            greeting="Hi I am"
            role="FULL STACK - SOFTWARE ENGINEER"
            profileImage={myProfile}
            onHireMe={handleHireMe}
            onDownloadResume={handleDownloadResume}
            stats={[
              { value: "5+", label: "Experiences" },
              { value: "20+", label: "Project done" },
              { value: "80+", label: "Happy Clients" },
            ]}
            socialLinks={{
              github: "https://github.com/your-profile",
              linkedin: "https://www.linkedin.com/in/your-profile",
              twitter: "https://twitter.com/your-profile",
              behance: "https://www.behance.net/your-profile",
            }}
          />
        </section>

        <section id="services" className="pt-1">
          <Services
            heading="Services"
            subheading="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
            services={[
              {
                icon: <FaMobileAlt />,
                title: "App Design",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
              {
                icon: <FaDesktop />,
                title: "Web Design",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
              {
                icon: <FaCloud />,
                title: "Cloud Integration",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
              {
                icon: <FaPalette />,
                title: "UI/UX Design",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
              {
                icon: <FaDatabase />,
                title: "Database Management",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
              {
                icon: <FaCode />,
                title: "Custom Development",
                description:
                  "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
              },
            ]}
          />
        </section>

        <section id="about" className="pt-1">
          <AboutMe
            heading="About Me"
            subheading="User Interface And User Experience And Also Video Editing"
            content={`A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible 
            structures that shape our technological world. With fingers poised 
            over keyboards like virtuoso pianists, they compose symphonies of 
            logic, their minds a labyrinth of algorithms and solutions...`}
            image={dev}
            buttonLabel="Download CV"
            onDownloadCV={handleDownloadResume}
          />
        </section>

        <section id="skills" className="pt-1">
          <Skills />
        </section>

        <section id="projects" className="pt-1">
          <Projects heading="My Projects" projects={projects} />
        </section>

        <section id="contact" className="pt-1">
          <ContactMe />
        </section>

        <Footer />
      </main>
    </>
  );
}
