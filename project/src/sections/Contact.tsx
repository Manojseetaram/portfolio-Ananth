"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Palette, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", message: "" }
    let formIsValid = true

    if (!formData.name) {
      newErrors.name = "Name is required."
      formIsValid = false
    }
    if (!formData.email) {
      newErrors.email = "Email is required."
      formIsValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      formIsValid = false
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required."
      formIsValid = false
    }
    if (!formData.message) {
      newErrors.message = "Message is required."
      formIsValid = false
    }

    setErrors(newErrors)
    return formIsValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatusMessage(null)
    setErrors({ name: "", email: "", phone: "", message: "" })

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const data = await sendEmail(formData)

      setFormData({ name: "", email: "", phone: "", message: "" })
      setStatusMessage(data.message || "Message sent successfully!")
      setIsSuccess(true)
    } catch (err: any) {
      console.error("Error sending email:", err)
      setStatusMessage(err.message || "There was an issue sending your message.")
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind or just want to chat about 3D art, I'm always excited to connect with
                fellow creators and potential clients.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://artstation.com" target="_blank" rel="noopener noreferrer">
                  <Palette className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                  <ImageIcon className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 890"
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                </Button>
              </form>

              {statusMessage && (
                <div className="mt-4 text-center">
                  <p className={isSuccess ? "text-green-500" : "text-red-500"}>
                    {statusMessage}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
