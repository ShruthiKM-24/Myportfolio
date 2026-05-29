// File: src/components/work/Projects.tsx
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { getPosts } from "@/app/utils/utils";

interface ProjectsProps {
  range?: [number, number?];
  directory?: string[];
  columns?: string; // keep as string for custom class
  thumbnail?: boolean;
}

export function Projects({
  range,
  directory = ["src", "app", "work", "projects"],
  columns = "columns-1", // default 1 column (Activity style)
  thumbnail,
}: ProjectsProps) {
  const allProjects = getPosts(directory);

  const sortedProjects = allProjects.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const isProject = directory.includes("project");
  const basePath = isProject ? "project" : "work";

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {/* Grid wrapper to control layout */}
      <div className={`display-grid ${columns} g-32`}>
        {displayedProjects.map((post, index) => (
          <ProjectCard
            key={post.slug}
            priority={index < 2}
            href={`/${basePath}/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={
              post.metadata.team?.map((member) => ({ src: member.avatar })) || []
            }
            link={post.metadata.link || ""}
            github={post.metadata.github || ""}
            showCaseStudy={!isProject}
          />
        ))}
      </div>
    </Column>
  );
}
