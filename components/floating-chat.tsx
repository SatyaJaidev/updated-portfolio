"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MessageCircle, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Chatbot from "@/components/chatbot"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallPhone, setIsSmallPhone] = useState(false)

  // Add scroll-based animation
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100])

  // Check if the device is mobile and if it's a small phone
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsSmallPhone(width <= 375) // iPhone SE and similar small phones
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      {/* Floating Chat Button with Label */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none">
        {/* Show label only when chat is closed */}
        {!isOpen && (
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{ marginBottom: 4 }}
            className="pointer-events-auto bg-black/40 text-white font-medium px-2 py-0.5 rounded shadow-lg border border-purple-500 mb-1 flex items-center gap-1 backdrop-blur"
          >
            <span className="text-[15px] leading-tight">Chat with my assistant</span>
            {/* Custom down arrow image */}
            <img
              src="/icons8-down-arrow-48.png"
              alt="down arrow"
              className="h-3.5 w-3.5 ml-0.5"
              style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.15))" }}
            />
          </motion.div>
        )}

        {/* Static Chat Button */}
        <div className="pointer-events-auto">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="h-14 w-14 rounded-full shadow-lg"
            variant="default"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 bg-background rounded-lg shadow-xl border
              ${isMobile 
                ? 'bottom-20 right-3 left-3 h-[400px] sm:h-[500px]' 
                : 'bottom-24 right-6 w-[400px] h-[600px]'
              }`}
          >
            {/* Close button for mobile */}
            {isMobile && (
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            )}
            <Chatbot isMobile={isMobile} isSmallPhone={isSmallPhone} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}