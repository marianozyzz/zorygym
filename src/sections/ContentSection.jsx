export default function ContentSection() {
  const items = [
    'Bio profissional',
    'Reels com gancho',
    'Carrosséis estratégicos',
    'Stories que vendem',
    'Calendário de conteúdo',
    'Prospecção de clientes',
  ]

  return (
    <section className="px-6 py-24 bg-grid">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">O que você vai aprender</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-pink-500 font-black">0{index + 1}</span>
              <p className="mt-2 text-lg font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
