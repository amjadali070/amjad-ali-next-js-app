"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    projectType: "E-commerce Platform"
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    company: "Digital Solutions Ltd.",
    rating: 5,
    testimonial: "Working with Amjad was a game-changer for our team. His expertise in React and Node.js helped us modernize our legacy system. He&apos;s not just a great developer but also an excellent mentor who shares knowledge generously.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    twitterUrl: "https://twitter.com/michaelchen",
    projectType: "System Modernization"
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "InnovateCorp",
    rating: 5,
    testimonial: "Amjad&apos;s ability to understand our business requirements and translate them into technical solutions is outstanding. The mobile-responsive dashboard he built has significantly improved our team&apos;s productivity and user satisfaction.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    projectType: "Analytics Dashboard"
  },
  {
    name: "David Thompson",
    position: "Founder & CEO",
    company: "StartupHub",
    rating: 5,
    testimonial: "From concept to deployment, Amjad managed our entire web application project flawlessly. His expertise in cloud architecture and modern development practices helped us scale efficiently as our user base grew.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/davidthompson",
    twitterUrl: "https://twitter.com/davidthompson",
    projectType: "SaaS Platform"
  },
  {
    name: "Lisa Wang",
    position: "Tech Lead",
    company: "CloudFirst Technologies",
    rating: 5,
    testimonial: "Amjad&apos;s deep understanding of both frontend and backend technologies made him an invaluable asset to our project. His code quality is exceptional, and he always considers performance and scalability from the start.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/lisawang",
    projectType: "Microservices Architecture"
  },
  {
    name: "James Wilson",
    position: "Operations Director",
    company: "Enterprise Solutions",
    rating: 5,
    testimonial: "The custom CRM system Amjad developed has transformed how we manage our client relationships. His attention to user experience and ability to integrate complex business logic seamlessly is impressive.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    projectType: "CRM System"
  }
];

export default function Testimonials({ 
  testimonials = defaultTestimonials 
}: TestimonialsProps) {
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
        className={index < rating ? "text-yellow-400" : "text-slate-500"}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <FaQuoteLeft className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Client Feedback
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">
              Client
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            What clients say about working with me
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center glass rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-slate-300">Happy Clients</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">4.9</div>
            <div className="text-slate-300">Average Rating</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 border border-purple-500/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 smooth-transition"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 smooth-transition"
                aria-label="Next testimonials"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="glass rounded-2xl p-8 smooth-transition hover:shadow-2xl hover:shadow-purple-500/20 relative border border-purple-500/20"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-400/20 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Project Type */}
                {testimonial.projectType && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                      {testimonial.projectType}
                    </span>
                  </div>
                )}

                {/* Testimonial Text */}
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  &quot;{testimonial.testimonial}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold overflow-hidden">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-300">{testimonial.position}</p>
                    <p className="text-sm text-slate-300 font-medium">{testimonial.company}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {testimonial.linkedinUrl && (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-400 smooth-transition"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {testimonial.twitterUrl && (
                      <a
                        href={testimonial.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 smooth-transition"
                      >
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                      : "bg-slate-500"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Join the growing list of satisfied clients who have transformed their ideas into successful digital solutions.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 smooth-transition font-medium">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
