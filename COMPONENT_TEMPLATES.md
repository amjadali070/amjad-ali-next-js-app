# Quick Reference Guide - Refactoring Remaining Components

## 🎨 Design System Quick Reference

### Colors
```typescript
// Backgrounds
bg-background      // #0B0F15
bg-surface         // #11161F
bg-panel           // #1A1F2E

// Borders
border-border      // rgba(255,255,255,0.08)

// Accents
text-accent-primary    // #4FC3F7
text-accent-secondary  // #5EE2FF
text-accent-tertiary   // #7DD3FC

// Text
text-text-primary      // #F1F5F9
text-text-secondary    // #94A3B8
text-text-muted        // #64748B

// Code Colors
text-code-green    // #4ADE80
text-code-blue     // #60A5FA
text-code-purple   // #A78BFA
text-code-orange   // #FB923C
```

### Typography
```typescript
font-sans          // Inter
font-mono          // JetBrains Mono
```

### Common Patterns

#### Section Header
```typescript
<div className="font-mono text-sm">
  <span className="text-code-purple">const</span>{" "}
  <span className="text-accent-primary">SectionName</span> ={" "}
  <span className="text-code-orange">() =&gt; {"{"}</span>
</div>
```

#### Card
```typescript
<div className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
  {/* content */}
</div>
```

#### Button
```typescript
<button className="px-6 py-3 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-all duration-300">
  Click Me
</button>
```

## 📝 Component Refactoring Templates

### 1. AboutMe Component

**Design Pattern**: Terminal-style bio

```typescript
"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUpVariants, staggerContainerVariants } from "../utils/motionVariants";

const AboutMe: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-code-purple">
            <span className="text-code-purple">function</span>{" "}
            <span className="text-accent-primary">AboutMe</span>
            <span className="text-text-secondary">() {"{"}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary pl-6">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            className="space-y-6"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-6 bg-surface border border-border rounded-lg font-mono text-sm">
              <div className="text-code-blue mb-2">bio: {`{`}</div>
              <div className="pl-4 space-y-2 text-text-secondary">
                {/* Your bio content */}
              </div>
              <div className="text-code-blue mt-2">{`}`}</div>
            </div>
          </motion.div>

          {/* Stats/Info */}
          <motion.div
            className="space-y-4"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stats cards */}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-12 font-mono text-sm text-text-secondary">{"}"}</div>
      </div>
    </section>
  );
};

export default AboutMe;
```

### 2. Services Component

**Design Pattern**: API Endpoint Cards

```typescript
const services = [
  {
    endpoint: "POST /services/web-dev",
    title: "Web Development",
    description: "...",
    icon: <HiCode />,
  },
  // ...
];

// Card structure
<div className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
  <div className="flex items-center gap-2 text-xs font-mono mb-4">
    <span className="px-2 py-1 bg-code-green/10 text-code-green rounded border border-code-green/20">
      POST
    </span>
    <span className="text-text-muted">{service.endpoint}</span>
  </div>
  
  <h3 className="text-xl font-bold text-text-primary mb-2">
    {service.title}
  </h3>
  
  <p className="text-text-secondary text-sm">
    {service.description}
  </p>
</div>
```

### 3. Experience Component

**Design Pattern**: Git Commit Timeline

```typescript
const experiences = [
  {
    commit: "feat: Senior Developer @ Company",
    date: "2023-01 → Present",
    description: "...",
    tags: ["React", "Node.js"],
  },
  // ...
];

// Timeline item
<div className="relative pl-8 pb-8 border-l-2 border-border">
  <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-accent-primary border-4 border-background" />
  
  <div className="bg-surface border border-border rounded-lg p-6">
    <div className="font-mono text-sm text-code-green mb-2">
      git commit -m "{experience.commit}"
    </div>
    
    <div className="text-xs font-mono text-text-muted mb-4">
      {experience.date}
    </div>
    
    <p className="text-text-secondary text-sm mb-4">
      {experience.description}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {experience.tags.map((tag) => (
        <span className="px-2 py-1 text-xs font-mono bg-panel border border-border rounded text-text-secondary">
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
```

### 4. Education Component

**Design Pattern**: Certificate/Badge Style

```typescript
<div className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 bg-panel border border-border rounded-lg flex items-center justify-center">
      <HiAcademicCap className="text-3xl text-accent-primary" />
    </div>
    
    <div className="flex-1">
      <h3 className="text-lg font-bold text-text-primary mb-1">
        {education.degree}
      </h3>
      
      <div className="font-mono text-sm text-code-blue mb-2">
        {education.institution}
      </div>
      
      <div className="text-xs font-mono text-text-muted">
        {education.year}
      </div>
    </div>
  </div>
</div>
```

### 5. Certifications Component

**Design Pattern**: Achievement Cards

```typescript
<div className="bg-surface border border-border rounded-lg p-6 group hover:border-accent-primary/50 transition-all duration-300">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-12 h-12 bg-panel border border-border rounded-lg flex items-center justify-center">
      <HiBadgeCheck className="text-2xl text-code-green" />
    </div>
    
    <div className="flex-1">
      <h3 className="text-lg font-bold text-text-primary">
        {cert.name}
      </h3>
      <div className="text-xs font-mono text-text-muted">
        {cert.issuer}
      </div>
    </div>
  </div>
  
  <div className="flex items-center justify-between">
    <span className="text-xs font-mono text-text-secondary">
      {cert.date}
    </span>
    
    <a
      href={cert.link}
      className="text-accent-primary hover:text-accent-secondary transition-colors"
    >
      <HiExternalLink />
    </a>
  </div>
</div>
```

### 6. Articles Component

**Design Pattern**: README.md Style

```typescript
<div className="bg-surface border border-border rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300">
  <div className="font-mono text-xs text-text-muted mb-4">
    # {article.title}
  </div>
  
  <h3 className="text-xl font-bold text-text-primary mb-3">
    {article.title}
  </h3>
  
  <p className="text-text-secondary text-sm mb-4 line-clamp-3">
    {article.excerpt}
  </p>
  
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
      <HiCalendar />
      <span>{article.date}</span>
    </div>
    
    <a
      href={article.link}
      className="px-4 py-2 bg-panel border border-border rounded-lg text-accent-primary font-mono text-sm hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all"
    >
      read-more →
    </a>
  </div>
</div>
```

### 7. Testimonials Component

**Design Pattern**: Code Review Style

```typescript
<div className="bg-surface border border-border rounded-lg p-6">
  <div className="flex items-start gap-4 mb-4">
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
      <img src={testimonial.avatar} alt={testimonial.name} />
    </div>
    
    <div className="flex-1">
      <div className="font-mono text-sm text-code-green mb-1">
        // Code Review by {testimonial.name}
      </div>
      <div className="text-xs font-mono text-text-muted">
        {testimonial.role} @ {testimonial.company}
      </div>
    </div>
  </div>
  
  <div className="pl-4 border-l-2 border-accent-primary/30">
    <p className="text-text-secondary text-sm italic">
      "{testimonial.message}"
    </p>
  </div>
  
  <div className="mt-4 flex gap-1">
    {[...Array(5)].map((_, i) => (
      <HiStar className="text-code-green" />
    ))}
  </div>
</div>
```

### 8. Footer Component

**Design Pattern**: Console Footer

```typescript
<footer className="relative py-12 bg-surface border-t border-border">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Column 1 */}
      <div>
        <div className="font-mono text-sm text-code-blue mb-4">
          footer.links.quick
        </div>
        {/* Links */}
      </div>
      
      {/* Column 2 */}
      <div>
        <div className="font-mono text-sm text-code-blue mb-4">
          footer.links.social
        </div>
        {/* Social links */}
      </div>
      
      {/* Column 3 */}
      <div>
        <div className="font-mono text-sm text-code-blue mb-4">
          footer.contact
        </div>
        {/* Contact info */}
      </div>
    </div>
    
    <div className="pt-8 border-t border-border text-center">
      <p className="font-mono text-sm text-text-muted">
        <span className="text-code-purple">//</span> Built with Next.js, TypeScript, and ❤️
      </p>
      <p className="font-mono text-xs text-text-muted mt-2">
        © 2025 Amjad Ali. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

## 🎭 Animation Patterns

### Fade In on Scroll
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

### Stagger Children
```typescript
<motion.div
  variants={staggerContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItemVariants}>
      {/* item content */}
    </motion.div>
  ))}
</motion.div>
```

### Card Hover
```typescript
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3 }}
  className="bg-surface border border-border rounded-lg p-6"
>
  {/* content */}
</motion.div>
```

## 🚀 Quick Start

1. Import motion variants:
```typescript
import {
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../utils/motionVariants";
```

2. Use consistent section structure:
```typescript
<section className="relative py-24 overflow-hidden bg-background">
  <div className="absolute inset-0 grid-pattern opacity-30" />
  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header with function syntax */}
    {/* Content */}
    {/* Footer with closing brace */}
  </div>
</section>
```

3. Apply color palette consistently
4. Use font-mono for code elements
5. Keep animations smooth and minimal

---

**Remember**: The goal is a clean, modern, professional developer aesthetic - NOT hacker/retro/VS Code themes!
