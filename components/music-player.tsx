"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3) // Start with low volume
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Auto-play when component mounts (with user interaction)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = volume
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Audio playback failed:", error)
          })

        // Remove event listeners after first interaction
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      }
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [])

  // Update audio volume when volume state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/audio/romantic-background.mp3" loop />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-rose-200"
      >
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <div className="flex items-center gap-2">
          <Heart className="text-rose-500" size={16} fill="currentColor" />
          <span className="text-sm font-medium text-rose-700 whitespace-nowrap">
            {isPlaying ? "Our Love Song" : "Play Music"}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
          className="w-20 h-1 accent-rose-500"
        />
      </motion.div>
    </div>
  )
}
