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
    'Calibración', 'Metrología Industrial', 'Laboratorios Acreditados',
    'Plataforma Digital', 'Trazabilidad Total', 'ISO / IEC 10012', 'Precisión y Confianza',
  ]

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-[tick_28s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs tracking-widest font-semibold text-white/70 px-10 flex-shrink-0">
            {item} <span className="text-white/25 ml-10">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
