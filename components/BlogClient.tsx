"use client";

import { useMemo, useState } from "react";
import BlogSection from "@/components/BlogSection";
import Layout from "@/components/Layout";
import type { PostMetadata } from "@/lib/posts";

export default function BlogClient({ posts }: { posts: PostMetadata[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [posts, searchQuery]);

  return (
    <Layout
      showSearch={true}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <BlogSection
        posts={filteredPosts}
        title="All Blog Posts"
        showAll={true}
        linkToDetail={true}
      />
    </Layout>
  );
}
