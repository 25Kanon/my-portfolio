"use client";

import { ThemeToggle } from "./components/theme-toggle";
import { MobileNav } from "./components/mobile-nav";
import { FloatingDock } from "./components/floating-dock";
import { InfiniteMovingCards } from "./components/expertise";
import { Highlight } from "./components/hero-highlight";
import ProjectsSection from "./components/projects-section";
import { TypewriterEffectSmooth } from "./components/typewriter-effect";
import { ColourfulText } from "./components/colorful-text";
import Link from "next/link";
import Image from "next/image";
import Timeline, { TimelineItemProps } from "./components/timeline";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconAt,
} from "@tabler/icons-react";

import bannerImg from "./assets/banner.jpg";
import aboutImg from "./assets/about.jpg";
import gencysLogo from "./assets/gencys.png";
import lpLogo from "./assets/lp-logo.png";

export default function Home() {
  const links = [
    {
      title: "Email",
      icon: (
        <IconAt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:jprofeta000@gmail.com",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://ph.linkedin.com/in/jomari-profeta-693417231",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/25Kanon/",
    },
    {
      title: "GitHub-Personal",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral dark:text-neutral-300" />
      ),
      href: "  https://github.com/HoshikawaShiori",
    },
  ];

  const languages = [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
  ];

  const frameworks = [
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
  ];

  const words = [
    {
      text: "About",
    },
    {
      text: "Me",
    },
  ];

  const timelineItems: TimelineItemProps[] = [
    {
      title: "Web Builder | Client Support Specialist",
      date: "May 2025 - Present",
      description:
        "Manage and implement website revision requests from a portfolio of real estate clients, ensuring accuracy, brand alignment, and fast turnaround times.",
      badge: <Image src={lpLogo} alt="Luxury Presence Logo" className="h-6 w-6 rounded object-cover" />,
      },

    {
      title: "Backend Developer Intern",
      date: "March 2025 - May 2025",
      description:
        "Collaborated with frontend developers to build RESTful web services, integrating APIs to ensure seamless data flow and functionality across client websites.",
        badge: <Image src={gencysLogo} alt="Gencys Logo" className="h-7 w-7 rounded object-cover " />,
      },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="md:hidden">
            <MobileNav />
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-end space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="mailto:jprofeta000@gmail.com"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <ColourfulText text="Contact" />
            </Link>
          </nav>

          <div className="flex flex-1 items-center justify-center">
            <Link href="/" className="text-xl font-bold">
              &lt;J. Profeta/&gt;
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container-fluid px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 pl-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi I&apos;m Jomari
              <br />
              <span className="text-primary">
                <Highlight>Software Engineer</Highlight>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Creating solutions that work — beautifully
            </p>
            <div className="flex">
              <FloatingDock mobileClassName="translate-y-30" items={links} />
            </div>
          </div>
          <div className="relative aspect-square px-2 max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" />
            <Image
              src={bannerImg}
              alt="Profile"
              fill
              className="object-cover rounded-full p-4"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-50 blur-lg"></div>
                <Image
                  src={aboutImg}
                  alt="Profile"
                  className="relative w-full h-[500px] object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                <TypewriterEffectSmooth words={words} />
              </h2>

              <div className="space-y-4 dark:text-white/80 text-black/80">
                <p>
                  Hi, I&#39;m Jomari M. Profeta, a Bachelor of Science in
                  Information Technology graduate from the Technological
                  Institute of the Philippines. I specialize in developing
                  software solutions and continuously improve my skills by
                  exploring new technologies.
                </p>

                <p>
                  My journey in technology started with a deep curiosity about
                  how software shapes our digital world. This led me to pursue
                  IT and work on various academic and personal projects that
                  challenged me to grow as a developer.
                </p>

                <p>
                  I specialize in full-stack development with hands-on
                  experience in:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Building responsive web applications</li>
                  <li>Creating RESTful APIs and backend services</li>
                  <li>Designing user-friendly interfaces</li>
                  <li>Implementing secure and efficient database solutions</li>
                </ul>

                <p>
                  Beyond coding, I enjoy sports and cooking. I&apos;m driven by
                  a mindset of continuous learning and aim to contribute to the
                  tech community while pursuing meaningful projects that make a
                  difference.
                </p>
              </div>

              {/* CTA Button */}
              <Link href="https://drive.google.com/file/d/1l1I7Mqz722z16QB34M34KLJG0v0zNBpY/view?usp=drive_link">
                <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Download Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-wrap w-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-3">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <section className="container flex flex-col items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight py-6">
              Expertise
            </h2>
            <div className="flex flex-col w-full">
              <div>
                <h3 className="text-center text-xl text-white/80 mb-4">
                  Programming Languages
                </h3>
                <InfiniteMovingCards items={languages} speed="normal" />
              </div>

              <div>
                <h3 className="text-center text-xl text-white/80 mb-4">
                  Frameworks & Technologies
                </h3>
                <InfiniteMovingCards
                  items={frameworks}
                  direction="right"
                  speed="normal"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience Section Start */}
      <div className="container flex flex-col justify-center mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight py-6 text-center">
          Work Timeline
        </h2>
        <div>
          <h3 className="text-center text-xl text-white/80 mb-4">
            A brief overview of my professional experience and project
            milestones.
          </h3>
        </div>
        <Timeline items={timelineItems} />
      </div>
      {/* Experience Section End */}

      {/*Project Section*/}
      <ProjectsSection />

      {/*Footer*/}

      <section className="bg-secondary">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center -mx-5 -my-2">
            <h1 className="text-lg md:text-lg font-bold tracking-tight">
              Jomari M. Profeta
            </h1>
          </div>

          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://ph.linkedin.com/in/jomari-profeta-693417231"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
            <a
              href="https://github.com/25Kanon/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="mailto:jprofeta000@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 J.Profeta. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
