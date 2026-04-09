import { motion } from 'framer-motion'
import { Gauge, ShieldCheck, ClipboardCheck, GraduationCap, Lightbulb, ArrowUpRight } from 'lucide-react'
import SpotlightCard from './reactbits/SpotlightCard'
import GradientText from './reactbits/GradientText'
import BlurText from './reactbits/BlurText'

const services = [
  {
    icon: Gauge,
    title: 'Gestión de Calibración de Equipos',
    desc: 'Calendario automatizado, recordatorios y coordinación con más de 200 laboratorios acreditados ONAC en Colombia. Calibración de instrumentos de medición desde un solo punto de contacto.',
    badge: 'Red ONAC',
    color: 'from-blue-500/10 to-blue-600/5',
  },
  {
    icon: ShieldCheck,
    title: 'Aseguramiento Metrológico ISO 10012',
    desc: 'Tercerización completa de su sistema de gestión metrológica bajo normas ISO/IEC 10012. Trazabilidad metrológica garantizada.',
    badge: 'ISO 10012',
    color: 'from-emerald-500/10 to-emerald-600/5',
  },
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico y Auditoría Metrológica',
    desc: 'Evaluamos la madurez de su sistema metrológico, identificamos brechas y diseñamos un plan de acción para el cumplimiento normativo.',
    badge: 'Plan de acción',
    color: 'from-violet-500/10 to-violet-600/5',
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones en Metrología',
    desc: 'Programas de formación in-house en metrología industrial, calibración de equipos y gestión de instrumentos de medición.',
    badge: 'In-house',
    color: 'from-amber-500/10 to-amber-600/5',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría Estratégica Metrológica',
    desc: 'Asesoría experta para optimizar sus procesos metrológicos, reducir costos y mejorar la trazabilidad de cada medición.',
    badge: 'Estratégica',
    color: 'from-rose-500/10 to-rose-600/5',
  },
]

export default function Products() {
  return (
    <section id="servicios" aria-label="Servicios de calibración y metrología" className="bg-white py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
          >
            Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark mb-5"
          >
            Servicios de calibración y metrología,{' '}
            <GradientText colors={['#2059A5', '#3B7DD8', '#34A853', '#143570']} animationSpeed={6} className="text-3xl lg:text-5xl font-extrabold tracking-tight">
              en un solo lugar.
            </GradientText>
          </motion.h2>
          <BlurText
            text="Gestión de calibración, aseguramiento metrológico, auditorías y capacitaciones con laboratorios acreditados ONAC."
            delay={40}
            animateBy="words"
            direction="top"
            className="text-base text-muted leading-relaxed justify-center"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={i === 0 ? 'lg:col-span-2' : ''}
            >
              <SpotlightCard
                spotlightColor="rgba(32, 89, 165, 0.12)"
                className={`group relative bg-gradient-to-br ${svc.color} rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-default h-full`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <svc.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary/60 bg-white px-3 py-1 rounded-full">
                    {svc.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2.5 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{svc.desc}</p>
                <ArrowUpRight
                  size={18}
                  className="absolute top-7 right-7 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
