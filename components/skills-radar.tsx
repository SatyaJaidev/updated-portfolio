"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

interface Skill {
  name: string
  level: number
}

interface SkillsRadarProps {
  skills: Skill[]
  title: string
  onClose: () => void
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/90 backdrop-blur-sm p-2 rounded-md border shadow-md">
        <p className="font-medium">{payload[0].payload.name}</p>
        <p className="text-primary">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

export default function SkillsRadar({ skills, title, onClose }: SkillsRadarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-[700px] h-[700px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="w-full h-full bg-card shadow-lg">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-medium">{title} Skills</h4>
              <button
                onClick={onClose}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="85%" data={skills}>
                  <PolarGrid stroke="hsl(var(--muted-foreground)/0.2)" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: "hsl(var(--foreground))", fontSize: 16 }}
                    stroke="hsl(var(--muted-foreground)/0.2)"
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    stroke="hsl(var(--muted-foreground)/0.2)"
                    tick={{ fill: "hsl(var(--foreground))", fontSize: 14 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    animationDuration={1000}
                    animationEasing="ease-out"
                    isAnimationActive={true}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
} 