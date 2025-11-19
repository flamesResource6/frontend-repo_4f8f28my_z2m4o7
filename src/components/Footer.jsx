import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Made for the future of human expression.</h3>
            <p className="mt-2 text-blue-200/80">Contact: hello@1stword.ai</p>
          </div>
          <div className="flex items-center justify-start sm:justify-end">
            <div className="relative h-28 w-28 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
              <div className="h-full w-full animate-pulse rounded-md bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-blue-200/70">© {new Date().getFullYear()} 1st-Word</div>
      </div>
    </footer>
  )
}

export default Footer
