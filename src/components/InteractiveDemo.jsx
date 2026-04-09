import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UploadCloud, CheckCircle2, Loader2 } from 'lucide-react'
import BlurText from './reactbits/BlurText'

const mockResults = [
  { equipo: 'Multímetro Fluke 87V', magnitud: 'Corriente', vence: 'Jun 2026', estado: 'ok' },
  { equipo: 'Balanza Analítica', magnitud: 'Masa', vence: 'Ago 2026', estado: 'ok' },
  { equipo: 'Termómetro Industrial', magnitud: 'Temperatura', vence: 'May 2026', estado: 'warn' },
  { equipo: 'Presostato Ref-12', magnitud: 'Presión', vence: 'Jul 2026', estado: 'ok' },
]

export default function InteractiveDemo() {
  const [step, setStep] = useState('form') // form | loading | results

  const handleSubmit = () => {
    setStep('loading')
    setTimeout(() => setStep('results'), 1800)
  }

  const reset = () => setStep('form')

  return (
    <section className="bg-dark py-28 lg:py-40 px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-serif italic text-white/[0.018] text-[clamp(320px,45vw,720px)] leading-none pointer-events-none select-none">
        μ
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-[10px] tracking-[4px] uppercase text-white/25 font-semibold mb-8"
          >
            <span className="w-7 h-px bg-primary" />
            Plataforma tecnológica
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(36px,5vw,64px)] font-black text-white leading-none tracking-tight mb-8"
          >
            Control total<br />
            <span className="italic text-white/30">en sus manos.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <BlurText
              text="Desarrollamos una aplicación web que transforma la gestión de calibración. Centraliza, almacena y ofrece trazabilidad completa de cada equipo de su empresa."
              delay={30}
              animateBy="words"
              direction="top"
              className="text-[15px] font-light text-white/40 leading-relaxed"
            />
          </motion.div>
          <ul className="border-t border-white/[0.07] space-y-0">
            {[
              ['Repositorio centralizado', 'Todos los certificados y registros en un solo lugar, siempre disponibles.'],
              ['Calendario inteligente', 'Alertas automáticas de vencimiento y programación de servicios con anticipación.'],
              ['Dashboards en tiempo real', 'Estado de cumplimiento, métricas y tendencias de todo su parque de equipos.'],
              ['Trazabilidad completa', 'Historial íntegro por equipo para auditorías y certificaciones sin contratiempos.'],
            ].map(([title, desc], i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="py-5 border-b border-white/[0.05] flex gap-4 items-baseline list-none"
              >
                <span className="text-primary text-xs mt-0.5 flex-shrink-0">—</span>
                <div>
                  <strong className="text-white/85 font-semibold block mb-1">{title}</strong>
                  <span className="text-white/50 text-sm font-light leading-relaxed">{desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right — interactive screen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#111113] border border-white/[0.07] rounded overflow-hidden"
        >
          {/* Browser bar */}
          <div className="bg-[#1a1a1d] px-5 py-3.5 flex items-center gap-2 border-b border-white/[0.05]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e74c3c]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f39c12]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27ae60]" />
            <span className="text-[10px] text-white/20 tracking-wider ml-2">app.micra.com.co</span>
          </div>

          <div className="p-6 lg:p-8 min-h-[360px]">
            <AnimatePresence mode="wait">
              {step === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[9px] tracking-[3px] uppercase text-white/25 mb-6">Simulación · Carga de inventario</p>
                  <div
                    className="border-2 border-dashed border-white/10 rounded-lg p-10 text-center mb-6 hover:border-primary/40 transition-colors cursor-pointer"
                    onClick={handleSubmit}
                  >
                    <UploadCloud size={36} className="text-white/20 mx-auto mb-3" />
                    <p className="text-sm text-white/30">Arrastre su listado de equipos o haga clic aquí</p>
                    <p className="text-[10px] text-white/15 mt-2">.xlsx, .csv — máx 10MB</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full bg-white text-dark py-3.5 text-[11px] font-bold tracking-[2px] uppercase cursor-pointer border-none"
                  >
                    Procesar Inventario →
                  </motion.button>
                </motion.div>
              )}

              {step === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center min-h-[280px]"
                >
                  <Loader2 size={40} className="text-primary animate-spin mb-4" />
                  <p className="text-sm text-white/40">Procesando inventario...</p>
                </motion.div>
              )}

              {step === 'results' && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[9px] tracking-[3px] uppercase text-white/25 mb-6">Panel de Control · 2026</p>
                  {/* KPIs */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-white/[0.04] border border-white/[0.05] p-4">
                      <div className="font-serif text-2xl lg:text-3xl font-bold text-white leading-none">247</div>
                      <div className="text-[9px] tracking-[2px] uppercase text-white/25 mt-1">Equipos activos</div>
                      <div className="text-[10px] text-accent mt-1">↑ +12 este mes</div>
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.05] p-4">
                      <div className="font-serif text-2xl lg:text-3xl font-bold text-accent leading-none">98%</div>
                      <div className="text-[9px] tracking-[2px] uppercase text-white/25 mt-1">Cumplimiento</div>
                      <div className="text-[10px] text-accent mt-1">Al día</div>
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.05] p-4">
                      <div className="font-serif text-2xl lg:text-3xl font-bold text-yellow-400 leading-none">12</div>
                      <div className="text-[9px] tracking-[2px] uppercase text-white/25 mt-1">Por vencer</div>
                      <div className="text-[10px] text-yellow-400 mt-1">Próximos 30 días</div>
                    </div>
                  </div>
                  {/* Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Equipo', 'Magnitud', 'Vence', 'Estado'].map((h) => (
                          <th key={h} className="text-[8px] tracking-[2px] uppercase text-white/20 pb-3 text-left font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {mockResults.map((r, i) => (
                        <tr key={i}>
                          <td className="text-xs text-white/50 py-3 border-t border-white/[0.04] font-light">{r.equipo}</td>
                          <td className="text-xs text-white/50 py-3 border-t border-white/[0.04] font-light">{r.magnitud}</td>
                          <td className="text-xs text-white/50 py-3 border-t border-white/[0.04] font-light">{r.vence}</td>
                          <td className="py-3 border-t border-white/[0.04]">
                            <span className={`text-[9px] px-2 py-1 uppercase tracking-wider ${
                              r.estado === 'ok'
                                ? 'bg-accent/15 text-green-400'
                                : 'bg-yellow-500/12 text-yellow-400'
                            }`}>
                              {r.estado === 'ok' ? 'Al día' : 'Próximo'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button onClick={reset} className="text-[10px] text-white/30 mt-4 underline cursor-pointer bg-transparent border-none">
                    ← Reiniciar demo
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
