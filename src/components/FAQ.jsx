import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Qué es MICRA y cómo funciona?',
    a: 'MICRA es una empresa de base tecnológica que gestiona integralmente los procesos metrológicos de su empresa. Combinamos servicios especializados con una plataforma digital que centraliza certificados, calendarios de calibración y dashboards de cumplimiento en tiempo real.',
  },
  {
    q: '¿Necesito experiencia en metrología para usar la plataforma?',
    a: 'No. La plataforma fue diseñada para ser intuitiva. Nuestro equipo se encarga de toda la gestión técnica. Usted solo necesita acceder para consultar el estado de sus equipos, descargar certificados y recibir alertas.',
  },
  {
    q: '¿Con cuáles laboratorios trabajan?',
    a: 'Trabajamos con una red de más de 200 laboratorios acreditados por ONAC en Colombia, cubriendo todas las magnitudes físicas: masa, temperatura, presión, longitud, fuerza, corriente, entre otras.',
  },
  {
    q: '¿Cuánto tiempo toma la implementación?',
    a: 'El onboarding básico toma entre 1 y 2 semanas, dependiendo del tamaño de su parque de equipos. Incluye carga de inventario, configuración de calendarios y capacitación a su equipo.',
  },
  {
    q: '¿MICRA cumple con ISO/IEC 10012?',
    a: 'Sí. Nuestros procesos de gestión metrológica están alineados con los requisitos de la norma ISO/IEC 10012: Sistemas de gestión de medidas.',
  },
  {
    q: '¿Qué pasa si un equipo está próximo a vencer?',
    a: 'La plataforma envía alertas automáticas cuando un equipo está próximo a vencer su calibración. Además, nuestro equipo coordina proactivamente el servicio con el laboratorio acreditado correspondiente.',
  },
  {
    q: '¿Cuáles son los costos?',
    a: 'Nuestros planes se adaptan al tamaño de su inventario de equipos y al nivel de servicio requerido. Solicite una demo gratuita y le presentaremos una propuesta personalizada.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="text-[15px] font-semibold text-dark pr-8 group-hover:text-primary transition-colors">{item.q}</span>
        <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors ${
          isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-muted'
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5 pr-12">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-off py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark mb-4"
          >
            Preguntas <span className="gradient-text">frecuentes.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted"
          >
            Respuestas a las preguntas más comunes sobre nuestros servicios.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              item={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
