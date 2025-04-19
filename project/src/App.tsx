import { ThemeProvider } from "./components/theme-provider"
import { Navbar } from "./sections/Navbar"
import { Hero } from "./sections/Hero"
import { WhatIDo } from "./sections/WhatIDo"
import { Portfolio } from "./sections/Portfolio"
import { SoftwareSkills } from "./sections/SoftwareSkills"
import { Expertise } from "./sections/Expertise"
import { Clients } from "./sections/Clients"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <WhatIDo />
        <Portfolio />
        <SoftwareSkills />
        <Expertise />
        <Clients />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
