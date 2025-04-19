import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ananth R Kulkarni</h3>
            <p className="text-muted-foreground">
              Creating stunning 3D experiences and pushing the boundaries of digital artistry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
                Portfolio
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
                Services
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
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

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© {currentYear} Ananth R Kulkarni. All rights reserved.</p>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>by Ananth R Kulkarni</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
