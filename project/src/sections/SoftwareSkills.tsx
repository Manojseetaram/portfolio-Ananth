"use client"

import type React from "react"
import { useState } from "react"
import { CuboidIcon as Cube, Brush, Box, Layers, Gamepad2, Camera, Palette, Wand2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

interface Software {
  name: string
  icon: React.ElementType
  proficiency: number
  category: string
  description: string
}

const software: Software[] = [
  {
    name: "Maya",
    icon: Cube,
    proficiency: 95,
    category: "3D Modeling",
    description: "Advanced character rigging and animation",
  },
  {
    name: "Blender",
    icon: Box,
    proficiency: 90,
    category: "3D Modeling",
    description: "Organic modeling and sculpting",
  },
  {
    name: "Substance Painter",
    icon: Palette,
    proficiency: 88,
    category: "Texturing",
    description: "PBR texturing and materials",
  },
  {
    name: "After Effects",
    icon: Camera,
    proficiency: 92,
    category: "Video Editing",
    description: "Compositing",
  },
  {
    name: "Adobe Illustrator",
    icon: Painter,
    proficiency: 82,
    category: "Real-time",
    description: "Real-time visualization",
  },
]

export function SoftwareSkills() {
  const [hoveredSoftware, setHoveredSoftware] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Software Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {software.map((item) => {
            const Icon = item.icon
            const isHovered = hoveredSoftware === item.name

            return (
              <TooltipProvider key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card
                      className={`relative transition-all duration-300 ${isHovered ? "scale-105 shadow-lg" : ""}`}
                      onMouseEnter={() => setHoveredSoftware(item.name)}
                      onMouseLeave={() => setHoveredSoftware(null)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-6 h-6 ${isHovered ? "text-foreground" : "text-muted-foreground"}`} />
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                          </div>
                          <span className="text-sm font-medium">{item.proficiency}%</span>
                        </div>

                        {/* Progress Bar */}
                        <Progress
                          value={isHovered ? item.proficiency : 0}
                          className="h-2 transition-all duration-500"
                          style={{ transitionDelay: "150ms" }}
                        />

                        {/* Category Tag */}
                        <div className="mt-4">
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>{item.description}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </div>
      </div>
    </section>
  )
}
