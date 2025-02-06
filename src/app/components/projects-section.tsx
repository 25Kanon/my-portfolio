import React from 'react';
import { BentoGrid, BentoGridItem } from './bento-grid';
import eo from "../assets/eo.png"
import fm from "../assets/fm.png"
import ss from "../assets/ss.png"


const projects = [
    {
        title: "Synapse-Space",
        description: "A web application for organizing activities that foster engagement and interaction. It features a hybrid recommendation system using sentence transformers, combining collaborative filtering and content-based recommendations, along with NLP-based content moderation. Engagement and analytics tools track user interactions and community activity for insightful data analysis.",
        image:  ss.src,
        techStack: ["React.js", "Django", "Scikit Learn", "PostgreSQL"],
        repoUrl: "https://github.com/25Kanon/Synapse-Space"
    },
    {
        title: "Espresso Oasis",
        description: "The Espresso Oasis website is a dynamic e-commerce platform built with a robust multi-role account system, enabling seamless management for users, administrators, super administrators, and attendants. Developed with modern web technologies, it features a secure purchasing interface, integrating PayMongo for card transactions and regional digital wallets like GCash and Maya. This project highlights expertise in web development, role-based access control, and payment gateway integration to deliver a streamlined user experience.",
        image: eo.src,
        techStack: ["Laravel", "MySQL", "Paymongo"],
        repoUrl: "https://github.com/HoshikawaShiori/EspressoOasis"
    },
    {
        title: "FoodMark",
        description: "Foodmark is a mobile Android app for bookmarking and storing favorite food spots. It uses Firebase Realtime Database for real-time data synchronization and Mapbox Maps SDK for an intuitive map interface. The app serves as a personal food location library for users." ,
        image: fm.src,
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