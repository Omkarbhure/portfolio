import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  slug: string;
  className?: string;
}

export function ProjectCard({ name, description, stack, impact, slug, className }: ProjectCardProps) {
  return (
    <Link to={`/work/${slug}`} className="block h-full">
      <article
        className={cn(
          "group h-full w-full p-4 sm:p-5 lg:p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer",
          className
        )}
      >
        {/* Project Name */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-mono text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors break-words">
            {name}
          </h3>
          <ArrowRight className="h-4 w-4 shrink-0 mt-1 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed break-words">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {stack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        {/* Impact */}
        <div className="pt-3 sm:pt-4 border-t border-border">
          <span className="font-mono text-xs text-primary break-words leading-normal">
            <span className="text-muted-foreground">{"//"}</span> {impact}
          </span>
        </div>
      </article>
    </Link>
  );
}
