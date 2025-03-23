"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="education" className="py-20">
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
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={scaleUp}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 overflow-hidden bg-primary/10 flex items-center justify-center rounded-sm">
                    <img 
                      src="/iit.png" 
                      alt="IIT Logo" 
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Illinois Institute of Technology</h3>
                    <p className="text-sm text-muted-foreground">Master's in Computer Science (M.S.)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Chicago, Illinois</p>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">2023 - 2025</p>
                    <p className="text-sm text-muted-foreground">GPA: 3.22/4.00</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Big Data Technologies (AWS)</Badge>
                    <Badge variant="secondary">Software Project Management</Badge>
                    <Badge variant="secondary">User Centric Design</Badge>
                    <Badge variant="secondary">Advance Database Organization</Badge>
                    <Badge variant="secondary">Data Preparation Analysis</Badge>
                    <Badge variant="secondary">Computer Networks</Badge>
                    <Badge variant="secondary">Mobile Application Development</Badge>
                    <Badge variant="secondary">Information Retrieval</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={scaleUp}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 overflow-hidden bg-primary/10 flex items-center justify-center rounded-sm">
                    <img 
                      src="/presi.jpg" 
                      alt="Presidency Logo" 
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Presidency University</h3>
                    <p className="text-sm text-muted-foreground">Bachelor of Technology (B.Tech)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Bangalore, Karnataka</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">2019 - 2023</p>
                    <p className="text-sm text-muted-foreground">GPA: 3.80/4.00</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Operating Systems</Badge>
                    <Badge variant="secondary">Database Management System</Badge>
                    <Badge variant="secondary">Object Oriented Programming</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Web Technologies</Badge>
                    <Badge variant="secondary">Automate Theory</Badge>
                    <Badge variant="secondary">Natural Language Processing (NLP)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Strong academic foundation with a focus on computer science and engineering principles,
            complemented by hands-on experience in modern technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 