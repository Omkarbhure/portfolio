import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "CineBook — Online Movie Ticket Booking Platform",
    slug: "cinebook-online-movie-ticket-booking-platform",
    description: "A full-stack movie ticket booking engine built end-to-end, covering location-aware showtime discovery, atomic seat locking, digital wallet payments, and administrative controls.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "MongoDB"],
    impact: "Automated scheduling across 117 theaters in 39 cities, 120 automated test cases",
  },
  {
    name: "TripNest — Travel Planning & Trip Management Platform",
    slug: "tripnest-travel-planning-and-trip-management-platform",
    description: "An interactive, full-stack travel platform built for individual travelers and collaborative group trips, combining live weather data, group budgeting, and real-time collaboration into a single luxury-travel-portal experience.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Spring Boot 4", "Java 17", "PostgreSQL", "Spring Security / JWT"],
    impact: "Aggregated dashboards across 25+ destinations, automated daily reminder scheduling, real-time budget-threshold alerting",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid px-4 sm:px-6">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Software Developer</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Hi, I'm Omkar.
              <br />
              <span className="text-muted-foreground">I build reliable systems that scale.</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              A developer focused on building software that scales, performs, and lasts.
              I enjoy designing and developing reliable digital products that solve complex
              real-world problems and deliver meaningful impact.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
