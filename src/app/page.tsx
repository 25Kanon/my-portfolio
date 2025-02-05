'use client';

import { ThemeToggle } from "./components/theme-toggle"
import { MobileNav } from "./components/mobile-nav"
import { FloatingDock } from "./components/floating-dock";
import { InfiniteMovingCards } from './components/expertise';
import { Vortex } from "./components/vortex";
import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link"
import Image from "next/image"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconAt,
} from "@tabler/icons-react";


export default function Home() {


  const links = [
    {
      title: "Email",
      icon: (
          <IconAt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
          <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  const languages = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  ];

  const frameworks = [
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  ];
  return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="md:hidden">
              <MobileNav/>
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
                  href="#contact"
                  className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            <div className="flex flex-1 items-center justify-center">
              <Link href="/" className="text-xl font-bold">
                J. Profeta
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <ThemeToggle/>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi I'm Jomari
                <br/>
                <span className="text-primary">
                  <Highlight>
                    Full Stack Developer
                  </Highlight>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Creating solutions that work — beautifully
              </p>
              <div className="flex">
                <FloatingDock
                    mobileClassName="translate-y-30"
                    items={links}
                />
              </div>
            </div>
            <div className="relative aspect-square px-2">
              <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse"/>
              <Image
                  src="/placeholder-avatar.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full p-4"
                  priority
              />
            </div>
          </div>

        </section>

        <div className="h-wrap w-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-3">
          <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="container flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight py-6">
                Expertise
              </h2>
              <div className="flex flex-col w-full">
                <div>
                  <h3 className="text-center text-xl text-white/80 mb-4">Programming Languages</h3>
                  <InfiniteMovingCards items={languages} speed="normal"/>
                </div>

                <div>
                  <h3 className="text-center text-xl text-white/80 mb-4">Frameworks & Technologies</h3>
                  <InfiniteMovingCards
                      items={frameworks}
                      direction="right"
                      speed="normal"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}