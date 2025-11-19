import React from 'react'
import Hero3D from './components/Hero3D'
import HowItWorks from './components/HowItWorks'
import Features3D from './components/Features3D'
import Funding from './components/Funding'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Background subtle neural grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.08),transparent_45%)]" />

      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">1st-Word</span>
          </div>
          <nav className="hidden gap-6 text-sm text-blue-200/80 sm:flex">
            <a href="#science" className="hover:text-white">Science</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#funding" className="hover:text-white">Funding</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <HowItWorks />
        <Features3D />
        <Funding />
      </main>

      <Footer />
    </div>
  )
}

export default App
