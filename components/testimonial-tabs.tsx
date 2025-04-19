"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, Award, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  companyUrl?: string
  avatar: string
  content: string
  icon: React.ElementType
  logo?: string
}

const testimonials: Testimonial[] = [
  {
    id: "vithsutra",
    name: "Vithsutra Team",
    role: "Product Development",
    company: "Vithsutra Technologies Pvt. Ltd.",
    companyUrl: "https://www.vithsutra.com/",
    avatar: "/placeholder.svg?height=100&width=100&text=VI",
    content:
      "Ananth designed our product and created a stunning 3D model and animation for our marketing materials. The attention to detail and quality of work exceeded our expectations and helped us effectively showcase our product to potential customers.",
    icon: Trophy,
    logo: "/images/vi.png",
  },
  {
    id: "medical",
    name: "Dr. Michael Chen",
    role: "Head of Research",
    company: "Medical Systems Inc",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The medical visualizations created were both scientifically accurate and visually stunning. These 3D models have significantly enhanced our educational materials and helped medical students better understand complex anatomical structures.",
    icon: Star,
  },
  {
    id: "architecture",
    name: "Robert Smith",
    role: "Principal Architect",
    company: "Architecture Firm",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Transformed our architectural concepts into photorealistic masterpieces. The attention to lighting, materials, and environmental details brought our designs to life in ways that impressed both our team and our clients.",
    icon: Award,
  },
  {
    id: "film",
    name: "Emily Davis",
    role: "VFX Supervisor",
    company: "Film Productions",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Outstanding contribution to our VFX pipeline. The character models and animations integrated seamlessly with our live-action footage. A true professional who understands both the technical and artistic aspects of film production.",
    icon: Medal,
  },
]

export function TestimonialTabs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>

        <Tabs defaultValue="vithsutra" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            {testimonials.map((testimonial) => {
              const Icon = testimonial.icon
              return (
                <TabsTrigger key={testimonial.id} value={testimonial.id} className="flex flex-col items-center py-4">
                  <Icon className="h-6 w-6 mb-2" />
                  <span className="text-xs">{testimonial.company.split(" ")[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {testimonials.map((testimonial) => (
            <TabsContent key={testimonial.id} value={testimonial.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{testimonial.company}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                    {testimonial.logo && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.company} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-xl italic text-muted-foreground">"{testimonial.content}"</blockquote>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {testimonial.companyUrl && (
                    <Button variant="outline" asChild>
                      <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
