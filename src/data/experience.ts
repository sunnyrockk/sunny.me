export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  start: string;
  end?: string;
  url?: string;
  color: string;
  current?: boolean;
  summary: string;
  highlights: { lead: string; rest: string }[];
  stack: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Computer Science Student",
    company: "Shri Ramswaroop Memorial University",
    period: "2024 – 2028",
    location: "Lucknow, India",
    start: "2024-01",
    end: "2028-12",
    color: "#0a84ff",
    summary: "B.Tech in Computer Science & Engineering.",
    highlights: [],
    stack: ["Data Structures & Algorithms", "OOP", "Java", "Python"],
  },
];

export type ContributionItem = {
  title: string;
  detail: string;
  prs: { number: number; url: string }[];
  merged: boolean;
};

export type OpenSourceRepo = {
  name: string;
  repo: string;
  url: string;
  blurb: string;
  contributions: ContributionItem[];
};

export const OPEN_SOURCE: OpenSourceRepo[] = [];

export const EDUCATION = [
  { degree: "B.Tech in Computer Science & Engineering", school: "Shri Ramswaroop Memorial University (SRMU), Lucknow", date: "2024–2028" },
];
