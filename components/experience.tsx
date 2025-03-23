"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  company: string
  role: string
  date: string
  description: string
  techStack: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Quantumverse AI",
    role: "Software Development Engineer",
    date: "Jan 2025 - Present",
    description: "Refactored Python code in iterations to improve performance and enhance platform efficiency by 50%, while designing and implementing a persistent caching solution from start to finish, reducing calls to the downstream API by 95%. Additionally, developed and maintained AWS Lambda functions to manage backend processes and conducted comprehensive API unit testing using Postman, ensuring enhanced reliability and functionality of system integrations by 100%.",
    techStack: ["Astro", "Python","AWS Lambda", "Postman", "API"]
  },
  {
    company: "Next Enti",
    role: "Co-Founder & Technical Lead",
    date: "Present",
    description: "Co-founded and led as the front end developerof an innovative SaaS platform." ,
    techStack: ["React", "Python", "LLM", "Postman", "Firebase", "Render", "MUI",]
  },
  {
    company: "Capgemini",
    role: "Graduate Engineer Intern",
    date: "Jan 2023 - July 2023",
    description: "Developed a real-time E-commerce platform using the MERN stack, RESTful API, and SQL databases, serving 1,000+ unique visitors and boosting user retention by 20%, while leveraging strong problem-solving skills. Designed responsive and user-friendly front-end components with React.js, enhancing user engagement by 15%, and managed MongoDB databases to handle 10,000+ daily financial transactions with zero inconsistencies. Additionally, developed Fintech features using Node.js and MongoDB, including user authentication and transaction management, increasing system reliability by 25%.",
    techStack: ["MERN", "RESTful API", "SQL"]
  },
  // Add more experiences as needed
]

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 overflow-hidden bg-primary/10 flex items-center justify-center rounded-sm">
                          <img 
                            src={
                              exp.company === "Quantumverse AI" ? "/QAI.jpeg" : 
                              exp.company === "Next Enti" ? "/logot.png" :
                              exp.company === "Capgemini" ? "/CL.jpg" : ""
                            }
                            alt={`${exp.company} Logo`}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          <p className={`text-sm ${exp.company === "Next Enti" ? "text-purple-500 font-medium" : "text-muted-foreground"}`}>{exp.role}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.date}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 