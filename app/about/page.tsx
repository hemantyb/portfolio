"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function AboutPage() {
	return (
		<Layout>
			<motion.div
				className="max-w-4xl mx-auto"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{/* Hero Section */}
				<div className="text-center mb-16">
					<motion.div
						className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6 flex items-center justify-center"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: "spring" }}
					>
						<span className="text-4xl text-white font-bold">HB</span>
					</motion.div>

					<motion.h1
						className="text-4xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						About Me
					</motion.h1>

					<motion.p
						className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						Self-taught software developer with a strong foundation in computer
						science. I started my journey with Linux (I use Arch btw) and Vim,
						and have since progressed to building enterprise-level projects
						using Spring Boot and .NET. I also enjoy working on personal
						projects in Rust and Go. I got into web development to build a site
						& blogs for myself, and along the way became proficient in React,
						with hands-on experience in building projects using Next.js.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Button size="lg" asChild>
							<Link href="/contact">Get In Touch</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="https://github.com/hemantyb">View My Work</Link>
						</Button>
					</motion.div>
				</div>

				{/* Skills Section */}
				<Skills />

				{/* Personal Touch */}
				<motion.section
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
				>
					<Card className="p-8">
						<Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
						<h3 className="text-2xl font-bold mb-4">What I Love</h3>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							When I&apos;m not coding, you&apos;ll find me exploring new
							technologies, contributing to open source projects, or sharing
							knowledge through blog posts. I believe in continuous learning and
							the power of community in driving innovation.
						</p>
					</Card>
				</motion.section>
			</motion.div>
		</Layout>
	);
}
