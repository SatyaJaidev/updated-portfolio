"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY

interface Message {
  content: string
  role: "user" | "assistant"
  timestamp: string
}

// System message to define ChatGPT's behavior
const systemMessage = {
  role: "system",
  content: "You are Satya Jaidev's AI assistant embedded in his portfolio website. You should help visitors learn about his skills, experience, and projects. Keep your responses concise, professional, and focused on my professional background.",
}

const formatTimestamp = () => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Set initial message only on client side
    setMessages([
      {
        content: "Hello! I'm Satya Jaidev's assistant. Ask me anything about his skills, experience, or projects!",
        role: "assistant",
        timestamp: formatTimestamp(),
      },
    ])
  }, [])

  const handleSend = async () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      content: inputMessage,
      role: "user",
      timestamp: formatTimestamp(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            systemMessage,
            ...messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: "user", content: inputMessage },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      })

      const data = await response.json()

      const aiResponse: Message = {
        content: data.choices[0]?.message?.content || "I couldn't process that request.",
        role: "assistant",
        timestamp: formatTimestamp(),
      }

      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        content: "Sorry, I encountered an error. Please try again later.",
        role: "assistant",
        timestamp: formatTimestamp(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <section id="chat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Chat
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chat with my personalized AI assistant</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`max-w-[80%] ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        } rounded-lg p-4`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <div className="flex gap-2 mt-4">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                />
                <Button onClick={handleSend}>Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 