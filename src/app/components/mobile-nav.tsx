import { Sheet, SheetContent, SheetTrigger } from "./sheet"
import { Button } from "./button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
                <nav className="flex flex-col items-center justify-center space-y-8 h-full">
                    <Link
                        href="#about"
                        className="text-2xl font-medium transition-colors hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        className="text-2xl font-medium transition-colors hover:text-primary"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-2xl font-medium transition-colors hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}