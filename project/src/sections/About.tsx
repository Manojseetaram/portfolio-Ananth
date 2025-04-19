import { Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
              alt="Profile"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience in 3D art and animation, I've had the privilege of working on diverse
              projects ranging from feature films to video games. My passion lies in creating compelling visual
              experiences that push the boundaries of digital artistry.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">AAA Game Titles</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Client Testimonials</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-muted-foreground">Lead Character Artist at AAA Game Studio (2020-Present)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-muted-foreground">Senior 3D Artist at Major Animation Studio (2015-2020)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-muted-foreground">Certified Instructor for Major 3D Software Platforms</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
