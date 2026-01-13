"use client";

import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
	posts: BlogPost[];
	title?: string;
	showAll?: boolean;
	linkToDetail?: boolean;
}

export default function BlogSection({
	posts,
	title = "Latest Posts",
	showAll = true,
	linkToDetail = false,
}: BlogSectionProps) {
	const displayPosts = showAll ? posts : posts.slice(0, 3);

	return (
		<section className="mb-16">
			<div className="flex justify-between items-center mb-6">
				<motion.h2
					className="text-2xl font-bold"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.2 }}
				>
					{title}
				</motion.h2>
				{!showAll && (
					<Link href="/blog">
						<Button variant="outline">View All Posts</Button>
					</Link>
				)}
			</div>
			{displayPosts.length === 0 ? (
				<motion.p
					className="text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					No posts match your search.
				</motion.p>
			) : (
				<motion.div
					className="space-y-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ staggerChildren: 0.1 }}
				>
					{displayPosts.map((post, index) => (
						<BlogPostCard
							key={post.id}
							post={post}
							index={index}
							linkToDetail={linkToDetail}
						/>
					))}
				</motion.div>
			)}
		</section>
	);
}
