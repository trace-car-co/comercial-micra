import Hero from '../components/Hero'
import Products from '../components/Products'
import HowItWorks from '../components/HowItWorks'
import ValueSection from '../components/ValueSection'
import TargetAudience from '../components/TargetAudience'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Products />
      <HowItWorks />
      <ValueSection />
      <TargetAudience />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function Ticker() {
  const items = [
    { text: 'Calibración', highlight: false },
    { text: 'Metrología Industrial', highlight: false },
    { text: '200+ Laboratorios Acreditados', highlight: true },
    { text: 'Plataforma Digital', highlight: false },
    { text: 'Trazabilidad Total', highlight: true },
    { text: 'ISO / IEC 10012', highlight: true },
    { text: 'Precisión y Confianza', highlight: false },
    { text: 'Red ONAC Colombia', highlight: true },
  ]

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-dark to-primary overflow-hidden py-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="flex whitespace-nowrap animate-[tick_32s_linear_infinite]">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 flex-shrink-0 px-8">
            <span className={`text-xs tracking-[3px] uppercase font-semibold ${item.highlight ? 'text-white/90' : 'text-white/50'}`}>
              {item.text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `}</style>
    </div>
  )
}
