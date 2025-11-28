import "./../styles/navbar.css"
import { Heart } from "lucide-react"
import Link from "next/link"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Heart className="h-6 w-6 cora" />
                    <span className="text-xl font-bold text-foreground">DecorazonJoss</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="/#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                        Servicios
                    </a>
                    <Link
                        href="/portfolio"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        Decoraciones
                    </Link>
                    <a href="/#gallery" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                        Sobre Mi
                    </a>
                    <a
                        href="/#testimonials"
                        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                        Contactame
                    </a>
                </nav>

                <button className="btn-calendly">Book Now</button>
            </div>
        </header>
    )
}
