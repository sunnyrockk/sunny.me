import { SITE } from "./site";

export type GitHubRepo = {
  name: string;
  language: string | null;
  pushedAt: string;
  url: string;
  fork: boolean;
};

export type GitHubSnapshot = {
  publicRepos: number;
  live: boolean;
  repos: GitHubRepo[];
};

export const FALLBACK: GitHubSnapshot = {
  publicRepos: 2,
  live: false,
  repos: [
    { name: "Travel-boost", language: "JavaScript", pushedAt: "2026-10-11T00:00:00Z", url: "https://github.com/sunnyrockk/Travel-boost", fork: false },
    { name: "Aivora", language: "JavaScript", pushedAt: "2026-10-11T00:00:00Z", url: "https://github.com/sunnyrockk/Aivora", fork: false },
  ],
};

export { SITE };
