import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Magnet from './reactbits/Magnet'
import BlurText from './reactbits/BlurText'

export default function FinalCTA() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section aria-label="Solicitar demo de gestión metrológica" className="relative py-24 lg:py-32 px-5 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0e2352]" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-2xl" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-white/80">Demo disponible</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          ¿Listo para optimizar su calibración de equipos y gestión metrológica?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Solicite una demo gratuita y descubra cómo MICRA puede optimizar su operación desde el primer día.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnet padding={80} magnetStrength={2}>
            <motion.a
              href="#contacto"
              onClick={(e) => scrollTo(e, '#contacto')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary font-bold text-sm no-underline rounded-xl shadow-2xl shadow-black/20"
            >
              Solicitar Demo <ArrowRight size={16} />
            </motion.a>
          </Magnet>
          <Magnet padding={80} magnetStrength={2}>
            <motion.a
              href="https://wa.me/573006167292"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white font-semibold text-sm no-underline rounded-xl hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </motion.a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  )
}
