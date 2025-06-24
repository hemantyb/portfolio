"use client";

import { notFound } from "next/navigation";
import { blogPosts } from "@/data/sampleData";
import Layout from "@/components/Layout";
import BlogPostDetail from "@/components/BlogPostDetail";
import { useEffect, useState } from "react";

// Assuming PageProps is defined to expect params as a promise
interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    params
      .then((resolvedParams) => {
        setResolvedParams(resolvedParams);
      })
      .catch((error) => {
        console.error("Failed to resolve params:", error);
      });
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const post = blogPosts.find((p) => p.id === parseInt(resolvedParams.id));

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <BlogPostDetail post={post} />
    </Layout>
  );
}
