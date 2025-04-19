"use client"

import { useState } from "react"
import { X, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  detailImages: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sci-Fi Character Design",
    category: "Character Art",
    description:
      "A futuristic character design created for a AAA game project. The character features highly detailed armor with intricate mechanical parts and dynamic pose capabilities.",
    tags: ["Character Modeling", "Texturing", "Rigging"],
    image: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1599148401013-427d41cb8fce?q=80&w=800",
      "https://images.unsplash.com/photo-1599148400934-19dc5f3d7df2?q=80&w=800",
    ],
  },
  {
    id: 2,
    title: "Modern Interior Visualization",
    category: "Architectural",
    description:
      "High-end interior visualization for a luxury residential project. Focus on realistic lighting, materials, and atmospheric quality.",
    tags: ["Interior Design", "Lighting", "Materials"],
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=800",
      "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=800",
    ],
  },
  {
    id: 3,
    title: "Product Animation",
    category: "Product Viz",
    description:
      "Dynamic product animation showcasing the features and design elements of a high-end consumer electronics device.",
    tags: ["Animation", "Product Design", "Lighting"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=800",
      "https://images.unsplash.com/photo-1617791160523-401b50bf9a9c?q=80&w=800",
    ],
  },
  {
    id: 4,
    title: "Fantasy Environment",
    category: "Environment Art",
    description:
      "Immersive fantasy environment created for a major gaming studio. Features complex architecture and rich environmental storytelling.",
    tags: ["Environment Design", "Lighting", "Texturing"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1618005198784-45c3c6d18131?q=80&w=800",
      "https://images.unsplash.com/photo-1618005198693-d6bc9f9c5022?q=80&w=800",
    ],
  },
  {
    id: 5,
    title: "Character Animation",
    category: "Character Art",
    description: "Complex character animation sequence demonstrating emotional range and physical dynamics.",
    tags: ["Animation", "Rigging", "Motion Design"],
    image: "https://images.unsplash.com/photo-1599148400621-a944b90c8ec9?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1599148400935-67b6f6fddf33?q=80&w=800",
      "https://images.unsplash.com/photo-1599148401014-7f38b4d0f8bf?q=80&w=800",
    ],
  },
  {
    id: 6,
    title: "Medical Visualization",
    category: "Product Viz",
    description: "Detailed medical device visualization with focus on technical accuracy and educational value.",
    tags: ["Technical Design", "Animation", "Visualization"],
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=800",
    detailImages: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800",
      "https://images.unsplash.com/photo-1617791160523-401b50bf9a9c?q=80&w=800",
    ],
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

        {/* Category Filter */}
        <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="flex flex-wrap justify-center h-auto bg-transparent p-0 gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`px-6 py-2 rounded-full transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
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

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-card">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>

            {selectedProject && (
              <div className="p-0">
                {/* Main Image */}
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />

                {/* Project Details */}
                <div className="space-y-6">
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

                  {/* Additional Images */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Process & Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.detailImages.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProject.title} detail ${index + 1}`}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                      ))}
                    </div>
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
