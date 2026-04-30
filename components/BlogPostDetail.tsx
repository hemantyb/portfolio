import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

interface BlogPostDetailProps {
  post: PostData;
}

export default async function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/blog">
        <Button variant="outline" className="mb-6">
          <ArrowRight className="mr-2 h-4 w-4 transform rotate-180" /> Back to
          blog
        </Button>
      </Link>
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground mb-6">
          {post.date} &middot; {post.readTime}
        </p>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
