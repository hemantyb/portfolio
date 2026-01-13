"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface PortfolioSectionProps {
	projects: Project[];
	onProjectClick: (project: Project) => void;
	title?: string;
	showAll?: boolean;
}

export default function PortfolioSection({
	projects,
	onProjectClick,
	title = "My Projects",
	showAll = true,
}: PortfolioSectionProps) {
	const displayProjects = showAll ? projects : projects.slice(0, 6);

	return (
		<section>
			<motion.h2
				className="text-2xl font-bold mb-6"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				{title}
			</motion.h2>
			{displayProjects.length === 0 ? (
				<motion.p
					className="text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					No projects match your search.
				</motion.p>
			) : (
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ staggerChildren: 0.1 }}
				>
					{displayProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							onClick={onProjectClick}
						/>
					))}
				</motion.div>
			)}
		</section>
	);
}
