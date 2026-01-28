"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, Lightbulb, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Dynamically import 3D components to avoid SSR issues
const FloatingCube = dynamic(
  () => import("@/components/floating-cube").then((mod) => mod.FloatingCube),
  { ssr: false, loading: () => <div className="h-[280px] sm:h-[320px]" /> }
)

const ParticleField = dynamic(
  () => import("@/components/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function GenZLanding() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0057B8] via-[#00B5AD] to-[#0057B8] relative overflow-hidden">
      {/* 3D Particle Background */}
      {isClient && (
        <Suspense fallback={null}>
          <ParticleField count={80} color="#ffffff" className="opacity-60" />
        </Suspense>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-[#C3D534]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#F7E73F]/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Zain Pattern */}
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] opacity-20">
          <Image
            src="/images/zain-pattern-bubbles.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div variants={itemVariants}>
              <Image
                src="/images/genz-logo.svg"
                alt="Gen Z Program"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8 object-contain"
                priority
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6"
            >
              Generation Z
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#C3D534] mb-4 sm:mb-6"
            >
              11th Edition | 2026
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
            >
              Empowering the next generation of leaders at Zain through hands-on experience in leadership, innovation, and continuous learning.
            </motion.p>
          </div>

          {/* Program Card with 3D Cube */}
          <motion.div variants={cardVariants}>
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                {/* 3D Floating Cube - Interactive Element */}
                <div className="w-full lg:w-auto lg:flex-shrink-0 order-2 lg:order-1">
                  {isClient ? (
                    <Suspense fallback={<div className="h-[280px] sm:h-[320px]" />}>
                      <FloatingCube
                        href="/reframe"
                        label="Click to Explore"
                        color="#C3D534"
                        emissiveColor="#C3D534"
                        className="w-full max-w-[300px] mx-auto lg:w-[280px]"
                      />
                    </Suspense>
                  ) : (
                    <div className="h-[280px] sm:h-[320px]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      REFRAME
                    </h2>
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#C3D534]/20 border border-[#C3D534]/40 text-[#C3D534] text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      ACTIVE NOW
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    A learning series empowering colleagues to rethink, reset, and drive meaningful change. Starting with Dan Heath&apos;s transformative book &quot;Reset.&quot;
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#C3D534] to-[#00B5AD] text-[#1E1A5F] font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg hover:shadow-xl hover:shadow-[#C3D534]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Link href="/reframe" className="inline-flex items-center gap-2">
                        Explore Reframe
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto glass-button border-white/30 text-white bg-transparent hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold"
                    >
                      <Link href="/reframe#register">Register Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            variants={containerVariants}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              {
                icon: Users,
                color: "text-[#C3D534]",
                title: "Community Learning",
                description: "Connect with colleagues passionate about growth and innovation",
              },
              {
                icon: Lightbulb,
                color: "text-[#F7E73F]",
                title: "Innovation Focus",
                description: "Drive meaningful change through structured learning experiences",
              },
              {
                icon: BookOpen,
                color: "text-[#00B5AD]",
                title: "Expert Content",
                description: "Learn from industry-leading books and transformative ideas",
                extraClass: "sm:col-span-2 lg:col-span-1",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center cursor-default",
                  item.extraClass
                )}
              >
                <item.icon className={cn("w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4", item.color)} />
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-sm sm:text-base text-white/70">
              Questions about the Gen Z Program?{" "}
              <a
                href="mailto:generationz@zain.com"
                className="text-[#C3D534] hover:text-[#F7E73F] underline transition-colors"
              >
                generationz@zain.com
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
