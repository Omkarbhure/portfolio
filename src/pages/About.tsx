import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const skills = [
  "Systems Architecture",
  "Frontend Engineering",
  "API Design",
  "Performance Optimization",
  "Technical Leadership",
  "Product Development",
];

const stack = [
  "React",
  "Node.js",
  "SQL",
  "Springboot",
  "Java",
  "ML",
  "Python",
  "MongoDB",
  "Git",
  "GitHub",
  "Express.js",
  "Node",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Developer Photo */}
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
                  <img
                    src="/images/developer-portrait.jpeg"
                    alt="Developer portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Omkar</span>, a developer focused on building software that scales, performs, and lasts. I enjoy designing and developing reliable digital products that solve complex real-world problems and deliver meaningful impact.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  I focus on creating systems that are practical, resilient, and built to grow with real user needs over time.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  My approach blends engineering discipline with product thinking so every solution is both technically strong and genuinely valuable.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Build for reliability, not just speed
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Measure impact, not just output
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Simplify complexity, don't hide it
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Document decisions, not just code
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Infosys Springboard virtual Internship 7.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
