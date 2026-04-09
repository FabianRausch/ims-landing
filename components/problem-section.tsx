export function ProblemSection() {
  return (
    <section className="py-14 bg-linear-to-b from-background/50 to-white">
      <div className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto text-center p-6  bg-white rounded-xl shadow-xl">
          <div className="flex justify-center items-center rounded-full p-5 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance ">
              ¿Te gustaría mejorar tu presencia en Online?
            </h2>
          </div>

          <p className="text-lg text-black leading-relaxed text-pretty">
            Muchos negocios invierten en publicidad sin una estrategia clara, lo
            que genera anuncios poco efectivos y desperdicio de presupuesto. En
            nuestra agencia, diseñamos y optimizamos campañas estratégicas,
            enfocadas en mostrar tu negocio al público adecuado y mejorar tu
            presencia online.
          </p>
          <div className="flex items-center justify-between my-6">
            <img src="/funnel.png" alt="Funnel" className="w-25 h-25 mx-auto" />
            <img
              src="/audience.png"
              alt="Audience"
              className="w-25 h-25 mx-auto"
            />
            <img src="/growth.png" alt="Growth" className="w-25 h-25 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
