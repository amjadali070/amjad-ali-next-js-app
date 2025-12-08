"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  rating: number;
  testimonial: string;
  image?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  projectType?: string;
}

interface TestimonialsProps {
  heading?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechStart Inc.",
    rating: 5,
    testimonial: "Amjad delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and ability to translate complex requirements into elegant code is remarkable. The project was delivered on time and within budget.",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    projectType: "E-commerce Platform",
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    company: "Digital Solutions Ltd.",
    rating: 5,
    testimonial: "Working with Amjad was a game-changer for our team. His expertise in React and Node.js helped us modernize our legacy system. He's not just a great developer but also an excellent mentor who shares knowledge generously.",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    twitterUrl: "https://twitter.com/michaelchen",
    projectType: "System Modernization",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "InnovateCorp",
    rating: 5,
    testimonial: "Amjad's ability to understand our business requirements and translate them into technical solutions is outstanding. The mobile-responsive dashboard he built has significantly improved our team's productivity and user satisfaction.",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    projectType: "Analytics Dashboard",
  },
  {
    name: "David Thompson",
    position: "Founder & CEO",
    company: "StartupHub",
    rating: 5,
    testimonial: "From concept to deployment, Amjad managed our entire web application project flawlessly. His expertise in cloud architecture and modern development practices helped us scale efficiently as our user base grew.",
    linkedinUrl: "https://linkedin.com/in/davidthompson",
    twitterUrl: "https://twitter.com/davidthompson",
    projectType: "SaaS Platform",
  },
  {
    name: "Lisa Wang",
    position: "Tech Lead",
    company: "CloudFirst Technologies",
    rating: 5,
    testimonial: "Amjad's deep understanding of both frontend and backend technologies made him an invaluable asset to our project. His code quality is exceptional, and he always considers performance and scalability from the start.",
    linkedinUrl: "https://linkedin.com/in/lisawang",
    projectType: "Microservices Architecture",
  },
  {
    name: "James Wilson",
    position: "Operations Director",
    company: "Enterprise Solutions",
    rating: 5,
    testimonial: "The custom CRM system Amjad developed has transformed how we manage our client relationships. His attention to user experience and ability to integrate complex business logic seamlessly is impressive.",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    projectType: "CRM System",
  },
];

export default function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage] = useState(3);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-code-green" : "text-text-muted"}
      />
    ));
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return names[0].charAt(0) + names[1].charAt(0);
    }
    return names[0].charAt(0);
  };

  const getAvatarGradient = (index: number) => {
    const gradients = [
      "from-accent-primary to-accent-secondary",
      "from-code-blue to-code-purple",
      "from-code-green to-accent-primary",
      "from-code-orange to-code-purple",
      "from-accent-secondary to-code-blue",
      "from-code-purple to-accent-primary",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Code Review Style */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-green">
            <span className="text-code-purple">//</span> Code Reviews & Feedback
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            Client Testimonials
          </h2>

          <p className="text-text-secondary text-lg pl-6 max-w-2xl">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center text-background hover:bg-accent-secondary transition-colors duration-300"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center text-background hover:bg-accent-secondary transition-colors duration-300"
                aria-label="Next testimonials"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300 relative"
                variants={staggerItemVariants}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-accent-primary/10 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Project Type */}
                {testimonial.projectType && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-panel border border-border rounded text-sm font-mono text-text-muted">
                      {testimonial.projectType}
                    </span>
                  </div>
                )}

                {/* Testimonial Text */}
                <p className="text-text-secondary mb-6 leading-relaxed italic text-sm">
                  &quot;{testimonial.testimonial}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${getAvatarGradient(
                      currentIndex + index
                    )} rounded-lg flex items-center justify-center text-background font-bold text-sm overflow-hidden`}
                  >
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      getInitials(testimonial.name)
                    )}
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className="font-bold text-text-primary font-mono text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-text-muted">{testimonial.position}</p>
                    <p className="text-xs text-text-secondary font-medium">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {testimonial.linkedinUrl && (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-primary transition-colors"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {testimonial.twitterUrl && (
                      <a
                        href={testimonial.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-primary transition-colors"
                      >
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "bg-accent-primary w-8"
                      : "bg-border"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer - CTA */}
        <motion.div
          className="mt-16 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-mono text-sm text-text-muted">
            <span className="text-code-purple">//</span> {testimonials.length} satisfied clients
          </div>

          <div className="p-6 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <HiCode className="text-accent-primary text-3xl" />
              <div className="flex-1">
                <h3 className="text-text-primary font-semibold mb-1 font-mono">
                  ready_to_work_together()
                </h3>
                <p className="text-text-secondary text-sm">
                  Join the growing list of satisfied clients who have transformed their ideas
                  into successful digital solutions.
                </p>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-300"
              >
                Start Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
