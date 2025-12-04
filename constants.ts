import { Project, Testimonial, EducationItem, SkillCategory, SocialLink } from './types';

export const PORTFOLIO_OWNER = "ABHISHEK CHAUHAN";
export const PORTFOLIO_ROLE = "Full Stack Developer";

export const RESUME_CONTEXT = `
Name: ${PORTFOLIO_OWNER}
Role: ${PORTFOLIO_ROLE}
Location: Meerut, UP
Email: abhichauhan200504@gmail.com
Phone: +91 8279422813
Experience:
- Full Stack Developer at Motify Online (2025 - Present): Building and maintaining dynamic, full-stack applications using Laravel, PHP, JavaScript, and WordPress. Delivered key projects including a job-seeking platform (CatchBoi), a personalized matchmaking app (LoveMeet), and a migration services website (Ketan Gagan). Focused on performance optimization, responsive UI, real time features, and SEO-friendly development to enhance overall user experience.
Skills: Laravel, PHP, JavaScript, React, Node.js, MySQL, PostgreSQL, WordPress, Tailwind CSS, Bootstrap, Framer Motion, Alpine.js, Docker, AWS, Git.
Bio: Computer Science Engineering graduate with hands-on experience in Laravel, PHP, JavaScript, and WordPress-based frontend development. Skilled in building responsive and dynamic web applications with a strong foundation in data structures, algorithms, and problem-solving. Currently expanding expertise in backend development, focusing on databases, APIs, and server-side programming, with the goal of transitioning into a backend engineering role.
Availability: Open
Experience Years: 1+ Years
`;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    category: "SaaS Platform",
    description: "A high-performance analytics dashboard processing millions of data points in real-time.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["React", "D3.js", "WebSockets"]
  },
  {
    id: 2,
    title: "Aether Lens",
    category: "AI Application",
    description: "Image recognition tool helping researchers identify rare botanical species.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Python", "TensorFlow", "React Native"]
  },
  {
    id: 3,
    title: "Chronos Commerce",
    category: "E-commerce",
    description: "Headless e-commerce solution with sub-second page loads and 3D product previews.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Next.js", "Three.js", "Shopify"]
  },
  {
    id: 4,
    title: "Lumina UI Kit",
    category: "Open Source",
    description: "A comprehensive React component library focused on accessibility and animation.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["TypeScript", "Storybook", "A11y"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    content: "Alex is one of those rare engineers who cares deeply about both the code architecture and the final user experience.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Product Director",
    company: "CreativeLabs",
    content: "The animations Alex built for our campaign were silky smooth. Absolutely world-class attention to detail.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Designer",
    company: "Studio 42",
    content: "Working with Alex is a dream. He translates complex design concepts into reality better than anyone I know.",
    avatar: "https://picsum.photos/100/100?random=12"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartUp Inc",
    content: "He helped us scale from MVP to Series A. His technical leadership is invaluable.",
    avatar: "https://picsum.photos/100/100?random=13"
  }
];

export const SKILLS: string[] = [
  "Laravel", "PHP", "JavaScript", "React", "Node.js", "MySQL", "PostgreSQL", "WordPress", "Tailwind CSS", "Bootstrap", "Docker", "AWS", "Git", "Alpine.js"
];

export const DETAILED_SKILLS: SkillCategory[] = [
  {
    title: "Core Stack",
    items: ["Laravel", "JavaScript", "React", "Node.js", "MySQL", "PostgreSQL"]
  },
  {
    title: "Design & Tools",
    items: ["System Design", "Docker", "AWS", "Git"]
  },
  {
    title: "Creative Dev",
    items: ["Tailwind CSS", "Bootstrap", "Framer Motion", "Alpine.js", "Shadcn", "Canvas API"]
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering Technology",
    school: "Meerut Institute of Engineering & Technology",
    year: "2025",
    description: "Computer Science"
  },
  {
    id: 2,
    degree: "Intermediate",
    school: "R S M S Vidya Mandir",
    year: "2020",
    description: "PCM"
  },
  {
    id: 3,
    degree: "High School",
    school: "R S M S Vidya Mandir",
    year: "2018",
    description: ""
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Abh1shxkk", username: "@abh1shxkk" },
  { platform: "Twitter", url: "https://twitter.com/abh1shxkk", username: "@abh1shxkk" },
];
