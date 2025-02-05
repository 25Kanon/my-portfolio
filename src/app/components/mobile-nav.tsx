import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./sheet"
import { Button } from "./button"
import { Menu } from "lucide-react"
import Link from "next/link"
import {ColourfulText} from "./colorful-text";

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
                        <SheetClose>
                            About
                        </SheetClose>
                    </Link>
                    <Link
                        href="#projects"
                        className="text-2xl font-medium transition-colors hover:text-primary"
                    >
                        <SheetClose>
                            Projects
                        </SheetClose>
                    </Link>
                    <Link
                        href="mailto:jprofeta000@gmail.com"
                        className="text-2xl font-medium transition-colors hover:text-primary"
                    >
                        <SheetClose>
                            <ColourfulText text="Contact" />
                        </SheetClose>

                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}