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
    title: "Skills360.ai",
    category: "Web Application",
    description: "A Laravel-based platform featuring user authentication, an intuitive admin panel, AI-powered job matching, and a built-in resume builder to streamline the hiring and job search experience.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Laravel", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Medi BillSuite",
    category: "Web Application",
    description: "A Laravel-based billing solution with GST calculations, inventory tracking, customer/supplier management, quotations, sales reports, and role-based user permissions.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Laravel", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "InvoicePro",
    category: "Web Application",
    description: "A Laravel-based invoicing platform featuring user authentication, role-based admin panel, client management, invoice generation with PDF export, expense tracking, payment management, and detailed financial reports (Revenue, Expenses, Profit/Loss) to streamline business billing and financial operations.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Laravel", "Tailwind CSS"]
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
    school: "IIMT University",
    year: "2025",
    description: "Computer Science"
  },
  {
    id: 2,
    degree: "Intermediate",
    school: "R S M S Vidya Mandir",
    year: "2021",
    description: "PCM"
  },
  {
    id: 3,
    degree: "High School",
    school: "R S M S Vidya Mandir",
    year: "2019",
    description: ""
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Abh1shxkk", username: "@Abh1shxkk" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/abhishek-chauhan-880496394", username: "@abhishekchauhan" },
  { platform: "Twitter", url: "https://x.com/abh1shxkk", username: "@abh1shxkk" },
];
