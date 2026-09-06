"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <div>
      <Card
        className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
        onClick={() => onClick(project)}
      >
        {/* <motion.div */}
        {/* 	className="bg-gray-200 dark:bg-gray-700 border-2 border-rounded rounded-xl w-full h-48" */}
        {/* 	whileHover={{ scale: 1.02 }} */}
        {/* ></motion.div> */}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.shortDescription}</p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* {project.githubUrl && ( */}
          {/* 	<Button asChild variant="outline" size="sm"> */}
          {/* 		<a href={project.githubUrl} target="_blank" rel="noopener noreferrer"> */}
          {/* 			GitHub */}
          {/* 		</a> */}
          {/* 	</Button> */}
          {/* )} */}
        </CardFooter>
      </Card>
    </div>
  );
}
