import type { StaticImageData } from "next/image";
import maintainEaseShot from "@/assets/maintainease-dashboard.webp";

/**
 * Every piece of copy on the site lives here, so updating the portfolio
 * never means touching layout code.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://prathameshchavan.vercel.app");

export const profile = {
  name: "Prathamesh Chavan",
  firstName: "Prathamesh",
  role: "Frontend Engineer",
  stack: ["React", "Next.js", "TypeScript"],
  location: "Mumbai, India",
  timeZone: "Asia/Kolkata",
  tagline:
    "I build fast, SEO-friendly web interfaces with React and Next.js, and the reusable components behind them.",
  available: true,
  availability: "Open to frontend roles",
  email: "chavanprathamesh.dev@gmail.com",
  resume: "/prathamesh_chavan_resume.pdf",
  whatsapp: {
    number: "919860204367",
    message: "Hi Prathamesh, I came across your portfolio and would love to connect!",
  },
  links: {
    github: "https://github.com/Prathameshschavan",
    linkedin: "https://www.linkedin.com/in/prathamesh-chavan-5532261b4/",
  },
} as const;

export const metrics = [
  { value: "3+", label: "years shipping production UI" },
  { value: "30+", label: "pages moved to SSR across projects" },
  { value: "~20%", label: "faster page loads after the move" },
] as const;

export const about = [
  "I'm a frontend engineer based in Mumbai with 3+ years of experience building production web applications in React, Next.js and TypeScript.",
  "Most of my work sits where product and performance meet: turning Figma designs into reusable, responsive components, keeping complex state predictable with Redux Toolkit, and deciding what should render on the server. Moving SEO-critical pages from client-side rendering to SSR cut page load time by roughly 20%.",
  "When a feature needs it, I work across the stack: Node.js, GraphQL, PostgreSQL and Prisma. That's how I designed and shipped MaintainEase, a SaaS platform for housing societies that's live in production.",
] as const;

export type CaseStudy = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  problem: string;
  work: string[];
  outcomes: string[];
  stack: string[];
  visual: "ssr-diagram" | "screenshot";
  screenshot?: { src: StaticImageData; alt: string };
  link?: { href: string; label: string };
  confidential?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ssr-migration",
    kicker: "Enterprise e-commerce · International client",
    title: "Moving a storefront's SEO pages to server-side rendering",
    summary:
      "Search-critical pages were rendered in the browser. I moved them to SSR on Next.js and page loads got about 20% faster.",
    problem:
      "The pages that mattered most for search were client-rendered: the first HTML response was an empty shell, and content only appeared after the JavaScript bundle loaded and the data was fetched.",
    work: [
      "Migrated 13+ SEO-critical pages from client-side rendering to SSR",
      "Kept state predictable across complex flows with Redux Toolkit",
      "Built reusable, responsive components wired to GraphQL APIs",
    ],
    outcomes: ["~20% faster page loads", "13+ pages server-rendered", "Content in the first HTML response"],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "GraphQL"],
    visual: "ssr-diagram",
    confidential: true,
  },
  {
    slug: "maintainease",
    kicker: "SaaS · Designed & built end to end",
    title: "MaintainEase: accounting software for housing societies",
    summary:
      "A platform for maintenance billing, payment tracking, resident management, ledger accounting and financial reporting. Live in production.",
    problem:
      "Running a housing society means billing every flat, tracking who has paid, and keeping books an auditor can follow. Administrators, accountants, committee members and residents each need something different.",
    work: [
      "Designed the product and shipped it end to end: data model, API and UI",
      "Role-based dashboards for administrators, accountants, committee members and residents",
      "Scalable PostgreSQL schema designed with Prisma ORM",
      "Automated billing and audit-friendly accounting workflows",
    ],
    outcomes: ["Live in production", "Four role-based dashboards", "Automated billing"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    visual: "screenshot",
    screenshot: {
      src: maintainEaseShot,
      alt: "MaintainEase dashboard showing total outstanding dues, collection rate, cash and bank balances, and payables.",
    },
    link: { href: "https://maintainease.in", label: "maintainease.in" },
  },
];

export const otherProjects = [
  {
    title: "HRMS portal",
    kicker: "Internal platform · Mid-size company",
    summary:
      "A human resource management system covering employee onboarding, attendance, leave management, payroll processing and performance reviews.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    confidential: true,
  },
] as const;

export const experience = [
  {
    role: "Frontend Engineer",
    company: "Skysoft IT Services",
    location: "Noida, UP",
    start: "Mar 2023",
    end: "Present",
    summary:
      "Building production web applications with React, Next.js and TypeScript, with a focus on performance, SEO and faithful UI implementation.",
    points: [
      "Migrated 30+ pages from client-side rendering to SSR across projects, including SEO-critical pages, reducing page load time by ~20%",
      "Built reusable UI components with Tailwind CSS and Material UI from Figma designs",
      "Worked across the stack with Node.js and GraphQL when features needed it",
      "Collaborated with cross-functional teams to ship production-ready features",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "GraphQL"],
  },
] as const;

export const skills = [
  {
    group: "Core",
    note: "What I use every day",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML & CSS", "Tailwind CSS", "Redux Toolkit", "Material UI"],
  },
  {
    group: "Frontend practice",
    note: "What I care about",
    items: ["Server-side rendering", "Performance optimization", "Component architecture", "Responsive UI", "Figma to production"],
  },
  {
    group: "Backend & data",
    note: "Supporting full-stack work",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    group: "Tooling",
    note: "Workflow & AI-assisted development",
    items: ["Git & GitHub", "Figma", "Postman", "VS Code", "Claude Code", "Cursor", "ChatGPT"],
  },
] as const;

export const education = [
  {
    title: "Full Stack Web Development",
    school: "Masai School",
    location: "Bangalore",
    start: "May 2022",
    end: "Mar 2023",
  },
  {
    title: "Bachelor of Computer Applications",
    school: "Yashwantrao Chavan Open University",
    location: "Mumbai",
    start: "Jun 2020",
    end: "Feb 2023",
  },
] as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
