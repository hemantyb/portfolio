import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/BlogPostDetail";
import Layout from "@/components/Layout";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <BlogPostDetail post={post} />
    </Layout>
  );
}
