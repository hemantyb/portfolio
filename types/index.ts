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
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
};
