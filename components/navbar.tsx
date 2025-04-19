"use client"

import { useState, useEffect } from "react"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CommandMenu } from "@/components/command-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)

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
          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent"
              >
                Portfolio
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Ananth R Kulkarni</h4>
                  <p className="text-sm">
                    3D Generalist with over 10 years of experience in character design, environment art, and visual
                    effects.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">Explore my portfolio</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <TooltipProvider>
              {["Home", "Work", "Skills", "About"].map((item) => (
                <Tooltip key={item}>
                  <TooltipTrigger asChild>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group relative px-2 py-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground/50 transition-all duration-300 delay-100 group-hover:w-full"></span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View {item}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>

            {/* Contact Button with Continuous Reflection Animation */}
            <Button
              asChild
              variant="outline"
              className="relative border-foreground/20 hover:border-foreground/50 overflow-hidden"
            >
              <a href="#contact">
                Contact
                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine-continuous" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setIsCommandOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
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
                <Button asChild className="mt-2 relative overflow-hidden group">
                  <a href="#contact">
                    Contact
                    <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine-continuous" />
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CommandMenu open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </nav>
  )
}
