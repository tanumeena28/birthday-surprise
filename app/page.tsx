"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import SurprisePage from "./surprise/page"

export default function HomePage() {
  const [showSurprise, setShowSurprise] = useState(false)

  if (showSurprise) {
    return <SurprisePage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0.7,
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <Heart size={Math.random() * 20 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          {/* Sparkles Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="mb-8 flex justify-center"
          >
            <Sparkles size={60} className="text-rose-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6"
          >
            Happy Birthday Divu! 🎂
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-3xl text-rose-700 mb-8 font-medium"
          >
            My heart has a special surprise for you...
          </motion.p>

          {/* Animated Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mb-12"
          >
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-xl text-rose-600 mb-4"
            >
              💕 My dearest Divyansh Kumar, get ready for chhota sa surprise! 💕
            </motion.p>
            <p className="text-lg text-rose-500">Close your eyes, my love, make a wish, and click below...</p>
          </motion.div>

          {/* Reveal Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              onClick={() => setShowSurprise(true)}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-6 text-xl font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:shadow-rose-300/50 w-64 h-16 flex items-center justify-center"
            >
              <Gift className="mr-3" size={22} />
              Reveal Surprise
              <Heart className="ml-3" size={22} fill="currentColor" />
            </Button>
          </motion.div>

          {/* Bottom Hearts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-12 flex justify-center space-x-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              >
                <Heart size={30} className="text-rose-400" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
