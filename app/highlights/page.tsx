"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  HomeIcon,
  User,
  FolderClosed,
  Music,
  ImageIcon,
} from "lucide-react";



import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import {  Mail } from "lucide-react";



  // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // useEffect(() => {
 
  //   setCurrentYear(new Date().getFullYear());
  // }, []);

export default function Highlights() {
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
            <p className="text-sm text-muted-foreground">Full stack Developer</p>
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
            href="https://x.com/engrAdeoti"
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
            href="https://www.linkedin.com/in/oluwaseyi-adeoti-594317344/"
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





    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 mb-20 md:mb-0">
      <h1 className="text-5xl font-bold text-center mb-4">
        Professional <span className="text-gradient font-fancy">Portfolio</span>
      </h1>

      <p className="text-center text-muted-foreground mb-12">
        Expertise in software engineering, technical leadership, and impactful solutions.
      </p>

      <div className="space-y-12">
        {/* Professional Achievements */}
        <section>
          <h2 className="text-2xl font-medium mb-4">Key Achievements</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Technical Leadership</h3>
              <p className="mb-2">
                Led a logistics team at{" "}
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                >
                  Trip Value{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </p>
              <p className="text-muted-foreground">
                Successfully managed and optimized delivery routes, reducing delivery times by 30% and improving customer satisfaction scores.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Project Delivery</h3>
              <p className="text-muted-foreground">
                Implemented an automated tracking system that increased delivery accuracy by 45% and reduced operational costs by streamlining the logistics workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies & Skills */}
        <section>
          <h2 className="text-2xl font-medium mb-4">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["React", "TypeScript", "Next.js", "Java", "SpringBoot", "RESTful APIs","Micro Frontend" ,"MySQL",
              "CI/CD", "AWS", "Microservices", "PostgreSQL", "System Design", "Technical Mentorship"].map((skill, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-md text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Favorite Development Environment */}
        <section>
          <h2 className="text-2xl font-medium mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Development Environment
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Development Playlist */}
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                className="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTLSN7iG21yC?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            {/* Dev Setup Description */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Preferred Stack</h3>
                <p className="text-muted-foreground">
                  TypeScript, React, Java with a focus on performance optimization and clean architecture.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Development Philosophy</h3>
                <p className="text-muted-foreground">
                  Building elegant solutions to complex problems through maintainable code and robust engineering practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-medium mb-4">Testimonials</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <blockquote className="border-l-4 pl-4 italic p-4 bg-gray-50 rounded-r-lg">
              "Oluwaseyi's works have always been clean and mindblowingly amazing. His attention to detail and architectural decisions create solutions that stand the test of time."
              <footer className="mt-2 text-sm text-muted-foreground">
                — Felix, Engineering Manager(Stering Bank)
              </footer>
            </blockquote>

            <blockquote className="border-l-4 pl-4 italic p-4 bg-gray-50 rounded-r-lg">
              "He consistently ships <span className="text-gradient">high-quality</span> products quickly. He is a very reliable asset to any team, bringing both technical expertise and leadership."
              <footer className="mt-2 text-sm text-muted-foreground">
                — Founder, TripValue
              </footer>
            </blockquote>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="mt-16 p-6 border rounded-lg">
        <h2 className="text-2xl font-medium mb-4">Professional Contact</h2>
        <p className="text-muted-foreground mb-6">
          I'm open to discussing engineering leadership opportunities and technical collaborations.
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <Link
            href="mailto:ajfred2008@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Mail className="w-5 h-5" />
           oluwaseyiadeoti825@gmail.com
          </Link>
          
          <div className="flex gap-6">
            <Link
              href="https://github.com/seyi-react"
              className="flex items-center gap-1 text-foreground hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
              <span className="hidden md:inline">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/seyi-240/"
              className="flex items-center gap-1 text-foreground hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden md:inline">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/EngrAdeoti"
              className="flex items-center gap-1 text-foreground hover:text-blue-600"
            >
              <Twitter className="w-5 h-5" />
              <span className="hidden md:inline">Twitter</span>
            </Link>
          </div>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          ©  • Senior Software Engineer
        </p>
      </section>
    </main>

    </div>
  );
}
