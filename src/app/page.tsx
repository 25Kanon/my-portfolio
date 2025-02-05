'use client';

import { ThemeToggle } from "./components/theme-toggle"
import { MobileNav } from "./components/mobile-nav"
import { FloatingDock } from "./components/floating-dock";
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
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi I'm Jomari
                <br />
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" />
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
      </div>
  )
}