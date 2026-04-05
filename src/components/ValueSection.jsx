import { motion } from 'framer-motion'
import { Cpu, BarChart3, Clock, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    num: '01',
    title: 'Solución tecnológica integral',
    desc: 'Gestión metrológica más el poder de una plataforma digital propia. Digitalizamos, centralizamos y damos visibilidad total a su operación.',
  },
  {
    icon: BarChart3,
    num: '02',
    title: 'Decisiones basadas en datos',
    desc: 'Trazabilidad y centralización para un control estratégico total. Información confiable, en tiempo real, cuando usted la necesita.',
  },
  {
    icon: Clock,
    num: '03',
    title: 'Eficiencia operacional',
    desc: 'Hasta 60% de ahorro en tiempo y 20% en costos. Sus recursos liberados para lo que realmente importa: su negocio principal.',
  },
]

export default function ValueSection() {
  return (
    <section id="plataforma" className="bg-white py-24 lg:py-32 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold text-primary bg-primary/[0.06] px-4 py-1.5 rounded-full mb-5"
            >
              Propuesta de valor
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-dark"
            >
              La precisión que su{' '}
              <span className="gradient-text">empresa necesita.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-muted leading-relaxed lg:pt-10"
          >
            Combinamos experiencia técnica con tecnología de vanguardia para
            ofrecer una gestión metrológica que genera resultados medibles desde
            el primer día.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-off rounded-2xl p-7 lg:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary transition-colors">
                  <p.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-4xl font-extrabold text-gray-100 group-hover:text-primary/10 transition-colors">{p.num}</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-3">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1.5">¿Listo para optimizar su gestión metrológica?</h3>
            <p className="text-sm text-white/60">Conéctese con nuestro equipo y descubra el potencial de MICRA.</p>
          </div>
          <motion.a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary rounded-xl font-semibold no-underline text-sm whitespace-nowrap shadow-lg"
          >
            Agendar Demo <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
