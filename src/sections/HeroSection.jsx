export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-grid text-center px-6">
      <div>
        <h1 className="text-4xl md:text-7xl font-black glow-text">
          Viva de <span className="text-pink-500">Social Media</span>
        </h1>

        <p className="mt-6 text-white/70 text-lg">
          Transforme conteúdo em dinheiro e construa sua autoridade.
        </p>

        <button className="mt-8 px-8 py-4 bg-pink-600 rounded-full font-bold pink-glow">
          Quero começar
        </button>
      </div>
    </section>
  )
}
