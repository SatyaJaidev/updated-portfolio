"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket, Brain, Users, Globe } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's unique about me?</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-semibold mb-2">Chameleon</h4>
                        <Dialog>
                          <DialogTrigger asChild>
                            <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                              Proven
                            </span>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle className="sr-only">Chameleon Details</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  <p>While working at Quantumverse AI, I was tasked with rebuilding existing components using the Astro web framework, a technology I had never encountered before. With little time and no prior knowledge of Astro, I had no choice but to dive in, learn it quickly, and successfully deliver the required project within the tight deadline.</p>
                                </ul>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <p className="text-muted-foreground">
                      I swiftly adapted to the current requirements to effectively meet the task's needs.
                      </p>
                    </div>
                  </div>
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
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold mb-2">Versatility</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                                Proven
                              </span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle className="sr-only">Versatility Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <p>I applied my skills across various industries, including corporate, architecture, universities, and fintech. At just 17, I developed an architectural website for my dad using Wix, which pushed me to think beyond my formal training. Later, I was involved in Gen-AI application, adapting my expertise to new challenges and industries. By embracing a multi-hat approach, I was able to view problems from different perspectives, allowing me to adapt quickly and contribute effectively across multiple domains.</p>
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-muted-foreground">
                        Applied my skills across various industries by embracing a multi-faceted perspective beyond my formal training.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold mb-2">Tony Stark</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                                Proven
                              </span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle className="sr-only">Tony Stark Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <li>I believe that mastering the basics and leveraging AI to streamline tasks is the key to success — you don't need to dive deep into every skill, but you must be smart enough to use AI to accelerate accurate results while continuing to learn and grow.</li>
                                    <li>For a university project, I was tasked with creating a project planner that could estimate timelines, technician requirements, and waste production. Instead of doing everything manually, I developed an AI agent that generated project plans based on any field entered.</li>
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-muted-foreground">
                          I may not have a cave, but I leverage AI smartly to ensure accuracy, efficiency, and continuous learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold mb-2">Users' Shoes</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                                Proven
                              </span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle className="sr-only">Users' Shoes Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <p className="text-muted-foreground">
                                    In building the 'Next Enti' app, after several iterations, I stayed committed to prioritizing user comfort and a streamlined experience. We aimed to make the features intuitive and engaging, incorporating interactive elements without overwhelming the user, ensuring the app was both functional and enjoyable to use without relying on excessive animations.
                                  </p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-muted-foreground">
                         I focus on what the user truly needs, rather than what is just attractive or aesthetically pleasing.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                                Proven
                              </span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <p>I believe clean code is essential for long-term success, as I've seen how well-organized and well-commented code makes collaboration smoother. In my projects, I make sure to write code that is easy to follow and modify, which not only improves efficiency but also reduces the likelihood of bugs and errors when others work on the code. </p>
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-muted-foreground">
                        Writing clean code is not just about making it work; it's about making it readable, maintainable, and efficient for future developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold mb-2">HATKE</h4>
                          <Dialog>
                            <DialogTrigger asChild>
                              <span className="text-purple-500 underline cursor-pointer hover:text-purple-600 transition-colors text-sm">
                                Proven
                              </span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle className="sr-only">HATKE Details</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    <p>All of this combined is what makes me 'Hatke'.</p>
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <p className="text-muted-foreground">
                        'Hatke' is an Indian term that means thinking "out of the box" - approaching things in a unique, unconventional way."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

