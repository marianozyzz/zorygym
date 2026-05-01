import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,120,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(120,0,255,0.35),transparent_35%)]" />
      <div className="relative text-center max-w-5xl">
        <p className="text-pink-300 font-bold uppercase tracking-[0.3em] mb-4">Mariano Zyzz</p>
        <h1 className="text-4xl md:text-7xl font-black uppercase glow-text">
          Viva de <span className="text-pink-500">Social Media</span>
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Transforme conteúdo em dinheiro e construa sua autoridade digital.
        </p>
        <a href="#oferta" className="inline-flex mt-8 bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-4 rounded-full font-bold pink-glow hover:scale-105 transition">
          Quero começar <ArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  )
}
