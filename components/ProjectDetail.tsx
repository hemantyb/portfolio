"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectDetailProps {
	project: Project;
	onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
	return (
		<motion.div
			className="max-w-3xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Button variant="outline" onClick={onBack} className="mb-6">
				<ArrowRight className="mr-2 h-4 w-4 transform rotate-180" /> Back to
				portfolio
			</Button>
			<motion.div
				className="bg-gray-200 dark:bg-gray-700 border-2 border-rounded rounded-xl w-full h-64 mb-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			></motion.div>
			<h1 className="text-3xl font-bold mb-2">{project.title}</h1>
			<p className="text-lg mb-4">{project.description}</p>
			<div className="flex flex-wrap gap-2 mb-6">
				{project.tags.map((tag) => (
					<motion.span
						key={tag}
						className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
						whileHover={{ scale: 1.05 }}
					>
						{tag}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}
