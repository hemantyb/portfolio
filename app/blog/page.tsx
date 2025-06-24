"use client";

import { useMemo, useState } from "react";
import { blogPosts } from "@/data/sampleData";
import Layout from "@/components/Layout";
import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

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
