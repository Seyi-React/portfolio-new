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
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function About() {
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
            <p className="text-sm text-muted-foreground">
              Full stack Developer
            </p>
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
            href="https://x.com/engrAdeoti_"
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <h1 className="text-5xl font-bold text-center mb-4">
          <span className="text-gray-400 font-semibold text-center text-sm block mb-2">
            Who am I?
          </span>
          Well I&apos;m Oluwaseyi Adeoti
        </h1>

        <p className="text-center mb-12">
          Senior Frontend Engr @ Sterling Bank Plc
        </p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-12 mb-12">
          <div>
            <Image
              src="/assets/fred.jpg"
              alt="Oluwaseyi Adeoti"
              width={600}
              height={600}
              className="rounded-full w-full"
            />
          </div>

          <div className="space-y-6">
            <p>
              I'm a seasoned Full-Stack Developer with 5+ years of specialized
              experience in web development, excelling in user interface design
              and frontend engineering
            </p>

            <p>
              My expertise spans creating comprehensive full-stack applications,
              from responsive web apps to progressive web applications (PWAs). I
              engineer interfaces that are not only visually compelling but also
              performant, intuitive, and built for scale.
            </p>

            <p>
              I bring meticulous attention to both creative details and
              functional excellence. My technical foundation includes advanced
              frontend architecture implementation—from component design
              patterns and micro frontends to React and TypeScript ecosystems.
            </p>

            <p>
              When I'm not crafting digital experiences, you'll find me
              expanding my knowledge through reading and staying current with
              emerging technologies.👀.
            </p>
            <Link href="/projects">
              <Button variant="outline" className="mt-4">
                Projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-medium mt-3">Contact Me.</h2>
          <p className="text-muted-foreground mb-4">
            Reach out to me{" "}
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
              href="https://www.linkedin.com/in/oluwaseyi-adeoti/"
              className="text-foreground hover:text-blue-600"
            >
              Linkedin <ArrowUpRight className="w-4 h-4 inline" />
            </Link>
            <Link
              href="https://x.com/engrAdeoti"
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
