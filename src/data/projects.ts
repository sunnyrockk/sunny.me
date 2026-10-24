import { Compass, Sparkles, type LucideIcon } from "lucide-react";

export type ProjectItem = {
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: string[];
  stack: string[];
  url?: string;
  repo: string;
  icon: LucideIcon;
  tile: [string, string];
  featured?: boolean;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "TravelBoost",
    tagline: "AI-assisted tourism booking platform.",
    description:
      "A full-stack tourism marketplace for discovering hotels and experiences, with booking features, JWT authentication, vendor self-listing, REST APIs, and an AI-powered itinerary planner.",
    category: "Tourism",
    status: ["Live", "Open source"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    url: "https://travel-boost.vercel.app",
    repo: "https://github.com/sunnyrockk/Travel-boost",
    icon: Compass,
    tile: ["#34c759", "#0f7b3a"],
    featured: true,
  },
  {
    title: "Aivora",
    tagline: "A full-stack app currently in progress.",
    description: "A full-stack application with Google sign-in through Firebase Authentication and a Redis-backed Node.js and Express.js backend.",
    category: "In Progress",
    status: ["In Progress", "Open source"],
    stack: ["React 19", "Redux Toolkit", "Tailwind CSS", "Firebase Authentication", "Node.js", "Express.js", "Redis"],
    repo: "https://github.com/sunnyrockk/Aivora",
    icon: Sparkles,
    tile: ["#a78bfa", "#5b3fd1"],
  },
];
