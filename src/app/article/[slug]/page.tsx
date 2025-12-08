"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { marked } from "marked";
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiCalendar,
  HiClock,
  HiTag,
  HiUser,
  HiCode,
  HiLightBulb,
} from "react-icons/hi";

// Import article data from Articles component
const articlesData: Record<string, any> = {
  "building-scalable-react-applications-nextjs-14": {
    title: "Building Scalable React Applications with Next.js 14",
    subtitle: "Mastering Modern Web Development",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build high-performance, scalable React applications.",
    content: `
# Building Scalable React Applications with Next.js 14

Next.js 14 represents a significant leap forward in React development. This article explores the key features and best practices.

## Server Components

Server Components are the most transformative feature in Next.js 14, enabling better performance and smaller bundle sizes.

## App Directory

The new App Directory provides intuitive routing and powerful layout composition capabilities.

## Conclusion

Next.js 14 is a game-changer for React developers, offering unprecedented performance and developer experience.
    `,
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Performance", "Server Components"],
    author: "Amjad Ali",
  },
};

export default function ArticleDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = articlesData[slug];

  // Configure marked
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Article Not Found
          </h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:bg-accent-secondary transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <HiArrowLeft className="text-xl" />
            <span>Back to Articles</span>
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* README.md Style Header */}
            <div className="font-mono text-sm text-code-blue">
              # <span className="text-accent-primary">{article.title}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              {article.subtitle}
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                <HiUser className="text-accent-primary" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                <HiCalendar className="text-accent-primary" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                <HiClock className="text-accent-primary" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-panel border border-border rounded text-sm font-mono text-text-secondary"
                >
                  <HiTag className="text-xs" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="article-content text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: marked(article.content) }}
            />
          </motion.article>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-sm text-text-muted">
                <span className="text-code-purple">//</span> End of article
              </div>
              <button
                onClick={() => router.back()}
                className="px-6 py-3 bg-surface border border-border text-text-primary rounded-lg hover:border-accent-primary/50 transition-all duration-300 font-mono text-sm"
              >
                ← Back to Articles
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .article-content h1,
        .article-content h2,
        .article-content h3 {
          color: var(--text-primary);
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .article-content h1 {
          font-size: 2.25rem;
        }

        .article-content h2 {
          font-size: 1.875rem;
        }

        .article-content h3 {
          font-size: 1.5rem;
        }

        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }

        .article-content code {
          background-color: var(--panel);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.875rem;
          color: var(--accent-primary);
        }

        .article-content pre {
          background-color: var(--surface);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .article-content pre code {
          background-color: transparent;
          padding: 0;
          color: var(--text-secondary);
        }

        .article-content ul,
        .article-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .article-content li {
          margin-bottom: 0.5rem;
        }

        .article-content a {
          color: var(--accent-primary);
          text-decoration: underline;
        }

        .article-content a:hover {
          color: var(--accent-secondary);
        }
      `}</style>
    </div>
  );
}
