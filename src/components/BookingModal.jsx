import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const sectors = ['Manufactura', 'Alimentos y Bebidas', 'Farmacéutico', 'Petroquímico', 'Laboratorios', 'Automotriz', 'Otro']

export default function BookingModal({ isOpen, onClose }) {
  const [formState, setFormState] = useState('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', sector: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.company) return
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => {
        onClose()
        setFormState('idle')
        setForm({ name: '', company: '', email: '', phone: '', sector: '' })
      }, 2000)
    }, 1200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted hover:text-dark transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-2">Agendar Demo</h3>
            <p className="text-sm text-muted mb-8">
              Complete el formulario y nuestro equipo se pondrá en contacto con usted en menos de 24 horas.
            </p>

            {formState !== 'sent' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Empresa"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Teléfono (opcional)"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                />
                <select
                  name="sector"
                  value={form.sector}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Sector / Industria</option>
                  {sectors.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <motion.button
                  type="submit"
                  disabled={formState === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary text-white font-bold text-sm tracking-wider uppercase rounded-xl cursor-pointer border-none shadow-xl shadow-primary/30 hover:bg-primary-dark transition-colors disabled:opacity-60"
                >
                  {formState === 'sending' ? 'Enviando...' : 'Agendar Demo Gratuita'}
                </motion.button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-accent text-4xl mb-4">✓</div>
                <p className="font-semibold text-lg">¡Recibido!</p>
                <p className="text-sm text-muted mt-2">Le contactaremos muy pronto.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
