"use client"

import { useState } from "react"
import { X, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  images?: string[]
  videos?: string[]
}

// Raw projects with duplicates
const rawProjects: Project[] = [
  {
    id: 1,
    title: "Sci-Fi Character Design",
    category: "Character Art",
    description: "A futuristic character design created for a AAA game project.",
    tags: ["Character Modeling", "Texturing", "Rigging"],
    images: ["https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?q=80&w=800"]
  },
 
   {
    id: 1,
    title: "Sci-Fi Character Design",
    category: "Character Art",
    description: "A futuristic character design created for a AAA game project.",
    tags: ["Character Modeling", "Texturing", "Rigging"],
    images: ["https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?q=80&w=800"]
  },
 
  {
    id: 2,
    title: "Ultimate Showcase",
    category: "Mixed Media",
    description: "A comprehensive project showing off 3D renders, animations, and product reels.",
    tags: ["3D", "Motion", "Product", "Mixed Media"],
    images: ["https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800", "/images/0.png"],
    videos: ["/video.mp4", "/video.mp4"]
  },
  {
    id: 3,
    title: "Product Animation",
    category: "Product Viz",
    description: "Dynamic product animation of a high-end consumer electronics device.",
    tags: ["Animation", "Product Design", "Lighting"],
    images: ["/images/0.png", "/images/2.png"],
    videos: ["/video.mp4"]
  },
 
]

// Remove duplicates by ID
const projects: Project[] = Array.from(
  new Map(rawProjects.map((proj) => [proj.id, proj])).values()
)

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer border-0 p-0"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                <img
                  src={project.images?.[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-white/70">{project.category}</p>
                  <div className="flex gap-2 mt-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-card">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogClose className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </DialogClose>
            </DialogHeader>

            {selectedProject && (
              <div className="p-0 space-y-6">
                {/* Media Preview */}
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.images?.map((image, i) => (
                    <img
                      key={`img-${i}`}
                      src={image}
                      alt={`Image ${i + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}

                  {selectedProject.videos?.map((video, i) => (
                    <video
                      key={`vid-${i}`}
                      controls
                      className="w-full h-64 object-cover rounded-lg"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">About the Project</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
