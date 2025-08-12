"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaCalendarAlt, FaExternalLinkAlt, FaTag, FaUser, FaArrowRight, FaEye } from "react-icons/fa";

interface Article {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  url?: string;
  author?: string;
  slug?: string;
}

interface ArticlesProps {
  heading?: string;
  articles?: Article[];
}

const defaultArticles: Article[] = [
  {
    title: "Building Scalable React Applications with Next.js 14",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build high-performance, scalable React applications with server components and improved routing.",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Performance", "Server Components"],
    url: "#",
    author: "Amjad Ali",
    slug: "building-scalable-react-applications-nextjs-14"
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt: "Deep dive into advanced TypeScript patterns, generic constraints, and architectural patterns that will make your code more maintainable and type-safe.",
    publishDate: "2023-12-20",
    readTime: "12 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
    url: "#",
    author: "Amjad Ali",
    slug: "mastering-typescript-advanced-patterns"
  },
  {
    title: "Cloud Architecture: Designing for Scale with AWS",
    excerpt: "Learn how to design and implement scalable cloud architectures using AWS services, with focus on reliability, security, and cost optimization.",
    publishDate: "2023-11-10",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud Architecture", "Scalability", "DevOps"],
    url: "#",
    author: "Amjad Ali",
    slug: "cloud-architecture-aws-scale"
  },
  {
    title: "The Future of Web Development: AI Integration and Automation",
    excerpt: "Exploring how artificial intelligence is reshaping web development workflows, from code generation to automated testing and deployment.",
    publishDate: "2023-10-25",
    readTime: "10 min read",
    category: "Technology Trends",
    tags: ["AI", "Machine Learning", "Automation", "Future Tech"],
    url: "#",
    author: "Amjad Ali",
    slug: "future-web-development-ai-integration"
  },
  {
    title: "Database Design Patterns for Modern Applications",
    excerpt: "Comprehensive guide to database design patterns, covering relational and NoSQL databases, with practical examples and performance considerations.",
    publishDate: "2023-09-15",
    readTime: "14 min read",
    category: "Database",
    tags: ["Database Design", "SQL", "NoSQL", "Performance"],
    url: "#",
    author: "Amjad Ali",
    slug: "database-design-patterns-modern-applications"
  },
  {
    title: "Microservices vs Monoliths: When to Choose What",
    excerpt: "A detailed comparison of microservices and monolithic architectures, helping you make informed decisions for your next project.",
    publishDate: "2023-08-30",
    readTime: "11 min read",
    category: "Software Architecture",
    tags: ["Microservices", "Architecture", "System Design", "Scalability"],
    url: "#",
    author: "Amjad Ali",
    slug: "microservices-vs-monoliths-comparison"
  }
];

const categoryColors: { [key: string]: string } = {
  "Web Development": "bg-blue-500/20 text-blue-400",
  "Programming": "bg-green-500/20 text-green-400",
  "Cloud Computing": "bg-purple-500/20 text-purple-400",
  "Technology Trends": "bg-orange-500/20 text-orange-400",
  "Database": "bg-cyan-500/20 text-cyan-400",
  "Software Architecture": "bg-pink-500/20 text-pink-400"
};

export default function Articles({ 
  articles = defaultArticles 
}: ArticlesProps) {
  const router = useRouter();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleReadArticle = (article: Article) => {
    if (article.slug) {
      try {
        router.push(`/article/${article.slug}`);
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback: open in new tab if available
        if (article.url && article.url !== '#') {
          window.open(article.url, '_blank');
        }
      }
    } else if (article.url && article.url !== '#') {
      window.open(article.url, '_blank');
    }
  };

  return (
    <section id="articles" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <FaTag className="text-yellow-400 text-sm" />
            <span className="text-slate-300 text-sm font-medium">
              Blog & Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block text-white mb-2">
              Articles &
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on software development and technology
          </p>
        </div>

        {/* Featured Article */}
        {articles.length > 0 && (
          <div className="mb-16">
            <div className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 smooth-transition">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">
                  Featured Article
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[articles[0].category] || 'bg-gray-500/20 text-gray-400'}`}>
                  {articles[0].category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text smooth-transition">
                {articles[0].title}
              </h3>
              
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{formatDate(articles[0].publishDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <FaUser className="text-cyan-400" />
                  <span>{articles[0].author}</span>
                </div>
                <span className="text-slate-300">{articles[0].readTime}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {articles[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 glass rounded-full text-sm text-slate-300 border border-purple-500/20"
                  >
                    <FaTag className="text-xs" />
                    {tag}
                  </span>
                ))}
              </div>
              
              {articles[0].url && (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleReadArticle(articles[0])}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 smooth-transition font-medium"
                  >
                    <FaEye />
                    Read Full Article
                    <FaArrowRight />
                  </button>
                  {articles[0].url && articles[0].url !== '#' && (
                    <a
                      href={articles[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 glass border border-purple-500/20 text-white rounded-lg hover:bg-purple-500/10 smooth-transition font-medium"
                    >
                      External Link
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <article
              key={index}
              className="glass rounded-2xl p-6 smooth-transition hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
              onClick={() => handleReadArticle(article)}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category] || 'bg-gray-500/20 text-gray-400'}`}>
                  {article.category}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadArticle(article);
                    }}
                    className="text-slate-400 hover:text-purple-400 smooth-transition opacity-0 group-hover:opacity-100"
                  >
                    <FaEye />
                  </button>
                  {article.url && article.url !== '#' && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-cyan-400 smooth-transition opacity-0 group-hover:opacity-100"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Article Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text smooth-transition line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-col gap-2 mb-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400 text-xs" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-cyan-400 text-xs" />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 glass rounded-md text-xs text-slate-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="px-2 py-1 glass rounded-md text-xs text-slate-400 border border-purple-500/20">
                    +{article.tags.length - 3}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">Her
              Follow my blog for the latest insights on web development, cloud architecture, and emerging technologies.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 smooth-transition font-medium">
              Subscribe to Newsletter
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
