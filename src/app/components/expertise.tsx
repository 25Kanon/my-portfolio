import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ExpertiseCard = ({ name, icon }: { name: string; icon: string }) => {
    return (
        <div className="relative h-32 w-52 flex-shrink-0">
            <div className="h-full w-full bg-black/5 dark:bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center">
                <img src={icon} alt={name} className="w-12 h-12 mb-2" />
                <p className="dark:text-white/80 text-black/80 font-medium">{name}</p>
            </div>
        </div>
    );
};

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        className,
                                    }: {
    items: { name: string; icon: string }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLDivElement>(null);

    const speedMap = {
        fast: 30,
        normal: 50,
        slow: 70,
    };

    React.useEffect(() => {
        addAnimation();
    }, []);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            const keyframes = {
                transform: [
                    'translateX(0%)',
                    `translateX(${direction === "left" ? "-50%" : "50%"})`,
                ],
            };

            const scrollerAnimation = scrollerRef.current.animate(keyframes, {
                duration: speedMap[speed] * 1000,
                iterations: Infinity,
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <div
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full gap-4 py-4",
                    direction === "left" ? "animate-scroll" : "animate-scroll-reverse"
                )}
            >
                {items.map((item, idx) => (
                    <ExpertiseCard key={item.name + idx} {...item} />
                ))}
            </div>
        </div>
    );
};