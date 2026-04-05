import { motion } from 'framer-motion'
import { Factory, FlaskConical, Pill, Fuel, Microscope, Car, Building2, Layers } from 'lucide-react'

const audiences = [
  { icon: Factory, title: 'Manufactura' },
  { icon: FlaskConical, title: 'Alimentos y Bebidas' },
  { icon: Pill, title: 'Farmacéutico' },
  { icon: Fuel, title: 'Petroquímico' },
  { icon: Microscope, title: 'Laboratorios' },
  { icon: Car, title: 'Automotriz' },
  { icon: Building2, title: 'Servicios Públicos' },
  { icon: Layers, title: 'Otros sectores' },
]

export default function TargetAudience() {
  return (
    <section id="nosotros" className="bg-off py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
          >
            Industrias
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark mb-5"
          >
            Diseñado para sectores que{' '}
            <span className="gradient-text">exigen precisión.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted leading-relaxed"
          >
            Soluciones adaptadas para cualquier industria que dependa de mediciones confiables y trazabilidad certificada.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <a.icon size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-dark">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
