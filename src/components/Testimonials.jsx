import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carolina Gutiérrez',
    role: 'Jefe de Calidad — AlimCO S.A.S',
    text: 'Desde que implementamos MICRA, la gestión de calibración dejó de ser un dolor de cabeza. Tenemos trazabilidad total y los certificados siempre a la mano.',
  },
  {
    name: 'Andrés Restrepo',
    role: 'Director de Operaciones — PetroVal',
    text: 'Reducimos el tiempo de gestión en más del 50%. La plataforma nos da la visibilidad que necesitábamos para tomar decisiones informadas.',
  },
  {
    name: 'Marcela Ospina',
    role: 'Coordinadora de Laboratorio — LabPrecis',
    text: 'Las alertas automáticas de vencimiento nos salvaron de equipos vencidos en auditoría. MICRA es una herramienta indispensable para nuestro laboratorio.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark"
          >
            Lo que dicen{' '}
            <span className="gradient-text">nuestros clientes.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-off rounded-2xl p-7 border border-gray-100 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5 transition-all relative"
            >
              <Quote size={28} className="text-primary/10 mb-4" />
              <p className="text-sm text-dark/80 leading-relaxed mb-8">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xs">
                  {t.name.charAt(0)}{t.name.split(' ')[1]?.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
