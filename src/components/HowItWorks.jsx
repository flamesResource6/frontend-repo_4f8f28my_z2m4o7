import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    title: 'EEG Sensors Detect Brain Patterns',
    desc: 'Ultra-sensitive arrays capture micro-fluctuations across cortical regions.',
    emoji: '🧠',
  },
  {
    title: 'AI Chip Decodes Thought Signals',
    desc: 'On-device neural nets transform raw waves into semantic embeddings.',
    emoji: '🤖',
  },
  {
    title: 'Emotion + Thought Recognition',
    desc: 'Real-time inference across intent, affect, and binary responses.',
    emoji: '💫',
  },
  {
    title: 'Output on Speaker + App',
    desc: 'Voice synthesis and holographic UI render meaning instantly.',
    emoji: '🔊',
  },
]

const HowItWorks = () => {
  const { scrollYProgress } = useScroll()
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5])

  return (
    <section id="science" className="relative w-full py-28">
      <motion.div style={{ opacity: bgOpacity }} className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-cyan-500/10" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">How 1st-Word Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">A fluid, scroll-animated pipeline from brain signals to spoken words.</p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            >
              <div className="text-4xl">{s.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{s.desc}</p>
              <div className="mt-6 h-32 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
