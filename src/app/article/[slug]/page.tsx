"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { marked } from "marked";
import {
  HiArrowLeft,
  HiCalendar,
  HiClock,
  HiTag,
  HiUser,
  HiBookOpen,
  HiLightBulb,
  HiCode,
  HiSparkles,
  HiShare,
} from "react-icons/hi";

interface ArticleDetail {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  publishDate: string;
  lastUpdated: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  keyTakeaways: string[];
  codeExamples: {
    title: string;
    language: string;
    code: string;
    explanation: string;
  }[];
  resources: {
    title: string;
    url: string;
    type: "Documentation" | "Tutorial" | "Tool" | "Library";
  }[];
}

const articlesData: Record<string, ArticleDetail> = {
  "building-scalable-react-applications-nextjs-14": {
    id: "building-scalable-react-applications-nextjs-14",
    title: "Building Scalable React Applications with Next.js 14",
    subtitle: "Mastering Modern Web Development",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build high-performance, scalable React applications with server components and improved routing.",
    content: `
Next.js 14 represents a significant leap forward in React development, introducing groundbreaking features that redefine how we build modern web applications. As a full-stack developer who has worked extensively with React ecosystems, I've witnessed firsthand how Next.js 14's innovations can dramatically improve both developer experience and application performance.

## The Revolution of Server Components

Server Components are perhaps the most transformative feature in Next.js 14. Unlike traditional React components that render on the client, Server Components execute on the server, sending only the rendered HTML to the browser. This approach eliminates the need to send JavaScript for these components, resulting in smaller bundle sizes and faster page loads.

### Why Server Components Matter

In my experience building enterprise applications, I've seen how client-side rendering can become a performance bottleneck. With Server Components, we can now fetch data directly on the server without exposing API endpoints to the client, improving both security and performance.

## Advanced Routing with App Directory

The App Directory introduces a new paradigm for routing that's more intuitive and powerful than the traditional pages directory. Each folder represents a route segment, and special files like layout.js, page.js, and loading.js provide granular control over the UI.

### Layout Composition

One of the most powerful features is nested layouts. You can create shared layouts that persist across route changes, maintaining state and avoiding unnecessary re-renders. This is particularly useful for complex applications with multiple levels of navigation.

## Performance Optimization Strategies

### Bundle Optimization

Next.js 14's improved bundling strategies include better tree-shaking and automatic code splitting. The framework now generates smaller JavaScript bundles by default, and the new bundler provides more granular control over what gets included in each chunk.

### Image and Font Optimization

The enhanced Image component now supports better lazy loading and automatic format selection. Combined with the new Font optimization features, your applications can achieve better Core Web Vitals scores out of the box.

## State Management in the Server Component Era

With Server Components, traditional state management patterns need to evolve. While client components still use familiar patterns like useState and useContext, Server Components require different approaches for data fetching and state handling.

### Server Actions

Server Actions provide a seamless way to mutate data from client components without creating API routes. This feature bridges the gap between server and client, enabling form submissions and data mutations with minimal boilerplate.

## Best Practices for Production

### Error Handling

Implement comprehensive error boundaries and use Next.js 14's improved error handling mechanisms. The new error.js file convention allows for granular error UI customization at any route level.

### Monitoring and Analytics

Leverage Next.js 14's built-in analytics capabilities and integrate with monitoring tools to track performance metrics and user interactions. This data is crucial for optimizing user experience and identifying bottlenecks.

## Conclusion

Next.js 14 isn't just an incremental update; it's a fundamental shift in how we think about React applications. By embracing Server Components, optimizing routing strategies, and following modern best practices, developers can build applications that are not only more performant but also more maintainable and scalable.

The framework's continued evolution demonstrates the React team's commitment to pushing the boundaries of web development. As we move forward, these patterns and practices will become essential skills for any serious React developer.
    `,
    publishDate: "2024-01-15",
    lastUpdated: "2024-01-20",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Performance", "Server Components", "Full-Stack"],
    author: "Amjad Ali",
    difficulty: "Intermediate",
    keyTakeaways: [
      "Server Components reduce bundle sizes and improve performance",
      "App Directory provides more intuitive routing and layout composition",
      "Server Actions eliminate the need for many API routes",
      "Proper error handling is crucial for production applications",
      "Bundle optimization strategies can significantly improve Core Web Vitals"
    ],
    codeExamples: [
      {
        title: "Server Component with Data Fetching",
        language: "tsx",
        code: `// app/posts/page.tsx
async function PostsPage() {
  // This runs on the server
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsPage;`,
        explanation: "Server Components can fetch data directly without client-side JavaScript, improving performance and security."
      },
      {
        title: "Nested Layouts with App Directory",
        language: "tsx",
        code: `// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}`,
        explanation: "Layouts wrap pages and persist across navigation, perfect for shared UI elements like sidebars and headers."
      }
    ],
    resources: [
      {
        title: "Next.js 14 Official Documentation",
        url: "https://nextjs.org/docs",
        type: "Documentation"
      },
      {
        title: "React Server Components Guide",
        url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023",
        type: "Documentation"
      },
      {
        title: "Next.js App Directory Migration Guide",
        url: "https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration",
        type: "Tutorial"
      }
    ]
  },
  "mastering-typescript-advanced-patterns": {
    id: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    subtitle: "Type-Safe Development at Scale",
    excerpt: "Deep dive into advanced TypeScript patterns, generic constraints, and architectural patterns that will make your code more maintainable and type-safe.",
    content: `
TypeScript has evolved from a simple type overlay for JavaScript into a sophisticated type system that can express complex relationships and constraints. After years of working with TypeScript in enterprise environments, I've discovered patterns that go far beyond basic type annotations.

## Advanced Generic Patterns

### Conditional Types and Template Literals

Conditional types allow you to create types that adapt based on input types. Combined with template literal types, you can create incredibly expressive type systems that provide excellent developer experience.

### Mapped Types for API Design

Mapped types enable you to transform existing types systematically. This is particularly powerful when designing APIs that need to maintain type safety across different operations while providing flexibility.

## Type-Level Programming

TypeScript's type system is Turing complete, meaning you can perform computations at the type level. While this might seem academic, these techniques have practical applications in creating robust, self-documenting APIs.

### Recursive Types for Tree Structures

When working with nested data structures like JSON schemas or ASTs, recursive types ensure type safety throughout the entire structure, no matter how deeply nested.

## Architectural Patterns

### Domain-Driven Design with TypeScript

TypeScript's type system excels at expressing domain concepts. By using branded types, discriminated unions, and careful interface design, you can create code that's impossible to misuse.

### Error Handling Patterns

Moving beyond try-catch blocks, TypeScript enables functional error handling patterns that make error states explicit and manageable.

## Performance Considerations

### Compilation Performance

As TypeScript projects grow, compilation time can become a bottleneck. Understanding how the type checker works and optimizing your type definitions can dramatically improve build times.

### Runtime Implications

While TypeScript erases types at runtime, certain patterns can impact the generated JavaScript. Knowing when and how to optimize is crucial for performance-critical applications.

## Testing Type Safety

### Unit Testing for Types

Type-level unit tests ensure your type definitions work as expected and catch regressions during refactoring. Tools like tsd and expect-type make this process straightforward.

## Tooling and Developer Experience

### IDE Integration

Maximizing your IDE's TypeScript integration can dramatically improve productivity. Custom type definitions can provide rich IntelliSense experiences that guide API usage.

### Configuration Best Practices

TypeScript's configuration system is powerful but complex. Understanding how to configure the compiler for different environments and use cases is essential for teams.

## Migration Strategies

### Gradual Adoption

Migrating large JavaScript codebases to TypeScript requires strategy. I'll share proven techniques for incremental migration that minimize disruption while maximizing type safety benefits.

## Conclusion

Mastering advanced TypeScript patterns requires thinking differently about types. They're not just documentation; they're a powerful tool for expressing intent, preventing errors, and creating better developer experiences. The investment in learning these patterns pays dividends in code quality, maintainability, and team productivity.
    `,
    publishDate: "2023-12-20",
    lastUpdated: "2024-01-05",
    readTime: "12 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture", "Type Safety"],
    author: "Amjad Ali",
    difficulty: "Advanced",
    keyTakeaways: [
      "Conditional types enable powerful type transformations",
      "Mapped types are essential for API design patterns",
      "TypeScript's type system supports domain-driven design",
      "Performance optimization requires understanding the type checker",
      "Type-level testing prevents regressions in complex type definitions"
    ],
    codeExamples: [
      {
        title: "Conditional Types for API Responses",
        language: "typescript",
        code: `type ApiResponse<T> = T extends string 
  ? { data: string; format: 'text' }
  : T extends number 
  ? { data: number; format: 'numeric' }
  : T extends object 
  ? { data: T; format: 'json' }
  : never;

// Usage
type StringResponse = ApiResponse<string>;  // { data: string; format: 'text' }
type UserResponse = ApiResponse<User>;      // { data: User; format: 'json' }`,
        explanation: "Conditional types allow the return type to change based on the input type, providing better type safety."
      },
      {
        title: "Branded Types for Domain Safety",
        language: "typescript",
        code: `type UserId = string & { readonly brand: unique symbol };
type Email = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  // Validation logic here
  return id as UserId;
}

function sendEmail(userId: UserId, email: Email) {
  // TypeScript prevents mixing up IDs and emails
}`,
        explanation: "Branded types prevent accidentally passing one type of string where another is expected, catching errors at compile time."
      }
    ],
    resources: [
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/",
        type: "Documentation"
      },
      {
        title: "Type Challenges",
        url: "https://github.com/type-challenges/type-challenges",
        type: "Tutorial"
      },
      {
        title: "tsd - Test TypeScript definitions",
        url: "https://github.com/SamVerschueren/tsd",
        type: "Tool"
      }
    ]
  },
  "cloud-architecture-aws-scale": {
    id: "cloud-architecture-aws-scale",
    title: "Cloud Architecture: Designing for Scale with AWS",
    subtitle: "Building Resilient Systems in the Cloud",
    excerpt: "Learn how to design and implement scalable cloud architectures using AWS services, with focus on reliability, security, and cost optimization.",
    content: `
Designing scalable cloud architectures requires a fundamental shift in thinking from traditional on-premises systems. After architecting multiple AWS solutions for enterprise clients, I've learned that successful cloud architecture is about embracing distributed systems principles while leveraging managed services to reduce operational overhead.

## Foundational Principles

### The Shared Responsibility Model

Understanding AWS's shared responsibility model is crucial. AWS handles infrastructure security, while you're responsible for securing your applications and data. This division influences every architectural decision you make.

### Design for Failure

In the cloud, failure is not a possibility—it's a certainty. Designing systems that gracefully handle component failures is essential for building resilient applications.

## Scalability Patterns

### Horizontal vs. Vertical Scaling

While vertical scaling (adding more power) has limits, horizontal scaling (adding more instances) is virtually limitless in the cloud. Auto Scaling Groups, combined with Application Load Balancers, provide automatic capacity management.

### Database Scaling Strategies

RDS Read Replicas, DynamoDB's on-demand scaling, and Aurora's serverless options each serve different use cases. Understanding when to use each is crucial for cost-effective scaling.

## Microservices Architecture

### Service Decomposition

Breaking monoliths into microservices isn't just about technology—it's about organizational structure. Conway's Law suggests that system design mirrors organizational communication patterns.

### Container Orchestration

ECS Fargate and EKS provide different approaches to container management. Fargate offers simplicity, while EKS provides Kubernetes compatibility for complex orchestration needs.

## Security at Scale

### Zero Trust Architecture

Implementing zero trust principles in AWS means assuming no implicit trust based on network location. IAM roles, security groups, and VPC design all contribute to a zero trust model.

### Secrets Management

AWS Secrets Manager and Parameter Store provide secure, auditable secret storage. Proper secret rotation and access patterns are essential for maintaining security at scale.

## Cost Optimization

### Reserved Instances vs. Spot Instances

Understanding the cost implications of different instance types and pricing models can dramatically reduce AWS bills. Spot instances can provide 90% savings for fault-tolerant workloads.

### Serverless Cost Models

Lambda, API Gateway, and DynamoDB follow pay-per-use models that can be cost-effective for variable workloads but expensive for consistent high-volume applications.

## Monitoring and Observability

### CloudWatch and X-Ray

Effective monitoring requires more than basic metrics. Distributed tracing with X-Ray helps understand request flows across microservices, while custom CloudWatch metrics provide business-specific insights.

### Centralized Logging

ELK stack on AWS or CloudWatch Logs provide centralized logging solutions. Structured logging and proper log retention policies are essential for troubleshooting and compliance.

## Disaster Recovery

### RTO and RPO Planning

Recovery Time Objective (RTO) and Recovery Point Objective (RPO) requirements drive architectural decisions. Multi-region deployments, database replication, and backup strategies all serve these goals.

### Infrastructure as Code

CloudFormation and CDK enable reproducible infrastructure deployment. Version-controlled infrastructure definitions are essential for disaster recovery and environment consistency.

## Performance Optimization

### Content Delivery

CloudFront's global edge network reduces latency for global users. Proper caching strategies and origin configuration significantly impact user experience.

### Database Performance

Aurora's query optimization, DynamoDB's partition key design, and ElastiCache's memory-based caching all contribute to application performance.

## Future Considerations

### Serverless-First Design

As serverless technologies mature, designing applications around Functions-as-a-Service and managed databases can reduce operational overhead while maintaining scalability.

## Conclusion

Successful cloud architecture on AWS requires balancing multiple concerns: cost, performance, security, and maintainability. The key is understanding that cloud architecture is an ongoing process, not a one-time design. Regular architecture reviews and cost optimization exercises ensure your systems remain efficient and effective as they scale.
    `,
    publishDate: "2023-11-10",
    lastUpdated: "2023-12-01",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud Architecture", "Scalability", "DevOps", "Microservices"],
    author: "Amjad Ali",
    difficulty: "Advanced",
    keyTakeaways: [
      "Design for failure is essential in cloud environments",
      "Horizontal scaling provides virtually unlimited capacity",
      "Zero trust security models improve overall system security",
      "Cost optimization requires understanding AWS pricing models",
      "Infrastructure as Code enables reproducible deployments"
    ],
    codeExamples: [
      {
        title: "Auto Scaling Group with CloudFormation",
        language: "yaml",
        code: `Resources:
  WebServerASG:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      VPCZoneIdentifier:
        - !Ref PrivateSubnet1
        - !Ref PrivateSubnet2
      LaunchTemplate:
        LaunchTemplateId: !Ref WebServerLaunchTemplate
        Version: !GetAtt WebServerLaunchTemplate.LatestVersionNumber
      MinSize: 2
      MaxSize: 10
      DesiredCapacity: 4
      TargetGroupARNs:
        - !Ref WebServerTargetGroup
      HealthCheckType: ELB
      HealthCheckGracePeriod: 300`,
        explanation: "Auto Scaling Groups automatically manage instance capacity based on demand, ensuring availability and cost efficiency."
      },
      {
        title: "Lambda Function with Dead Letter Queue",
        language: "python",
        code: `import json
import boto3
from typing import Dict, Any

def lambda_handler(event: Dict[str, Any], context) -> Dict[str, Any]:
    try:
        # Process the event
        result = process_message(event)
        return {
            'statusCode': 200,
            'body': json.dumps(result)
        }
    except Exception as e:
        # Log error for CloudWatch
        print(f"Error processing message: {str(e)}")
        # Lambda will send to DLQ on failure
        raise e

def process_message(event: Dict[str, Any]) -> Dict[str, Any]:
    # Business logic here
    return {"processed": True, "messageId": event.get("messageId")}`,
        explanation: "Error handling in Lambda functions with Dead Letter Queues ensures failed messages aren't lost and can be reprocessed."
      }
    ],
    resources: [
      {
        title: "AWS Well-Architected Framework",
        url: "https://aws.amazon.com/architecture/well-architected/",
        type: "Documentation"
      },
      {
        title: "AWS CloudFormation User Guide",
        url: "https://docs.aws.amazon.com/cloudformation/",
        type: "Documentation"
      },
      {
        title: "AWS CDK Workshop",
        url: "https://cdkworkshop.com/",
        type: "Tutorial"
      }
    ]
  },
  "future-web-development-ai-integration": {
    id: "future-web-development-ai-integration",
    title: "The Future of Web Development: AI Integration and Automation",
    subtitle: "How AI is Transforming Development Workflows",
    excerpt: "Exploring how artificial intelligence is reshaping web development workflows, from code generation to automated testing and deployment.",
    content: `
The landscape of web development is undergoing a revolutionary transformation as artificial intelligence becomes deeply integrated into our development workflows. Having implemented AI-driven solutions across multiple projects, I've witnessed firsthand how these technologies are not just changing what we build, but fundamentally altering how we build it.

## The Current State of AI in Development

AI-powered code completion and generation tools have evolved beyond simple autocomplete. Tools like GitHub Copilot, CodeT5, and OpenAI Codex can now understand context, generate entire functions, and even suggest architectural patterns.

## Transformative Applications

Natural language to code generation is becoming increasingly sophisticated, democratizing programming and allowing developers to focus on higher-level problem-solving rather than syntax details.

## Development Workflow Automation

AI is optimizing CI/CD pipelines by predicting build failures, optimizing resource allocation, and automatically adjusting deployment strategies based on traffic patterns and performance metrics.

## The Human-AI Collaboration Model

Rather than replacing developers, AI serves as an intelligent pair programming partner, handling routine tasks and allowing developers to focus on creative and strategic aspects of development.

## Conclusion

The integration of AI into web development workflows represents a fundamental shift in how we approach software creation. The future lies in collaboration between humans and AI.
    `,
    publishDate: "2023-10-25",
    lastUpdated: "2023-11-15",
    readTime: "10 min read",
    category: "Technology Trends",
    tags: ["AI", "Machine Learning", "Automation", "Future Tech", "Development Tools"],
    author: "Amjad Ali",
    difficulty: "Intermediate",
    keyTakeaways: [
      "AI tools are becoming essential for modern development workflows",
      "Code generation and automated testing are transforming productivity",
      "Human-AI collaboration is more effective than replacement",
      "Gradual adoption and human oversight remain crucial"
    ],
    codeExamples: [
      {
        title: "AI-Powered Code Generation",
        language: "python",
        code: `import re
from typing import bool

def validate_email(email: str) -> bool:
    """Validates an email address using regex pattern matching."""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))`,
        explanation: "AI can generate complete, well-documented functions from natural language descriptions."
      }
    ],
    resources: [
      {
        title: "GitHub Copilot Documentation",
        url: "https://docs.github.com/en/copilot",
        type: "Documentation"
      },
      {
        title: "OpenAI Codex",
        url: "https://openai.com/blog/openai-codex",
        type: "Tool"
      }
    ]
  },
  "database-design-patterns-modern-applications": {
    id: "database-design-patterns-modern-applications",
    title: "Database Design Patterns for Modern Applications",
    subtitle: "Building Scalable and Efficient Data Architecture",
    excerpt: "Comprehensive guide to database design patterns, covering relational and NoSQL databases, with practical examples and performance considerations.",
    content: `
Database design is the foundation of any successful application. After designing databases for applications ranging from small startups to enterprise systems, I've learned that the right patterns can make the difference between a system that scales gracefully and one that crumbles under load.

## Fundamental Design Principles

Understanding when to normalize and when to denormalize is crucial for modern applications. While normalization reduces data redundancy, strategic denormalization can dramatically improve read performance.

## Relational Database Patterns

The Entity-Attribute-Value (EAV) pattern provides flexibility for storing dynamic attributes but comes with performance trade-offs. It's particularly useful for content management systems.

## NoSQL Design Patterns

Document databases like MongoDB require different thinking about data relationships. Embedding vs. referencing decisions significantly impact performance and consistency.

## Performance Optimization Patterns

Effective indexing strategies require understanding query patterns, selectivity, and maintenance overhead. Covering indexes and partial indexes each serve specific optimization goals.

## Conclusion

Effective database design requires balancing performance, scalability, consistency, and maintainability. The patterns outlined here provide a foundation for making informed decisions.
    `,
    publishDate: "2023-09-15",
    lastUpdated: "2023-10-20",
    readTime: "14 min read",
    category: "Database",
    tags: ["Database Design", "SQL", "NoSQL", "Performance", "Architecture"],
    author: "Amjad Ali",
    difficulty: "Advanced",
    keyTakeaways: [
      "Choose normalization vs denormalization based on access patterns",
      "Index strategy significantly impacts query performance",
      "Document embedding reduces joins but requires careful consideration",
      "Security and compliance patterns must be designed from the start"
    ],
    codeExamples: [
      {
        title: "Temporal Table for Audit Trail",
        language: "sql",
        code: `CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    valid_from TIMESTAMP(6) GENERATED ALWAYS AS ROW START,
    valid_to TIMESTAMP(6) GENERATED ALWAYS AS ROW END,
    PERIOD FOR SYSTEM_TIME (valid_from, valid_to)
) WITH SYSTEM VERSIONING;`,
        explanation: "Temporal tables automatically maintain complete audit trails, enabling queries at any point in time."
      }
    ],
    resources: [
      {
        title: "Database Design Principles",
        url: "https://docs.microsoft.com/en-us/sql/relational-databases/",
        type: "Documentation"
      },
      {
        title: "MongoDB Data Modeling",
        url: "https://docs.mongodb.com/manual/core/data-modeling-introduction/",
        type: "Documentation"
      }
    ]
  },
  "microservices-vs-monoliths-comparison": {
    id: "microservices-vs-monoliths-comparison",
    title: "Microservices vs Monoliths: When to Choose What",
    subtitle: "Making Informed Architectural Decisions",
    excerpt: "A detailed comparison of microservices and monolithic architectures, helping you make informed decisions for your next project.",
    content: `
The choice between microservices and monolithic architecture is one of the most consequential decisions in modern software development. Having architected both types of systems, I've learned that the "right" choice depends heavily on context and business requirements.

## Understanding the Architectures

A monolithic application is deployed as a single unit where all components are interconnected. Microservices break down an application into small, independent services that communicate over well-defined APIs.

## The Monolith Advantage

Starting with a monolith is often the right choice for new projects. Development is straightforward, debugging is simpler, and deployment involves a single artifact.

## When Microservices Excel

Applications with distinct business domains benefit from service boundaries that align with domain boundaries. This separation improves maintainability and allows for specialized teams.

## The Hidden Costs of Microservices

Microservices introduce distributed system challenges: network failures, latency, consistency issues, and the need for service discovery.

## Decision Framework

Most applications should start as monoliths and migrate to microservices when specific pain points emerge. This approach reduces early complexity.

## Conclusion

The choice between monoliths and microservices isn't binary. Start simple, measure everything, and evolve your architecture as your understanding deepens.
    `,
    publishDate: "2023-08-30",
    lastUpdated: "2023-09-25",
    readTime: "11 min read",
    category: "Software Architecture",
    tags: ["Microservices", "Architecture", "System Design", "Scalability", "Monolith"],
    author: "Amjad Ali",
    difficulty: "Intermediate",
    keyTakeaways: [
      "Start with monoliths for new projects and migrate when needed",
      "Team size and organization structure influence architecture choice",
      "Microservices require significant operational maturity",
      "Service boundaries should align with business domains"
    ],
    codeExamples: [
      {
        title: "API Gateway Pattern",
        language: "javascript",
        code: `const express = require('express');
const httpProxy = require('http-proxy-middleware');
const app = express();

const services = {
  users: 'http://user-service:3001',
  orders: 'http://order-service:3002'
};

app.use('/api/users', httpProxy({
  target: services.users,
  changeOrigin: true
}));`,
        explanation: "API Gateway centralizes cross-cutting concerns like authentication and routing in microservices architecture."
      }
    ],
    resources: [
      {
        title: "Microservices.io Patterns",
        url: "https://microservices.io/patterns/",
        type: "Documentation"
      },
      {
        title: "Building Microservices by Sam Newman",
        url: "https://www.oreilly.com/library/view/building-microservices/9781491950340/",
        type: "Documentation"
      }
    ]
  }
};

export default function ArticleDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const article = articlesData[slug];

  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold hover:scale-105 smooth-transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400 bg-green-500/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-500/20";
      case "Advanced": return "text-red-400 bg-red-500/20";
      default: return "text-slate-400 bg-slate-500/20";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-slate-300 hover:text-white smooth-transition"
          >
            <HiArrowLeft className="text-xl" />
            <span>Back to Articles</span>
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Article Meta */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
                <HiBookOpen className="text-yellow-400 text-sm" />
                <span className="text-slate-300 text-sm font-medium">
                  Technical Article
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{article.title}</span>
              </h1>

              <p className="text-2xl text-purple-300 font-semibold">
                {article.subtitle}
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <HiCalendar className="text-purple-400" />
                  <span className="text-white font-semibold">Published</span>
                </div>
                <p className="text-slate-400">{formatDate(article.publishDate)}</p>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <HiClock className="text-cyan-400" />
                  <span className="text-white font-semibold">Read Time</span>
                </div>
                <p className="text-slate-400">{article.readTime}</p>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <HiLightBulb className="text-yellow-400" />
                  <span className="text-white font-semibold">Difficulty</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                    rounded-full text-sm font-medium text-white border border-purple-500/30"
                >
                  <HiTag className="inline mr-2 text-xs" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Article Text */}
              <div className="glass rounded-3xl p-8 border border-purple-500/10">
                <div 
                  className="prose prose-lg prose-invert max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-p:text-slate-300 prose-p:leading-relaxed
                    prose-strong:text-white prose-code:text-purple-300
                    prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-purple-500/20
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                    prose-h1:mb-6 prose-h2:mb-4 prose-h3:mb-3
                    prose-h1:mt-8 prose-h2:mt-6 prose-h3:mt-4"
                  dangerouslySetInnerHTML={{ 
                    __html: marked(article.content) 
                  }}
                />
              </div>

              {/* Code Examples */}
              {article.codeExamples.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white flex items-center space-x-2">
                    <HiCode className="text-purple-400" />
                    <span>Code Examples</span>
                  </h2>
                  
                  {article.codeExamples.map((example, index) => (
                    <div key={index} className="glass rounded-2xl p-6 border border-purple-500/20">
                      <h3 className="text-xl font-semibold text-white mb-4">{example.title}</h3>
                      <div className="bg-slate-900/80 rounded-xl p-4 mb-4 border border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-400 uppercase font-mono">{example.language}</span>
                          <button className="text-slate-400 hover:text-white">
                            <HiShare className="text-sm" />
                          </button>
                        </div>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                      <p className="text-slate-400 text-sm">{example.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Key Takeaways */}
              <div className="glass rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                  <HiLightBulb className="text-yellow-400" />
                  <span>Key Takeaways</span>
                </h3>
                <div className="space-y-3">
                  {article.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <HiSparkles className="text-cyan-400 text-sm mt-1 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="glass rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Additional Resources
                </h3>
                <div className="space-y-3">
                  {article.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 smooth-transition border border-slate-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium text-sm">{resource.title}</h4>
                          <span className="text-xs text-slate-400">{resource.type}</span>
                        </div>
                        <HiArrowLeft className="text-purple-400 transform rotate-45" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="glass rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <HiUser className="text-cyan-400" />
                  <span className="text-white font-semibold">Author</span>
                </div>
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">{article.author}</strong>
                  <br />
                  Software Engineer with expertise in full-stack development, cloud architecture, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
