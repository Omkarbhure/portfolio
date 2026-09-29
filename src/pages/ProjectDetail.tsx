import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}> = {
  "repopilot-github-coderag-developer-intelligence-platform": {
    name: "RepoPilot — GitHub CodeRAG: Developer Intelligence Platform",
    description: "A full-stack Retrieval-Augmented Generation platform that ingests public GitHub repositories and turns them into a searchable, conversational code workspace. It performs AST-aware chunking and hybrid vector/keyword indexing, then powers a split-view Monaco editor where every answer is grounded in the repo and backed by line-level citations.",
    fullDescription: "A full-stack Retrieval-Augmented Generation platform that ingests public GitHub repositories and turns them into a searchable, conversational code workspace. It performs AST-aware chunking and hybrid vector/keyword indexing, then powers a split-view Monaco editor where every answer is grounded in the repo and backed by line-level citations.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Java 17", "Spring Boot 3.3", "PostgreSQL 16", "Qdrant", "Google Gemini", "Docker"],
    impact: "Hybrid dense + sparse retrieval with weighted score fusion (0.7 vector / 0.3 keyword), 77 automated backend tests, CI/CD via GitHub Actions",
    challenges: [
      "Combining Qdrant vector similarity and PostgreSQL full-text scores into a single ranking through normalized, weighted fusion",
      "Keeping LLM answers grounded by forcing responses to cite retrieved chunks as [filePath:startLine-endLine]",
      "Ingesting large repositories safely with 100MB/10MB size caps, Zip Slip protection, and filtering of binaries, minified code, and generated files",
      "Running long indexing jobs asynchronously with live status tracking (Downloading → Scanning → Chunking → Embedding → Completed)",
      "Securing dual authentication (email/password + GitHub OAuth2) with stateless HttpOnly JWT cookies, CSRF protection, rate limiting, and daily API quotas"
    ],
    features: [
      "Hybrid search across 768-dimensional Gemini embeddings and PostgreSQL tsvector/GIN full-text indexes",
      "Grounded RAG chat with clickable citation chips that jump to and highlight exact lines in the editor",
      "Split-view workspace with a read-only Monaco editor, 20+ language detection, and a related-files drawer",
      "Automated architecture overview generation, cached per commit SHA",
      "Stack trace and bug investigation for Java, Python, JS/TS, and Go, with root-cause analysis and suggested fixes",
      "Smart ingestion pipeline with thread-pooled background workers and low-value code detection to save embedding budget"
    ],
    githubUrl: "https://github.com/Omkarbhure/Github-CodeRag"
  },
  "cinebook-online-movie-ticket-booking-platform": {
    name: "CineBook — Online Movie Ticket Booking Platform",
    description: "A full-stack movie ticket booking engine built end-to-end, covering everything from location-aware showtime discovery to atomic seat locking, digital wallet payments, and an administrative control center.",
    fullDescription: "A full-stack movie ticket booking engine built end-to-end, covering everything from location-aware showtime discovery to atomic seat locking, digital wallet payments, and an administrative control center. The platform automates showtime generation across 117 theaters in 39 cities and issues verifiable, QR-coded PDF tickets for every booking.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Twilio"],
    impact: "Automated scheduling across 117 theaters in 39 cities, 120 automated test cases",
    challenges: [
      "Preventing seat double-booking under concurrent access with atomic, temporary 10-minute seat locks",
      "Coordinating multi-channel OTP verification (email + SMS) with reliable fallback when SMS providers are unavailable",
      "Automating showtime generation on a recurring schedule without manual intervention or drift",
      "Managing wallet balance integrity across top-ups, bookings, and automatic refunds on cancellation"
    ],
    features: [
      "Real-time atomic seat map with tiered pricing (Silver, Gold, Platinum)",
      "Digital wallet with UPI/card mock payments and automatic refund processing",
      "Location-aware showtime discovery via geolocation or manual city selection",
      "Dynamic PDF ticket generation with scannable QR verification codes",
      "Background cron scheduler for automated 7-day showtime generation",
      "Administrative dashboard for movies, revenue tracking, bookings, and ticket verification"
    ],
    githubUrl: "https://github.com/Omkarbhure/Cinebook",
    liveDemoUrl: "https://cinebook-sigma.vercel.app/"
  },
  "sigmagpt-multimodal-ai-chatbot-productivity-assistant": {
    name: "SigmaGPT — Multimodal AI Chatbot & Productivity Assistant",
    description: "A modern, full-stack AI chatbot inspired by ChatGPT, Claude, and DeepSeek, powered by the Google Gemini API. Provides real-time streaming conversations with multimodal support for text, images, PDFs, and voice input, combined with secure user authentication and persistent prompt history.",
    fullDescription: "A modern, full-stack AI chatbot inspired by ChatGPT, Claude, and DeepSeek, powered by the Google Gemini API. SigmaGPT provides real-time streaming conversations with multimodal support for text, images, PDFs, and voice input, combined with secure JWT-based user authentication and persistent prompt history — delivering a complete, production-grade AI assistant experience.",
    stack: ["Node.js", "Express", "Google Gemini API", "Vanilla JavaScript", "Web Speech API", "PDF-Parse", "Multer", "JWT", "bcrypt"],
    impact: "Delivered a multimodal AI experience supporting real-time streaming conversations, image understanding, PDF analysis, voice-to-text input, and authenticated user sessions",
    challenges: [
      "Building low-latency streaming AI responses with a typing-effect experience while allowing users to stop and regenerate generations",
      "Coordinating multimodal input across text, images, PDFs, and voice while converting each input into Gemini-compatible requests",
      "Processing uploaded PDFs through server-side text extraction and passing relevant document content to the AI for contextual analysis",
      "Implementing secure authentication with JWT-based sessions and bcrypt password hashing while protecting authenticated API endpoints",
    ],
    features: [
      "Real-time Gemini-powered AI chat with streaming responses, stop generation, regeneration, and Markdown rendering",
      "Multimodal AI interaction with image upload, preview, and AI-powered image analysis",
      "PDF upload with automatic text extraction and document-based question answering",
      "Real-time voice-to-text input using the browser Web Speech API",
      "JWT-based authentication with registration, login, protected user sessions, and bcrypt password hashing",
      "ChatGPT-style responsive interface with dark theme, animated gradients, welcome screen, quick suggestions, and recent prompt history",
      "File upload handling with Multer, validation, and configurable 50MB file-size limits",
      "REST API architecture for streaming chat, PDF extraction, authentication, and authenticated user information",
    ],
    githubUrl: "https://github.com/Omkarbhure/SigmaGPT",
    liveDemoUrl: "https://sigmagpt.antideploy.com/",
  },
  "tripnest-travel-planning-and-trip-management-platform": {
    name: "TripNest — Travel Planning & Trip Management Platform",
    description: "An interactive, full-stack travel platform built for individual travelers and collaborative group trips, combining live weather data, group budgeting, and real-time collaboration into a single luxury-travel-portal experience.",
    fullDescription: "An interactive, full-stack travel platform built for individual travelers and collaborative group trips, combining live weather data, group budgeting, and real-time collaboration into a single luxury-travel-portal experience. The system aggregates dashboards for both travelers and administrators, automates trip and activity reminders, and tracks shared budgets with threshold-based alerting.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Spring Boot 4", "Java 17", "PostgreSQL", "Spring Security / JWT"],
    impact: "Aggregated dashboards across 25+ destinations, automated daily reminder scheduling, real-time budget-threshold alerting",
    challenges: [
      "Aggregating cross-trip analytics (budgets, expenses, destinations, stats) into a single performant dashboard query",
      "Coordinating role-based access (Owner, Group Admin, Member) across trips, itineraries, activities, and budgets via a reusable access-check layer",
      "Running duplicate-safe scheduled notifications (trip/activity reminders) without re-alerting users on every scheduler pass",
      "Detecting budget threshold crossings (80%/100%) in real time during expense writes without firing duplicate alerts"
    ],
    features: [
      "Dual-persona dashboards — traveler stats/budget overview and admin platform-wide analytics",
      "Group trip collaboration with role management, join requests, and approval flow",
      "Category-based budget & expense tracking with visual burn-rate and over-budget alerts",
      "Real-time notification system (trip reminders, activity reminders, budget alerts, role/travel updates) with live-polling bell UI",
      "Live weather integration (temperature, humidity, wind, forecast) via OpenWeather on destination pages",
      "Day-by-day itinerary timeline with type-specific activity categorization"
    ],
    githubUrl: "https://github.com/Omkarbhure/tripnest",
    liveDemoUrl: "https://tripnest-frontend-three.vercel.app"
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container max-w-4xl px-4 sm:px-6">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-8 sm:mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 break-words leading-tight">
              {project.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 break-words">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-3.5 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg break-words">
              <span className="font-mono text-xs sm:text-sm text-primary break-words leading-normal">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-8 sm:mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="font-mono text-primary mt-1 shrink-0">→</span>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>

          {/* Features */}
          <div className="mb-8 sm:mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="font-mono text-primary mt-1 shrink-0">✓</span>
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            <Button
              variant="outline"
              className="w-full xs:w-auto font-mono min-h-[44px]"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            {project.liveDemoUrl ? (
              <Button
                variant="outline"
                className="w-full xs:w-auto font-mono min-h-[44px]"
                asChild
              >
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="w-full xs:w-auto font-mono min-h-[44px]" disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
