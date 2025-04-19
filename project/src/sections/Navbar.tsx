"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Work", "Skills", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative px-2 py-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground/50 transition-all duration-300 delay-100 group-hover:w-full"></span>
              </a>
            ))}
            <Button asChild variant="outline" className="border-foreground/20 hover:border-foreground/50">
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {["Home", "Work", "Skills", "About"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="group relative block py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-2 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-24"></span>
                    <span className="absolute bottom-1.5 left-0 w-0 h-px bg-foreground/50 transition-all duration-300 delay-100 group-hover:w-16"></span>
                  </a>
                ))}
                <Button asChild className="mt-2">
                  <a href="#contact">Contact</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
