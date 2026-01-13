"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

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
			<h1 className="text-3xl font-bold mb-4">{project.title}</h1>
			<p className="text-lg mb-6">{project.longDescription}</p>

			{project.technologiesUsed && project.technologiesUsed.length > 0 && (
				<div className="mb-6">
					<h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
					<div className="flex flex-wrap gap-2">
						{project.technologiesUsed.map((tech) => (
							<motion.span
								key={tech}
								className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
								whileHover={{ scale: 1.05 }}
							>
								{tech}
							</motion.span>
						))}
					</div>
				</div>
			)}

			{project.features && project.features.length > 0 && (
				<div className="mb-6">
					<h2 className="text-2xl font-semibold mb-3">Key Features</h2>
					<ul className="list-disc list-inside space-y-2">
						{project.features.map((feature, index) => (
							<li key={`${project.id}-feature-${index}`} className="text-base">
								{feature}
							</li>
						))}
					</ul>
				</div>
			)}

			<div className="flex flex-wrap gap-3 mb-6">
				{project.githubUrl && (
					<Button asChild>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View on GitHub
						</a>
					</Button>
				)}
				{project.liveDemoUrl && (
					<Button asChild variant="outline">
						<a
							href={project.liveDemoUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live Demo
						</a>
					</Button>
				)}
			</div>
		</motion.div>
	);
}
