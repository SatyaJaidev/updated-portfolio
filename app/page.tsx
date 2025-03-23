import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Chatbot from "@/components/chatbot"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My professional portfolio",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Chatbot />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

