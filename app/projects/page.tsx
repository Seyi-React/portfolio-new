"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  FolderClosed,
  HomeIcon,
  User,
  ImageIcon,
  Code,
  Layout,
  Lock,
  Database,
  Server,
  Cloud,
  Shield,
  Users,
  ChevronRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "../../components/ui/project-card";

const FILTERS = ["All", "Frontend", "Backend", "Enterprise"];

const PROJECTS = [
  // Personal Frontend Project (keep this one)
  {
    title: "Geric Restaurant",
    description:
      "A landing page which allows users to order food online and pay for it using their phone.",
    tags: ["CSS", "React","Component Design"],
    type: "Frontend",
    link: "https://geric.netlify.app/",
  },
  
  // Enterprise Banking Projects
  {
    title: "Banking Customer Portal",
    description:
      "Led frontend development of a secure customer portal allowing banking customers to manage accounts, make transactions, and track financial goals with advanced security measures.",
    tags: ["React", "TypeScript", "Redux", "Security"],
    type: "Enterprise",
    link: "#",
    confidential: true,
  },
  {
    title: "Transaction Monitoring System",
    description:
      "Developed a real-time transaction monitoring system for detecting fraudulent activity across multiple banking channels with advanced pattern recognition algorithms.",
    tags: ["React", "WebSockets", "D3.js", "Analytics"],
    type: "Enterprise",
    "link": "#",
    confidential: true,
  },
  {
    "title": "Enterprise Loan Management System",
    "description": "A comprehensive loan processing platform with role-based access control. Features include loan application, approval workflows, disbursement tracking, and repayment monitoring. Only supervisors can approve loans, ensuring proper governance and compliance.",
    tags: ["React", "TypeScript", "Redux","Security"],
    "type": "Enterprise",
    "link": "#",
    confidential: true,
  },
  {
    "title": "Banking Statement Generator",
    "description": "A secure financial reporting system allowing customers to generate, view, and download their account statements. Implements robust authentication, data integrity verification, and comprehensive transaction history tracking with audit logs.",
    tags: ["React", "JWT", "Redux", "Security","PDF Generation","API Integration"],
    "type": "Enterprise",
    "link": "#",
    confidential: true,
  },
  {
    "title": "Multi-Role Insurance Processing Platform",
    "description": "An enterprise insurance management system with 5 distinct user roles including reviewers, authorizers, disbursement officers, and relationship managers. Features sophisticated workflow routing, request logging, claim processing, and role-specific dashboards and permissions.",
    "tags": ["React", "TypeScript","Security", "Role-Based Access", "API Integration"],
    "type": "Enterprise",
    "link": "#",
    confidential: true,
  },
  {
    title: "SecureBank API",
    description:
      "A comprehensive banking system where users can open accounts, make transfers between accounts, download bank statements, and perform various banking operations. Implemented with robust security and transaction tracking.",
    tags: ["Java", "Spring Boot", "JPA", "MySQL","OpenAPI","PostMan"],
    type: "Backend",
    link: "https://github.com/seyi-react/Banking-Application",
  },
  {
    title: "Project Management",
    description:
      "A project management system using Spring Security and JWT for role-based access control. Features include task assignment, progress tracking, and team collaboration tools with different permission levels.",
    tags: ["Java", "Spring Security", "JWT", "MySQL", "OpenAPI"],
    type: "Backend",
    link: "https://github.com/seyi-react/Advanced-PM",
  },
  {
    title: "Fitness Microservices",
    description:
      "A fitness platform built using microservice architecture, allowing for user management, workout tracking, nutrition planning, and progress monitoring. Includes service discovery, API gateway, and circuit breakers.",
    tags: ["Java", "Spring Cloud", "Microservices", "Docker"],
    type: "Backend",
    link: "https://github.com/seyi-react/Fitness-App-Microservice",
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || project.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/fred.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-medium">Oluwaseyi Adeoti</h2>
            <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/highlights"
            className="text-muted-foreground hover:text-foreground"
          >
            Highlights
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/EngrAdeoti"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/seyi-react"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/seyi-240/"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around items-center z-10">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/about"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <User className="w-5 h-5" />
          <span className="text-xs">About</span>
        </Link>
        <Link
          href="/projects"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <FolderClosed className="w-5 h-5" />
          <span className="text-xs">Projects</span>
        </Link>
        <Link
          href="/highlights"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <ImageIcon className="w-5 h-5" />
          <span className="text-xs">Highlights</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 pb-24 md:pb-16">
        <h1 className="text-5xl font-bold text-center mb-4">Professional Portfolio</h1>

        <p className="text-center text-muted-foreground mb-12">
          "Engineering excellence through secure, scalable solutions." —{" "}
          <span className="text-foreground">Oluwaseyi Adeoti</span>
        </p>

        <div className="bg-gray-50 border rounded-lg p-6 mb-12">
          <h2 className="text-xl font-medium mb-3 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-blue-600" /> Banking Software Engineering Experience
          </h2>
          <p className="mb-4">
            As a Senior Software Engineer in the banking sector, I've led development teams in creating secure, compliant, and scalable applications. Due to the confidential nature of banking software, specific project details are presented with limited technical information.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border flex items-start">
              <Shield className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium">Security-First Approach</h3>
                <p className="text-sm text-gray-600">Implementing advanced security protocols for financial systems</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded border flex items-start">
              <Server className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium">DevOps Integration</h3>
                <p className="text-sm text-gray-600">CI/CD pipelines with Docker containerization for consistent deployment</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded border flex items-start">
              <Users className="w-5 h-5 mr-2 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium">Cross-Team Collaboration</h3>
                <p className="text-sm text-gray-600">Close partnership with QA and DevOps teams for robust solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {FILTERS.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter === "Frontend" ? (
                <><Layout className="w-4 h-4 mr-2" /> {filter}</>
              ) : filter === "Backend" ? (
                <><Code className="w-4 h-4 mr-2" /> {filter}</>
              ) : filter === "Enterprise" ? (
                <><Lock className="w-4 h-4 mr-2" /> {filter}</>
              ) : (
                filter
              )}
            </Button>
          ))}
        </div>

        {activeFilter === "All" && (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="mr-2" /> Enterprise Banking Projects
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProjects
                  .filter((project) => project.type === "Enterprise")
                  .map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Layout className="mr-2" /> Frontend Projects
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProjects
                  .filter((project) => project.type === "Frontend" && project.type !== "Enterprise")
                  .map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2" /> Backend Projects
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProjects
                  .filter((project) => project.type === "Backend" && project.type !== "Enterprise")
                  .map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
              </div>
            </div>
          </>
        )}

        {(activeFilter !== "All") && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
        
        {/* Technical Leadership Section */}
        <section className="mt-16 mb-12 bg-gray-50 border rounded-lg p-6">
          <h2 className="text-2xl font-medium mb-4">Technical Leadership & Expertise</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 bg-white border rounded-lg">
                <h3 className="font-medium flex items-center text-lg mb-2">
                  <Database className="w-5 h-5 mr-2 text-blue-600" /> Data Architecture
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Designed robust data schemas for financial transactions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Implemented secure data access patterns</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 p-4 bg-white border rounded-lg">
                <h3 className="font-medium flex items-center text-lg mb-2">
                  <Cloud className="w-5 h-5 mr-2 text-blue-600" /> Containerization
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Docker orchestration for banking applications</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Kubernetes deployment for high-availability systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 bg-white border rounded-lg">
                <h3 className="font-medium flex items-center text-lg mb-2">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" /> Security Engineering
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>OWASP security implementation for banking interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Multi-factor authentication systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 p-4 bg-white border rounded-lg">
                <h3 className="font-medium flex items-center text-lg mb-2">
                  <Users className="w-5 h-5 mr-2 text-blue-600" /> Team Leadership
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Led cross-functional teams of 5-10 developers</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-600 mt-1" />
                    <span>Mentored junior developers in secure coding practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-medium mt-3">Contact Me</h2>
          <p className="text-muted-foreground mb-4">
            Interested in secure, enterprise-grade solutions? Reach out to me at{" "}
            <Link
              href="mailto:oluwaseyiadeoti825@gmail.com"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              oluwaseyiadeoti825@gmail.com <ArrowUpRight className="w-4 h-4" />
            </Link>
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/seyi-react"
              className="text-foreground hover:text-blue-600"
            >
              Github <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/seyi-240/"
              className="text-foreground hover:text-blue-600"
            >
              Linkedin <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
            <Link
              href="https://x.com/EngrAdeoti"
              className="text-foreground hover:text-blue-600"
            >
              Twitter <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}