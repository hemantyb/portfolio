"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import Link from "next/link";

interface BlogPostDetailProps {
	post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
	return (
		<motion.div
			className="max-w-3xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Link href="/blog">
				<Button variant="outline" className="mb-6">
					<ArrowRight className="mr-2 h-4 w-4 transform rotate-180" /> Back to
					blog
				</Button>
			</Link>
			<article className="prose dark:prose-invert max-w-none">
				<h1 className="text-3xl font-bold mb-2">{post.title}</h1>
				<p className="text-muted-foreground mb-6">
					{post.date} · {post.readTime}
				</p>
				<div className="space-y-4">
					{post.content.split(". ").map((sentence, i) => (
						<motion.p
							key={i}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05 }}
						>
							{sentence}
							{sentence.endsWith(".") ? "" : "."}
						</motion.p>
					))}
				</div>
			</article>
		</motion.div>
	);
}
