"use client";

import { useMemo, useState } from "react";
import { blogPosts, projects } from "@/data/sampleData";
import { Project } from "@/types";
import Layout from "@/components/Layout";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ProjectDetail from "@/components/ProjectDetail";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const filteredProjects = useMemo(() => {
		return projects.filter(
			(project) =>
				project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
				project.tags.some((tag) =>
					tag.toLowerCase().includes(searchQuery.toLowerCase()),
				),
		);
	}, [searchQuery]);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
	};

	const handleBackToPortfolio = () => {
		setSelectedProject(null);
	};

	return (
		<Layout
			showSearch={true}
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
		>
			{selectedProject ? (
				<ProjectDetail
					project={selectedProject}
					onBack={handleBackToPortfolio}
				/>
			) : (
				<>
					<BlogSection posts={blogPosts} showAll={false} linkToDetail={true} />
					<PortfolioSection
						projects={filteredProjects}
						onProjectClick={handleProjectClick}
					/>
				</>
			)}
		</Layout>
	);
}
