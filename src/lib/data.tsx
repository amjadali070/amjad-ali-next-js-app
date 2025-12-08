import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiPytorch,
  SiOpenai,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiSupabase,
  SiPrisma,
  SiJenkins,
  SiGithubcopilot,
  SiNestjs,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiVite,
  SiStorybook,
  SiReacthookform,
  SiHuggingface,
  SiGithubactions,
  SiVercel,
  SiNetlify,
  SiTerraform,
  SiCloudflare,
  SiRedis,
  SiNginx,
  SiApachekafka,
  SiSqlite,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiAndroidstudio,
  SiEclipseide,
  SiApache,
  SiJupyter,
  SiGooglecolab,
  SiIntellijidea,
  SiPycharm,
  SiWebstorm,
  SiSublimetext,
} from "react-icons/si";
import { MdOutlineHttp, MdDevices } from "react-icons/md";
import { GiTeamIdea, GiTestTubes } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure, VscCode, VscVscode } from "react-icons/vsc";
import { FaJava, FaSpaceShuttle } from "react-icons/fa";
import { HiLightningBolt, HiSparkles, HiChip } from "react-icons/hi";

// Images
import CRMThumbnail from "@/app/assets/CRM Thumbnail.png";
import HRMThumbnail from "@/app/assets/HRM Thumbnail.png";
import AIDBThumbnail from "@/app/assets/AIDashboard.png";
import EaseWebThumbnail from "@/app/assets/EaseWen Thumbnail.png";

export const projects = [
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
    link: "#",
    tags: ["Full-Stack", "Analytics", "Real-Time"],
  },
  {
    title: "Blockchain-Based Voting System",
    description:
      "Developed a secure voting app using Ethereum smart contracts. Ensured transparent vote recording and result validation.",
    image: AIDBThumbnail,
    link: "#",
    tags: ["Blockchain", "Solidity", "React"],
  },
  {
    title: "EaseWeb (Easy Website Builder)",
    description:
      "Built a drag-and-drop tool for users to design and publish websites. Supported live preview and responsive templates for easy customization.",
    image: EaseWebThumbnail,
    link: "https://github.com/amjadali070/site-builder-easeweb",
    tags: ["MERN", "Website Builder", "Drag-and-Drop"],
  },
];

export const skillsData = [
  {
    category: "Programming Languages",
    gradient: "from-yellow-400 to-orange-500",
    icon: <HiLightningBolt />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Python", icon: <SiPython />, color: "text-blue-300" },
      { name: "Java", icon: <FaJava />, color: "text-red-400" },
      { name: "C++", icon: <SiCplusplus />, color: "text-purple-400" },
      { name: "C-Sharp", icon: <TbBrandCSharp />, color: "text-purple-500" },
      { name: "Solidity", icon: <SiSolidity />, color: "text-gray-400" },
    ],
  },
  {
    category: "Front-End",
    gradient: "from-blue-400 to-purple-500",
    icon: <SiReact />,
    skills: [
      { name: "React JS", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Next JS", icon: <SiNextdotjs />, color: "text-white" },
      { name: "HTML", icon: <SiHtml5 />, color: "text-orange-400" },
      { name: "CSS", icon: <SiCss3 />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "Material UI", icon: <SiReact />, color: "text-blue-500" },
      { name: "Chakra UI", icon: <SiChakraui />, color: "text-teal-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
      { name: "React Query", icon: <SiReactquery />, color: "text-pink-400" },
      { name: "Framer Motion", icon: <SiFramer />, color: "text-white" },
      { name: "Vite", icon: <SiVite />, color: "text-yellow-300" },
      { name: "Storybook", icon: <SiStorybook />, color: "text-pink-500" },
      {
        name: "React Hook Form",
        icon: <SiReacthookform />,
        color: "text-rose-400",
      },
    ],
  },
  {
    category: "Back-End",
    gradient: "from-green-400 to-blue-500",
    icon: <SiNodedotjs />,
    skills: [
      { name: "Node JS", icon: <SiNodedotjs />, color: "text-green-400" },
      { name: "Express JS", icon: <SiExpress />, color: "text-gray-300" },
      { name: "REST APIs", icon: <MdOutlineHttp />, color: "text-purple-400" },
      { name: "NestJS", icon: <SiNestjs />, color: "text-red-500" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
      { name: "Apollo", icon: <SiApollographql />, color: "text-indigo-300" },
      { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white" },
      { name: "Redis", icon: <SiRedis />, color: "text-red-400" },
      { name: "Kafka", icon: <SiApachekafka />, color: "text-gray-200" },
      { name: "Nginx", icon: <SiNginx />, color: "text-green-500" },
    ],
  },
  {
    category: "Databases",
    gradient: "from-purple-400 to-pink-500",
    icon: <SiMongodb />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
      { name: "SQLite", icon: <SiSqlite />, color: "text-blue-200" },
      { name: "Prisma ORM", icon: <SiPrisma />, color: "text-purple-400" },
    ],
  },
  {
    category: "AI/ML Tools",
    gradient: "from-pink-400 to-red-500",
    icon: <SiTensorflow />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400" },
      { name: "Keras", icon: <SiKeras />, color: "text-red-400" },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn />,
        color: "text-orange-300",
      },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-400" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "ChatGPT", icon: <SiOpenai />, color: "text-green-300" },
      {
        name: "GitHub Copilot",
        icon: <SiGithubcopilot />,
        color: "text-sky-400",
      },
      {
        name: "Hugging Face",
        icon: <SiHuggingface />,
        color: "text-yellow-300",
      },
    ],
  },
  {
    category: "Tools/Platforms",
    gradient: "from-cyan-400 to-blue-600",
    icon: <SiGit />,
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-400" },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions />,
        color: "text-blue-300",
      },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-red-400" },
      { name: "Microsoft Azure", icon: <VscAzure />, color: "text-blue-400" },
      { name: "Supabase", icon: <SiSupabase />, color: "text-green-400" },
      { name: "Prisma", icon: <SiPrisma />, color: "text-purple-400" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-green-300" },
      { name: "Terraform", icon: <SiTerraform />, color: "text-purple-500" },
      { name: "Cloudflare", icon: <SiCloudflare />, color: "text-orange-300" },
    ],
  },
  {
    category: "Dev IDEs",
    gradient: "from-blue-500 to-cyan-400",
    icon: <VscCode />,
    skills: [
      { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
      { name: "Cursor AI", icon: <HiSparkles />, color: "text-purple-400" },
      {
        name: "Antigravity",
        icon: <FaSpaceShuttle />,
        color: "text-orange-500",
      },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio />,
        color: "text-green-500",
      },
      { name: "Eclipse", icon: <SiEclipseide />, color: "text-indigo-600" },
      { name: "NetBeans", icon: <SiApache />, color: "text-blue-600" },
      {
        name: "Jupyter Notebook",
        icon: <SiJupyter />,
        color: "text-orange-500",
      },
      {
        name: "Google Colab",
        icon: <SiGooglecolab />,
        color: "text-orange-400",
      },
      { name: "Notebook LLM", icon: <HiChip />, color: "text-blue-400" },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea />,
        color: "text-pink-500",
      },
      { name: "PyCharm", icon: <SiPycharm />, color: "text-green-400" },
      { name: "WebStorm", icon: <SiWebstorm />, color: "text-blue-400" },
      {
        name: "Sublime Text",
        icon: <SiSublimetext />,
        color: "text-orange-500",
      },
    ],
  },
  {
    category: "Others",
    gradient: "from-indigo-400 to-purple-600",
    icon: <GiTeamIdea />,
    skills: [
      {
        name: "Agile Methodologies",
        icon: <GiTeamIdea />,
        color: "text-blue-400",
      },
      { name: "CI/CD Pipelines", icon: <SiJenkins />, color: "text-red-400" },
      {
        name: "Responsive Design",
        icon: <MdDevices />,
        color: "text-purple-400",
      },
      {
        name: "Software Testing",
        icon: <GiTestTubes />,
        color: "text-green-400",
      },
      { name: "Jest", icon: <SiJest />, color: "text-red-300" },
      { name: "Cypress", icon: <SiCypress />, color: "text-green-300" },
      {
        name: "Testing Library",
        icon: <SiTestinglibrary />,
        color: "text-orange-300",
      },
    ],
  },
];

export const experienceData = [
  {
    company: "Alavi Global Enterprises (AGE)",
    position: "Software Engineer",
    duration: "Sep 2025 - Present",
    location: "Onsite (Pakistan)",
    description:
      "Developing and maintaining enterprise-level software solutions with focus on scalability and performance. Architecting full-stack applications using modern web technologies and frameworks. Implementing robust backend services and RESTful APIs for seamless data integration. Collaborating with stakeholders to gather requirements and deliver high-quality software solutions. Optimizing application performance and ensuring code quality through best practices and design patterns. Contributing to technical decision-making and mentoring team members on software development methodologies.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Full-Stack Development",
      "System Architecture",
      "Agile",
    ],
  },
  {
    company: "Esanad",
    position: "Software Engineer",
    duration: "Apr 2025 - Sep 2025",
    location: "Remote (UAE)",
    description:
      "Design, develop, and maintain secure web and backend applications using required technologies. Deliver production-ready features using test-driven development and performance optimization. Participate in code reviews, team discussions, and sprint retrospectives to enhance collaboration. Integrate APIs, third-party services, and insurance data platforms seamlessly. Support and improve lead automation, digital claims management, and underwriting tools. Ensure code quality, security, and scalability across all development tasks. Perform additional tasks and responsibilities assigned by management.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "APIs",
      "TDD",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    company: "MarTechSol",
    position: "Software Engineer",
    duration: "Oct 2024 - Apr 2025",
    location: "Karachi, Pakistan",
    description:
      "Built and maintained scalable web applications using MERN, Next.js, and WordPress. Developed responsive user interfaces with React, Tailwind CSS, JavaScript, and TypeScript. Designed and integrated RESTful APIs for efficient frontend-backend communication. Optimized database queries to enhance backend performance and API response times. Implemented CI/CD pipelines and worked with cloud platforms like AWS and Azure. Collaborated with cross-functional teams to define architecture and deliver solutions. Mentored junior developers and contributed to AI-powered application development.",
    technologies: [
      "MERN",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "AWS",
      "Azure",
      "CI/CD",
    ],
  },
  {
    company: "CharCentric",
    position: "Software Engineer",
    duration: "Aug 2023 - Aug 2024",
    location: "Remote (UAE, Abu Dhabi)",
    description:
      "Collaborated with cross-functional teams to analyze requirements and align on project goals. Designed, developed, and optimized software solutions for performance and integration. Maintained and enhanced existing systems by resolving issues and implementing improvements. Created technical documentation to support streamlined development and quality deliverables. Engaged with clients and teams to optimize system performance and capabilities. Contributed to key projects like RMG LMS, AI Dashboards, and Data Intelligence tools.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "System Integration",
      "Performance Optimization",
      "AI Dashboards",
      "LMS",
    ],
  },
];

export const educationData = [
  {
    degree: "Master of Science in Computer Science (MSCS)",
    institution: "Mohammad Ali Jinnah University",
    duration: "September 2024 - Present",
    location: "Karachi, Pakistan",
    description:
      "Specializing in advanced software engineering, machine learning, and artificial intelligence. Conducting research on innovative AI applications and scalable system architectures with focus on cutting-edge technologies and methodologies.",
    achievements: [
      "Advanced Software Engineering",
      "Machine Learning and AI",
      "Research on Innovative AI Applications",
      "Scalable System Architectures",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Sukkur IBA University",
    duration: "August 2019 - September 2023",
    location: "Sukkur, Pakistan",
    description:
      "Graduated with distinction, with a focus on AI, ML, and data structures. Completed a capstone project on intelligent systems, recognized for innovation and performance. Built strong foundation in computer science fundamentals and practical application development.",
    achievements: [
      "Graduated with Distinction",
      "AI, ML, and Data Structures Focus",
      "Capstone Project on Intelligent Systems",
      "Innovation and Performance Recognition",
    ],
  },
];

export const certificationsData = [
  {
    title: "Gemini API by Google",
    issuer: "Udacity",
    date: "Jul 2024",
    credentialId: "549c0b28-45af-11ef-a35e-9b9a02ba6f0f",
    credentialUrl:
      "https://www.udacity.com/certificate/e/549c0b28-45af-11ef-a35e-9b9a02ba6f0f",
    description:
      "Verified certificate of completion for the Gemini API by Google course. Covered prompt engineering, safety, function calling, and building AI features with Google AI Studio.",
    skills: [
      "Gemini API",
      "Google AI Studio",
      "Prompt Engineering",
      "AI/ML",
      "REST APIs",
      "Node.js",
      "Python",
    ],
  },
  {
    title: "Build a Twitter Clone Front-End with ReactJS",
    issuer: "Coursera",
    date: "Jul 2023",
    credentialId: "THVJDLKCAVH6",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/THVJDLKCAVH6",
    description:
      "Built a Twitter-like front-end using ReactJS, SASS, and REST APIs, focusing on responsive design and modern web technologies.",
    skills: [
      "GitHub",
      "SASS",
      "AWS",
      "CSS",
      "Version Control",
      "Git",
      "HTML5",
      "REST APIs",
      "Web Technologies",
    ],
  },
  {
    title:
      "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
    issuer: "LinkedIn",
    date: "Jul 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/52b8fc7c980d16a2f92667217053cbdf9d334baecaba83f1fd400132dbfc3704?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRoXx99UhTPypBEXw4r8k0Q%3D%3D",
    description:
      "Comprehensive course on full-stack JavaScript development using MongoDB, Node.js, and React.",
    skills: [
      "GitHub",
      "SASS",
      "AWS",
      "JavaScript",
      "CSS",
      "Full-Stack Development",
      "MongoDB",
      "Version Control",
      "Git",
      "HTML5",
      "React.js",
      "Node.js",
      "REST APIs",
      "Web Technologies",
    ],
  },
  {
    title: "Learning Git and GitHub (2021)",
    issuer: "LinkedIn Learning",
    date: "Sep 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/864e388fc77539a9e499d8889689e734e51560a4f6612928c1a6701484df6b2d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRoXx99UhTPypBEXw4r8k0Q%3D%3D",
    description:
      "Covered Git fundamentals, branching, merging, commits, and using GitHub for collaboration and pull requests.",
    skills: [
      "Git",
      "GitHub",
      "Version Control",
      "Branching",
      "Merging",
      "Pull Requests",
    ],
  },
  {
    title: "Connecting to a MongoDB Database",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDB6rcj7kqx6f",
    credentialUrl: "https://learn.mongodb.com/certificates/MDB6rcj7kqx6f",
    description:
      "Learned to connect and interact with MongoDB databases for modern web applications.",
    skills: ["GitHub", "REST APIs", "Web Technologies"],
  },
  {
    title: "MongoDB Aggregation",
    issuer: "MongoDB",
    date: "Jun 2023",
    credentialId: "MDBtrupbrqmyf",
    credentialUrl: "https://learn.mongodb.com/certificates/MDBtrupbrqmyf",
    description:
      "Mastered aggregation pipelines for advanced data processing in MongoDB.",
    skills: ["REST APIs", "Web Technologies"],
  },
  {
    title: "Angular (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "ce9a1fbb806f",
    credentialUrl: "https://www.hackerrank.com/certificates/ce9a1fbb806f",
    description:
      "Demonstrated foundational knowledge of Angular and modern web development.",
    skills: [
      "GitHub",
      "AWS",
      "Git",
      "AngularJS",
      "REST APIs",
      "Web Technologies",
    ],
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Mar 2023",
    credentialId: "2832fd9d6c55",
    credentialUrl: "https://www.hackerrank.com/certificates/2832fd9d6c55",
    description:
      "Demonstrated foundational knowledge of React.js and component-based development.",
    skills: [
      "GitHub",
      "AWS",
      "Git",
      "HTML5",
      "React.js",
      "REST APIs",
      "Web Technologies",
    ],
  },
  {
    title: "Node.js Backend Basics with Best Practices",
    issuer: "Coursera",
    date: "Feb 2023",
    credentialId: "BF44X7AFBV4R",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/BF44X7AFBV4R",
    description:
      "Learned Node.js backend fundamentals and best practices for scalable server-side development.",
    skills: [
      "GitHub",
      "SASS",
      "AWS",
      "CSS",
      "Version Control",
      "Git",
      "HTML5",
      "Node.js",
      "REST APIs",
      "Web Technologies",
    ],
  },
  {
    title: "Frontend Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-FWD-2022",
    credentialUrl: "https://www.freecodecamp.org/certification/",
    description:
      "Comprehensive frontend development certification covering responsive web design, modern CSS techniques, and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JavaScript",
      "React",
      "Bootstrap",
    ],
  },
];

export const articlesData = [
  {
    title: "Building Scalable React Applications with Next.js 14",
    excerpt:
      "Explore the latest features in Next.js 14 and learn how to build high-performance, scalable React applications with server components and improved routing.",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "Performance", "Server Components"],
    url: "#",
    author: "Amjad Ali",
    slug: "building-scalable-react-applications-nextjs-14",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced TypeScript patterns, generic constraints, and architectural patterns that will make your code more maintainable and type-safe.",
    publishDate: "2023-12-20",
    readTime: "12 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
    url: "#",
    author: "Amjad Ali",
    slug: "mastering-typescript-advanced-patterns",
  },
  {
    title: "Cloud Architecture: Designing for Scale with AWS",
    excerpt:
      "Learn how to design and implement scalable cloud architectures using AWS services, with focus on reliability, security, and cost optimization.",
    publishDate: "2023-11-10",
    readTime: "15 min read",
    category: "Cloud Computing",
    tags: ["AWS", "Cloud Architecture", "Scalability", "DevOps"],
    url: "#",
    author: "Amjad Ali",
    slug: "cloud-architecture-aws-scale",
  },
  {
    title: "The Future of Web Development: AI Integration and Automation",
    excerpt:
      "Exploring how artificial intelligence is reshaping web development workflows, from code generation to automated testing and deployment.",
    publishDate: "2023-10-25",
    readTime: "10 min read",
    category: "Technology Trends",
    tags: ["AI", "Machine Learning", "Automation", "Future Tech"],
    url: "#",
    author: "Amjad Ali",
    slug: "future-web-development-ai-integration",
  },
  {
    title: "Database Design Patterns for Modern Applications",
    excerpt:
      "Comprehensive guide to database design patterns, covering relational and NoSQL databases, with practical examples and performance considerations.",
    publishDate: "2023-09-15",
    readTime: "14 min read",
    category: "Database",
    tags: ["Database Design", "SQL", "NoSQL", "Performance"],
    url: "#",
    author: "Amjad Ali",
    slug: "database-design-patterns-modern-applications",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechStart Inc.",
    rating: 5,
    testimonial:
      "Amjad delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and ability to translate complex requirements into elegant code is remarkable.",
    projectType: "E-commerce Platform",
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    company: "Digital Solutions Ltd.",
    rating: 5,
    testimonial:
      "Working with Amjad was a game-changer for our team. His expertise in React and Node.js helped us modernize our legacy system. He's not just a great developer but also an excellent mentor.",
    projectType: "System Modernization",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "InnovateCorp",
    rating: 5,
    testimonial:
      "Amjad's ability to understand our business requirements and translate them into technical solutions is outstanding. The mobile-responsive dashboard he built significantly improved our productivity.",
    projectType: "Analytics Dashboard",
  },
  {
    name: "David Thompson",
    position: "Founder & CEO",
    company: "StartupHub",
    rating: 5,
    testimonial:
      "From concept to deployment, Amjad managed our entire web application project flawlessly. His expertise in cloud architecture and modern development practices helped us scale efficiently.",
    projectType: "SaaS Platform",
  },
];
