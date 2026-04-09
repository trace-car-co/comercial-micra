import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Globe, Clock, Send } from 'lucide-react'
import Logo from './Logo'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contacto@micra.com.co', href: 'mailto:contacto@micra.com.co' },
  { icon: Phone, label: 'WhatsApp', value: '+57 300 616 7292', href: 'https://wa.me/573006167292' },
  { icon: Globe, label: 'Web', value: 'www.micra.com.co', href: 'https://www.micra.com.co' },
  { icon: Clock, label: 'Horario', value: 'Lun – Vie · 8 AM – 6 PM', href: null },
]

const sectors = ['Manufactura', 'Alimentos y Bebidas', 'Farmacéutico', 'Petroquímico', 'Laboratorios', 'Automotriz', 'Otro']

export default function Footer() {
  const [formState, setFormState] = useState('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', sector: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.company) return

    const lines = [
      '🔬 *Solicitud de Demo — MICRA*',
      '',
      `👤 *Nombre:* ${form.name}`,
      `🏢 *Empresa:* ${form.company}`,
      `📧 *Email:* ${form.email}`,
      form.phone ? `📱 *Teléfono:* ${form.phone}` : '',
      form.sector ? `🏭 *Sector:* ${form.sector}` : '',
      form.message ? `💬 *Mensaje:* ${form.message}` : '',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/573006167292?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setFormState('sent')
  }

  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="bg-dark py-24 lg:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-semibold text-white/60 bg-white/[0.06] px-4 py-1.5 rounded-full mb-5"
            >
              Contacto
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
            >
              Hablemos hoy.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/40 leading-relaxed"
            >
              Solicite una demo gratuita y descubra cómo MICRA puede transformar
              la gestión metrológica de su empresa.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Contact info cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <c.icon size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30 block">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 no-underline hover:text-white transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white/70">{c.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white/[0.04] border border-white/[0.06] rounded-2xl p-7 lg:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Juan García"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A.S"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+57 300 000 0000"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium text-white/40 mb-2">Sector</label>
                <select
                  name="sector"
                  value={form.sector}
                  onChange={handleChange}
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none appearance-none cursor-pointer focus:border-primary/50 transition-colors [&>option]:bg-[#1a1a20]"
                >
                  <option value="">Seleccione su sector</option>
                  {sectors.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-white/40 mb-2">Mensaje (opcional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntenos sobre sus necesidades..."
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white outline-none resize-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                />
              </div>

              {formState !== 'sent' ? (
                <motion.button
                  type="submit"
                  disabled={formState === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-primary text-white rounded-xl font-semibold text-sm cursor-pointer border-none hover:bg-primary-dark transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  {formState === 'sending' ? 'Enviando...' : 'Solicitar Demo Gratuita'}
                </motion.button>
              ) : (
                <div className="text-center py-3.5 text-sm font-medium text-accent">
                  ✓ Recibido — le contactaremos muy pronto.
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08080a] py-10 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-6 border-b border-white/[0.05]">
            <Logo light />
            <div className="flex flex-wrap items-center gap-6">
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proceso', href: '#como-funciona' },
                { label: 'Plataforma', href: '#plataforma' },
                { label: 'Contacto', href: '#contacto' },
                { label: 'Términos y Condiciones', href: '#/terminos', isRoute: true },
                { label: 'Política de Privacidad', href: '#/privacidad', isRoute: true },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={l.isRoute ? undefined : (e) => {
                    e.preventDefault()
                    document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-xs text-white/30 no-underline hover:text-white/60 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
            <p className="text-xs text-white/20">
              © 2026 MICRA · Precisión y Confianza · Colombia
            </p>
            <p className="text-xs text-white/20">
              contacto@micra.com.co · +57 300 616 7292
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
