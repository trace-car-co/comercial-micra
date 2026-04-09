import { motion } from 'framer-motion'
import { ArrowRight, Play, ShieldCheck, Zap, BarChart3, Clock } from 'lucide-react'
import CountUp from './reactbits/CountUp'
import GradientText from './reactbits/GradientText'
import BlurText from './reactbits/BlurText'
import Magnet from './reactbits/Magnet'
import PrismaticBurst from './reactbits/PrismaticBurst'

const stats = [
  { value: 60, suffix: '%', label: 'Ahorro en tiempo', icon: Clock },
  { value: 20, suffix: '%', label: 'Reducción de costos', icon: Zap },
  { value: 200, suffix: '+', label: 'Labs acreditados', icon: ShieldCheck },
  { value: 100, suffix: '%', label: 'Trazabilidad', icon: BarChart3 },
]

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" aria-label="Metrología y calibración de equipos en Colombia" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-primary-dark">
      {/* Animated WebGL Background */}
      <PrismaticBurst
        intensity={1.8}
        speed={0.4}
        animationType="rotate3d"
        colors={['#143570', '#2059A5', '#3B7DD8']}
        distort={5}
        mixBlendMode="normal"
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#143570]/40 pointer-events-none z-[1]" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 lg:px-8 pt-28 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-white/80">Empresa de base tecnológica · Colombia</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,7vw,84px)] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
          >
            Gestión metrológica y{' '}
            <GradientText
              colors={['#5B9BF5', '#7BB8FF', '#34A853', '#A8D5FF']}
              animationSpeed={6}
              className="text-[clamp(40px,7vw,84px)] font-extrabold leading-[1.05] tracking-tight"
            >
              calibración de equipos.
            </GradientText>
          </motion.h1>

          {/* Subtitle with BlurText */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <BlurText
              text="Conectamos su empresa con más de 200 laboratorios acreditados ONAC en Colombia. Calibración, trazabilidad y aseguramiento metrológico ISO 10012 en una sola plataforma."
              delay={30}
              animateBy="words"
              direction="top"
              className="text-lg text-white/50 leading-relaxed justify-center"
            />
          </motion.div>

          {/* CTAs with Magnet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Magnet padding={60} magnetStrength={3}>
              <motion.a
                href="#contacto"
                onClick={(e) => scrollTo(e, '#contacto')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-dark font-semibold text-sm no-underline rounded-xl shadow-xl shadow-black/20 hover:bg-white/90 transition-colors"
              >
                Solicitar Demo Gratuita <ArrowRight size={16} />
              </motion.a>
            </Magnet>
            <Magnet padding={60} magnetStrength={3}>
              <motion.a
                href="#como-funciona"
                onClick={(e) => scrollTo(e, '#como-funciona')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/[0.08] text-white font-semibold text-sm no-underline rounded-xl hover:bg-white/[0.14] transition-colors border border-white/10 backdrop-blur-sm"
              >
                <Play size={14} className="text-primary-light" /> Cómo funciona
              </motion.a>
            </Magnet>
          </motion.div>
        </div>

        {/* Stats row with CountUp */}
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
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/[0.06] backdrop-blur-md rounded-2xl p-5 text-center border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.1] hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default"
            >
              <s.icon size={18} className="text-primary-light mx-auto mb-2" />
              <span className="text-2xl font-extrabold text-white block">
                <CountUp from={0} to={s.value} duration={2.5} delay={0.8 + i * 0.15} className="text-2xl font-extrabold text-white" />
                {s.suffix}
              </span>
              <span className="text-[11px] text-white/40 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
