import HomeClient from "@/components/HomeClient";
import { getAllPostsMetadata } from "@/lib/posts";
import { projects } from "@/data/sampleData";

export default function HomePage() {
  const posts = getAllPostsMetadata();

  return <HomeClient posts={posts.slice(0, 3)} projects={projects} />;
}
