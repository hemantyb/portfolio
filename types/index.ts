export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
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
