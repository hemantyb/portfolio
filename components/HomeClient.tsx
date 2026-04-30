"use client";

import { useMemo, useState } from "react";
import BlogSection from "@/components/BlogSection";
import Layout from "@/components/Layout";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectDetail from "@/components/ProjectDetail";
import type { PostMetadata } from "@/lib/posts";
import type { Project } from "@/types";

export default function HomeClient({
  posts,
  projects,
}: {
  posts: PostMetadata[];
  projects: Project[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    );
  }, [projects, searchQuery]);

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
          <BlogSection posts={posts} showAll={false} linkToDetail={true} />
          <PortfolioSection
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </>
      )}
    </Layout>
  );
}
