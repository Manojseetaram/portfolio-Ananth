"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import char from "../static/char.png"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const portfolioWorks = [
    {
      title: "Character Design",
      image: char,
    },
    {
      title: "Environment Art",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2000",
    },
    {
      title: "Product Visualization",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000",
    },
  ]

  useEffect(() => {
    const workInterval = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % portfolioWorks.length)
    }, 5000)

    return () => clearInterval(workInterval)
  }, [])

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    })

    const particlesArray = Array.from({ length: 50 }, createParticle)
    setParticles(particlesArray)

    const moveParticles = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed < 0 ? 100 : particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y / 30) * 0.3,
        })),
      )
    }, 50)

    return () => clearInterval(moveParticles)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Slideshow */}
      {portfolioWorks.map((work, index) => (
        <div
          key={work.title}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentWorkIndex === index ? 1 : 0,
            backgroundImage: `url(${work.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255, 255, 255, 0.3)`,
              transition: "all 0.05s linear",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
            Ananth R Kulkarni
          </span>
        </h1>
        <div className="text-4xl font-light mb-6 text-gray-300">3D Generalist</div>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Transforming Ideas into Stunning 3D Reality | Specializing in Character Design, Environment Art, and Visual
          Effects
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            View My Work
          </button>
          <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
