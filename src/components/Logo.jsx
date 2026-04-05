export default function Logo({ light = false, className = '' }) {
  const goTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a href="#" onClick={goTop} className={`flex items-center gap-2.5 no-underline group ${className}`}>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold italic transition-transform group-hover:scale-105 ${
        light ? 'bg-white/10 text-white' : 'bg-primary text-white'
      }`}>
        μ
      </div>
      <div className="flex flex-col">
        <span className={`text-[15px] font-bold tracking-wide leading-tight ${light ? 'text-white' : 'text-dark'}`}>
          MICRA
        </span>
        <span className={`text-[9px] tracking-[2px] uppercase leading-tight ${light ? 'text-white/40' : 'text-muted'}`}>
          Precisión y confianza
        </span>
      </div>
    </a>
  )
}
