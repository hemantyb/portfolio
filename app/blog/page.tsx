import BlogClient from "@/components/BlogClient";
import { getAllPostsMetadata } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPostsMetadata();

  return <BlogClient posts={posts} />;
}
