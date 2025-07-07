export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologiesUsed: string[];
  features: string[];
  tags: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
};
