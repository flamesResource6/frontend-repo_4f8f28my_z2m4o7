import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="relative mx-auto flex h-[62vh] w-full max-w-6xl items-center justify-center">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
          >
            1st-Word — The Future of Human Expression Begins Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-blue-200/80"
          >
            A neuro-AI interface that transforms thought and emotion into voice. Minimal. Futuristic. Alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#science" className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20">
              <span>Explore the Science</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="#funding" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,.25)] transition hover:brightness-110">
              Request Funding / Partnership
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero3D
