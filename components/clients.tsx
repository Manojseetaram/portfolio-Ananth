"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Trophy, Star, Award, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Client {
  name: string
  logo: React.ElementType
  testimonial?: {
    text: string
    author: string
    role: string
  }
}

const clients: Client[] = [
  {
    name: "Game Studio X",
    logo: Trophy,
    testimonial: {
      text: "Exceptional attention to detail in character modeling. Delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "Art Director",
    },
  },
  {
    name: "Medical Systems Inc",
    logo: Star,
    testimonial: {
      text: "The medical visualizations created were both accurate and visually stunning.",
      author: "Dr. Michael Chen",
      role: "Head of Research",
    },
  },
  {
    name: "Architecture Firm",
    logo: Award,
    testimonial: {
      text: "Transformed our architectural concepts into photorealistic masterpieces.",
      author: "Robert Smith",
      role: "Principal Architect",
    },
  },
  {
    name: "Film Productions",
    logo: Medal,
    testimonial: {
      text: "Outstanding contribution to our VFX pipeline. A true professional.",
      author: "Emily Davis",
      role: "VFX Supervisor",
    },
  },
]

export function Clients() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % clients.length)
      }, 5000)
    }
    return () => clearInterval(autoplayRef.current)
  }, [isAutoplay])

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Trusted By</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Client Logos */}
          <div className="grid grid-cols-2 gap-8">
            {clients.map((client, index) => {
              const Logo = client.logo
              const isActive = index === activeIndex

              return (
                <Card
                  key={client.name}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive ? "ring-2 ring-primary shadow-lg" : ""
                  }`}
                  onMouseEnter={() => {
                    setIsAutoplay(false)
                    setActiveIndex(index)
                  }}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <Logo className={`w-16 h-16 mb-4 ${isActive ? "text-foreground" : "text-muted-foreground"}`} />
                      <h3 className="text-lg font-semibold">{client.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Testimonials */}
          <Card>
            <CardContent className="p-8">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className={`transition-all duration-500 ${
                    index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"
                  }`}
                  style={{ display: index === activeIndex ? "block" : "none" }}
                >
                  <blockquote className="text-xl text-muted-foreground italic mb-6">
                    "{client.testimonial?.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="font-semibold">{client.testimonial?.author}</p>
                      <p className="text-sm text-muted-foreground">{client.testimonial?.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
