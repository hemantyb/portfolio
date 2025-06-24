import { notFound } from "next/navigation";
import { blogPosts } from "@/data/sampleData";
import Layout from "@/components/Layout";
import BlogPostDetail from "@/components/BlogPostDetail";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <BlogPostDetail post={post} />
    </Layout>
  );
}
