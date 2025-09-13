"use client";

import { motion } from "framer-motion";
import {
	Code2,
	Coffee,
	Layers,
	Database,
	Globe,
	Terminal,
	Server,
	FileCode,
	Monitor
} from "lucide-react";

export default function Skills() {
	const skills = [
		{ name: "Vim", icon: Terminal },
		{ name: "Java", icon: Coffee },
		{ name: "Spring Boot", icon: Layers },
		{ name: "JPA/Hibernate", icon: Database },
		{ name: "Microservices", icon: Server },
		{ name: "TypeScript", icon: FileCode },
		{ name: "React", icon: Code2 },
		{ name: "Next.js", icon: Globe },
		{ name: "PostgreSQL", icon: Database },
		{ name: "Python", icon: Code2 },
		{ name: "MySQL", icon: Database },
		{ name: "Linux", icon: Monitor },
	];

	return (
		<motion.section
			className="mb-16"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className="text-3xl font-bold mb-8 text-center">
				Skills & Technologies
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{skills.map((skill, index) => (
					<motion.div
						key={skill.name}
						className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card hover:bg-accent transition-colors"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7 + index * 0.1 }}
					>
						<skill.icon className="h-8 w-8 text-primary" />
						<span className="font-medium text-center">{skill.name}</span>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
