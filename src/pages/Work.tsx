import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "CineBook — Online Movie Ticket Booking Platform",
    slug: "cinebook-online-movie-ticket-booking-platform",
    description: "A full-stack movie ticket booking engine built end-to-end, covering everything from location-aware showtime discovery to atomic seat locking, digital wallet payments, and an administrative control center.",
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

export default function Work() {
  return (
    <Layout>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A selection of projects showcasing systems engineering, product development, 
              and technical problem-solving. Each project represents real challenges solved 
              with measurable impact.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
