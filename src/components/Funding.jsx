import React from 'react'
import { motion } from 'framer-motion'

const Funding = () => {
  const stats = [
    { label: 'Market Potential', value: '$30B+' },
    { label: 'Target Users', value: '50M+' },
    { label: 'Roadmap', value: '18 months' },
  ]

  return (
    <section id="funding" className="relative w-full py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">We are seeking funding through Equity, Debt, or Bridge Investment.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-200/80">Join us in building the future of human expression.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-2 text-blue-200/80">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,.25)] transition hover:brightness-110">
            Invest in the Future
          </a>
        </div>
      </div>
    </section>
  )
}

export default Funding
