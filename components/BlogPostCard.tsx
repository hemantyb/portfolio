"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { BlogPost } from "@/types";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  linkToDetail?: boolean;
}

export default function BlogPostCard({
  post,
  index,
  linkToDetail = false,
}: BlogPostCardProps) {
  const cardContent = (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {post.date} · {post.readTime}
      </CardFooter>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      whileHover={{ y: -2 }}
    >
      {linkToDetail ? (
        <Link href={`/blog/${post.id}`}>{cardContent}</Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
