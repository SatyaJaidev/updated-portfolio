"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "nsatyajaidev21@gmail.com",
      link: "mailto:nsatyajaidev21@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+1 (312) 684-1792",
      link: "tel:+13126841792",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "United States",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-white border-white/20">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-black/50 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">{info.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-white">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-white/70 hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/70">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="mt-8 bg-black/50 border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                      <a href="http://www.linkedin.com/in/satyajaidev" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                      <a href="https://github.com/SatyaJaidev" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                      <a href="mailto:nsatyajaidev21@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

