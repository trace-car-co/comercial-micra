import { motion } from 'framer-motion'
import { Search, Send, Settings, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Evaluamos su sistema metrológico actual e identificamos oportunidades de mejora.',
  },
  {
    icon: Settings,
    title: 'Diseño de Plan',
    desc: 'Creamos un plan personalizado alineado a sus necesidades, magnitudes y normativas.',
  },
  {
    icon: Send,
    title: 'Ejecución',
    desc: 'Coordinamos calibraciones con laboratorios acreditados ONAC y gestionamos todo el proceso.',
  },
  {
    icon: BarChart3,
    title: 'Control Digital',
    desc: 'Acceda a dashboards en tiempo real, certificados centralizados y trazabilidad completa.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-off py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
          >
            Proceso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark mb-5"
          >
            Simple de implementar,{' '}
            <span className="gradient-text">poderoso en resultados.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 text-center hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                {i + 1}
              </div>
              <div className="w-12 h-12 mx-auto mt-3 mb-5 rounded-xl bg-primary/[0.06] flex items-center justify-center">
                <step.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
