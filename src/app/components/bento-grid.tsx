import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image"

export interface BentoGridItemProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    repoUrl?: string;
    className?: string;
}

export function BentoGridItem({
                                  title,
                                  description,
                                  image,
                                  techStack,
                                  repoUrl,
                                  className,
                              }: BentoGridItemProps) {
    return (
        <div
            className={cn(
                "group relative col-span-1 row-span-1 overflow-hidden rounded-xl border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 p-4 transition-all duration-300 hover:bg-white/10",
                className
            )}
        >
            <div className="relative z-10 h-full w-full overflow-hidden rounded-xl">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                    <Image
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold  mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-full dark:bg-white/10 bg-black/10 px-3 py-1 text-sm dark:text-white/80 text-black/80"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                    <p className="text-sm dark:text-white/60 text-black/60 mb-4">{description}</p>
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg dark:bg-white/10 bg-black/10 px-4 py-2 text-sm font-medium dark:text-white light:text-black transition-colors dark:hover:bg-white/20 hover:bg-black/20"
                        >
                            View Repository
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function BentoGrid({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
}