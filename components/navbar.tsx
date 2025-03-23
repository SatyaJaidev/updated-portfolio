"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Why me?", href: "about" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Projects", href: "projects" },
    { name: "Chat", href: "chat" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="text-2xl font-bold text-primary">
            Portfolio<span className="text-destructive"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#tech-stack" className="text-sm font-medium hover:text-primary transition-colors">
              Tech Stack
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#chat" className="text-sm font-medium hover:text-primary transition-colors">
              Chat
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button
              variant="secondary"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open('/Satya Jaidev N.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="secondary"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('/Satya Jaidev N.pdf', '_blank')}
              >
                Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

