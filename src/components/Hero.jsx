import { motion } from 'framer-motion'
import { ArrowRight, Play, ShieldCheck, Zap, BarChart3, Clock } from 'lucide-react'

const stats = [
  { value: '60%', label: 'Ahorro en tiempo', icon: Clock },
  { value: '20%', label: 'Reducción de costos', icon: Zap },
  { value: '200+', label: 'Labs acreditados', icon: ShieldCheck },
  { value: '100%', label: 'Trazabilidad', icon: BarChart3 },
]

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #143570 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 lg:px-8 pt-28 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-primary">Empresa de base tecnológica · Colombia</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,7vw,84px)] font-extrabold leading-[1.05] tracking-tight text-dark mb-6"
          >
            Su metrología,
            <br />
            <span className="text-primary">bajo control total.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted leading-relaxed mb-10"
          >
            Transformamos procesos metrológicos complejos en un sistema ágil,
            trazable y centralizado. Un solo punto de contacto para toda su
            gestión de calibración.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.a
              href="#contacto"
              onClick={(e) => scrollTo(e, '#contacto')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-semibold text-sm no-underline rounded-xl shadow-xl shadow-primary/25 hover:bg-primary-dark transition-colors"
            >
              Solicitar Demo Gratuita <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#como-funciona"
              onClick={(e) => scrollTo(e, '#como-funciona')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-50 text-dark font-semibold text-sm no-underline rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Play size={14} className="text-primary" /> Cómo funciona
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-5 text-center border border-white/60"
            >
              <s.icon size={18} className="text-primary mx-auto mb-2" />
              <span className="text-2xl font-extrabold text-dark block">{s.value}</span>
              <span className="text-[11px] text-muted font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
