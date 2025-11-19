import React from 'react'
import { motion } from 'framer-motion'

const features = [
  'Lightweight futuristic smart cap',
  'EEG sensors inside',
  'AI chip for decoding',
  'Built-in micro speaker',
  'Rechargeable battery',
  'Caregiver app',
  'Emotion detection',
  'Thought-to-speech output',
]

const Features3D = () => {
  return (
    <section id="features" className="relative w-full py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Product Features</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">Glowing, floating cards with subtle hover rotations.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ rotateX: 6, rotateY: -6, translateZ: 10 }}
              className="group relative aspect-[4/5] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="h-28 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{f}</h3>
                </div>
                <div className="text-blue-200/70 text-sm">Hover to rotate</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features3D
