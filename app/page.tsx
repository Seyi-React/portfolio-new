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
  ImageIcon,
  ChevronDown,
  Sparkles,
  EyeIcon,
} from "lucide-react";
import { useState } from "react";
import BlurMenu from "../components/BlurMenu";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    try {
      const result = await emailjs.send(
        "service_em85hnb", // Your service ID
        "template_ll9i5g9", // Your template ID
        templateParams,
        "Tt6cR6_SWblpXuwst" // Your public key
      );

      if (result.text === "OK") {
        toast({
          title: "Message sent successfully!🫶🏽🩷",
          description: `Thanks for reaching out, ${templateParams.from_name}. I'll get back to you soon.💖`,
        });
        form.reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message.",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="hidden lg:flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hover:opacity-80"
          >
            <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/fred.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
            />
            <div>
              <h2 className="font-medium text-sm lg:text-base">
                Oluwaseyi Adeoti
              </h2>
              <p className="text-xs lg:text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 lg:gap-6">
          <Link href="https://x.com/engrAdeoti">
            <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/oluwaseyi-adeoti-594317344/">
            <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link
            href="https://github.com/seyi-react"
            className="hover:opacity-80"
          >
            <Github className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
          <Link
            href="#contact"
            className="bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:opacity-90 scroll-smooth text-sm lg:text-base"
          >
            Book a Call
          </Link>



        </nav>
      </header>

      <BlurMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around items-center z-20">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <HomeIcon className="w-4 h-4" />
          <span className="text-[10px]">Home</span>
        </Link>
        <Link
          href="/about"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <User className="w-4 h-4" />
          <span className="text-[10px]">About</span>
        </Link>
        <Link
          href="/projects"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <FolderClosed className="w-4 h-4" />
          <span className="text-[10px]">Projects</span>
        </Link>
        <Link
          href="/highlights"
          className="flex flex-col items-center gap-1 hover:text-blue-500"
        >
          <ImageIcon className="w-4 h-4" />
          <span className="text-[10px]">Highlights</span>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 pt-16 lg:pt-20 pb-24 md:pb-0">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/fred.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full mb-6 lg:mb-8 w-24 h-24 lg:w-32 lg:h-32"
          />

          <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-[-0.02em]">
            Hey, I&apos;m Oluwaseyi Adeoti.
            <br />
            <span className="text-gradient font-fancy">Dreamer </span>, Snr
            Developer & Tech savy
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 max-w-xl">
            Architecting robust systems and exceptional user experiences with
            precision and innovation. Seasoned senior engineer by profession,
            creative problem-solver and technical visionary by nature.
            Transforming complex challenges into elegant solutions—day and 🌙
            night.
          </p>

          <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
            <Link
              href="#contact"
              className="bg-black text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:opacity-90 scroll-smooth text-sm lg:text-base"
            >
              Book a Call
            </Link>

            <a
              href="/assets/oluwaseyi.pdf"
              download="ADEOTI_OLUWASEYI_CV.pdf"
              className="flex items-center justify-center gap-2 bg-white border border-black text-black px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-gray-50 text-sm lg:text-base"
            >
              <Download className="w-4 h-4 lg:w-5 lg:h-5" />
              Download CV
            </a>

            <div className="flex items-center justify-center gap-2 bg-green-50 text-green-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for opportunities
            </div>
          </div>
        </div>

      

        <div className="flex flex-col items-center text-center mt-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-[-0.02em] flex items-center justify-center gap-2">
            Professional <span className="font-fancy">Experience</span>
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mb-8 max-w-xl">
            Highlights from my 5+ years as a Full-Stack Developer specializing
            in UI design and frontend engineering
          </p>

          <div className="grid grid-cols-1 gap-8 w-full max-w-5xl mx-auto">
            {[
              {
                company: "Sterling Bank Plc",
                role: "Senior Frontend Developer",
                period: "Jul 2023 - Present",
                description:
                  "Led migration from legacy systems to modern React based arcitecture ,improving maintainability platform and reducing bug rates. Implemented micro-frontend architecture that improved site performance by 40% and reduced deployment time by 60%. Worked as a guide to Bakend engr to folow best pratices of encrytion and decrytion of sensitive data's.",
                technologies: [
                  "React",
                  "TypeScript",
                  "Redux",
                  "Micro Frontends",
                  "Tailwind CSS",
                  "Chakra UI",
                ],
                logo: "/assets/company1.png",
              },
              {
                company: "Trip Value",
                role: "Lead Frontend Developer",
                period: "Jan 2022 - Jun 2023",
                description:
                  "Developed logistic infrastructure and payment processing system allowing users to seamless make payment. Mentored Juinor developers,performing code reviews ensuring best architecture and best approach followed. Optimized Existing codebase using modern tools.",
                technologies: [
                  "Next.js",
                  "React",
                  "TypeScript",
                  "CSS",
                  "Material UI ",
                  "Styled Components",
                ],
                logo: "/assets/company2.png",
              },
              {
                company: "Aglow Digital",
                role: "Frontend Developer",
                period: "Oct 2021 - Dec 2022",
                description:
                  "Built responsive user interfaces for fintech applications. Collaborated with UX designers to implement pixel-perfect designs. Participated in agile development cycles and delivered features consistently ahead of schedule.",
                technologies: [
                  "JavaScript",
                  "React",
                  "SCSS",
                  "RESTful APIs",
                  "Jest",
                ],
                logo: "/assets/company3.png",
              },
              {
                company: "Aid Me",
                role: "Frontend Developer",
                period: "Feb 2020 - Oct 2021",
                description:
                  "Built responsive user interfaces alongisde developers in a startup. Collaborated with Backend engr's to deliver fast rising solution in startup ,connecting service renders and service service needers.",
                technologies: [
                  "JavaScript",
                  " Monolithic React",
                  "Module CSS",
                  "RESTful APIs",
                  "HTML",
                ],
                logo: "/assets/company3.png",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full text-left border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="w-16 h-16 relative bg-gray-100 rounded-lg overflow-hidden">
                    {/* You can replace with actual company logos */}
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-500">
                      {job.company.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold">
                      {job.role}
                    </h3>
                    <p className="text-gray-600">
                      {job.company} • {job.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-20 lg:mt-32 relative">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-[-0.02em] flex items-center justify-center gap-2">
            What People{" "}
            <span className="font-fancy text-2xl lg:text-4xl">Say</span>
          </h1>
          <p className="text-gray-600 -mb-3 max-w-xl font-fancy text-xl lg:text-2xl">
            My collegeaues trust me
          </p>

          <div className="relative w-full max-w-3xl mx-auto h-[300px] lg:h-[400px]">
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-2xl lg:text-4xl font-bold max-w-xl">
                Because i know how important it is to{" "}
                <span className="text-gradient font-fancy">Connect</span> with
                people you care
              </h2>
            </div>

            {/* Floating avatars with chat bubbles */}
            <div className="absolute top-16 right-20 z-10">
              <Image
                src="/assets/2.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full mb-2 w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute bottom-20 left-10 z-10">
              <Image
                src="/assets/3.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute right-1/4 bottom-24 z-10">
              <Image
                src="/assets/4.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>

            <div className="absolute left-1/3 top-1/4 z-10">
              <Image
                src="/assets/1.svg"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full w-[30px] md:w-[40px] lg:w-[60px]"
              />
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col items-center text-center mt-16 lg:mt-20 mb-16 lg:mb-20"
        >
          <h1 className="text-3xl lg:text-5xl font-bold tracking-[-0.02em] flex items-center justify-center gap-2">
            Get in touch
          </h1>

          <p className="text-sm lg:text-base text-gray-600 mt-4 mb-6 lg:mb-8 max-w-xl">
            I'm always interested in exploring new opportunities, collaborating,
            or exchanging ideas with like-minded individuals. Feel free to book
            a call or email me if you'd like to see my portfolio deck or to
            discuss a potential project.
          </p>

          <form
            // onSubmit={handleSubmit}
            name="contact"
            
            method="post"
            data-netlify="true"
            className="w-full max-w-2xl mx-auto space-y-4 lg:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your Message"
              rows={6}
              className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <footer className="bg-white text-black py-12 lg:py-16 mt-16 lg:mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="border-t border-gray-400 w-full mt-8 lg:mt-12 pt-6 lg:pt-8 group">
              <p className="text-gray-400 text-xs lg:text-sm">
                © {new Date().getFullYear()} by{" "}
                <a
                  href="https://x.com/engrAdeoti"
                  className="hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text hover:animate-gradient transition-all duration-300"
                >
                  Oluwaseyi Adeoti
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
