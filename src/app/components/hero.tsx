import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="container px-4 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Hi, I'm Your Name
                        <br/>
                        <span className="text-primary">Full Stack Developer</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        I build exceptional and accessible digital experiences for the web.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
                <div className="relative aspect-square">
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
    );
}