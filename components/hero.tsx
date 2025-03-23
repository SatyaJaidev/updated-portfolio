/*
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary">Satya Jaidev</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Software Developer
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I build exceptional digital experiences with clean code and
              modern technologies. Turning complex problems into
              elegant solutions is what I do best.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-[300px] h-[700px] md:w-[400px] md:h-[700px]">
              <img
                src="/pict.png"
                alt="Satya Jaidev"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}




/*
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary">Satya Jaidev</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Software Developer
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I build exceptional digital experiences with clean code and
              modern technologies. Turning complex problems into
              elegant solutions is what I do best.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline">
                Contact Me
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="http://www.linkedin.com/in/satyajaidev" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/SatyaJaidev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:nsatyajaidev21@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-[300px] h-[700px] md:w-[400px] md:h-[700px]">
              <img
                src="/pict.png"
                alt="Satya Jaidev"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}

*/

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-16 pb-10 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-6xl font-bold mb-3">
              Hi, I&apos;m <span className="text-primary">Satya Jaidev</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Software Developer
            </h2>
            <p className="text-base md:text-lg mb-6">
              I build exceptional digital experiences with clean code and modern technologies.
              Turning complex problems into elegant solutions is what I do best.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline">
                Contact Me
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="http://www.linkedin.com/in/satyajaidev" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/SatyaJaidev" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:nsatyajaidev21@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-96 md:w-[400px] md:h-[700px]">
              <img
                src="/pict.png"
                alt="Satya Jaidev"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-1/2">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
