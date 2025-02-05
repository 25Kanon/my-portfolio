import React from 'react';
import { BentoGrid, BentoGridItem } from './bento-grid';

const projects = [
    {
        title: "Synapse-Space",
        description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
        techStack: ["React.js", "Django", "Scikit Learn", "PostgreSQL"],
        repoUrl: "https://github.com/25Kanon/Synapse-Space"
    },
    {
        title: "Espresso Oasis",
        description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using state-of-the-art machine learning models.",
        image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?q=80&w=1000",
        techStack: ["Laravel", "MySQL"],
        repoUrl: "https://github.com/HoshikawaShiori/EspressoOasis"
    },
    {
        title: "FoodMark",
        description: "A collaborative task management system with real-time updates, team chat, and progress tracking features.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
        techStack: ["Kotlin", "Java" ,"Android Studio", "Firebase"],
        repoUrl: "https://github.com/HoshikawaShiori/foodMark"
    },

];

export default function ProjectsSection() {
    return (
        <section className="min-h-screen  py-20 px-4" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Featured Projects
                </h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Explore my portfolio of projects, showcasing expertise in full-stack development,
                    UI/UX design, and innovative problem-solving.
                </p>

                <BentoGrid>
                    {projects.map((project, index) => (
                        <BentoGridItem
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            techStack={project.techStack}
                            repoUrl={project.repoUrl}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}