export default function WhatIsSection() {
  return (
    <section id="que-es" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Qué es ArbitrIA?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Un sistema de inteligencia artificial avanzado entrenado con el reglamento oficial del fútbol español, FIFA y UEFA para la temporada 2024/2025.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-neutral-light p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Sistema RAG (Retrieval-Augmented Generation)</h3>
              <p className="text-gray-600 mb-4">
                ArbitrIA utiliza tecnología RAG que combina:
              </p>
              <ol className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                  <span><strong>Recuperación</strong> de información exacta del reglamento oficial</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
                  <span><strong>Análisis</strong> del contexto y la pregunta del usuario</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
                  <span><strong>Generación</strong> de respuestas precisas y fundamentadas</span>
                </li>
              </ol>
              <p className="text-gray-600">
                Esto garantiza respuestas precisas basadas exclusivamente en fuentes oficiales, evitando invenciones o interpretaciones incorrectas.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580491224963-8731faca25f9?w=800&auto=format&fit=crop&q=80" 
                alt="Árbitro de fútbol con silbato" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Entrenado con documentación oficial</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Reglamento RFEF 2024/25</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Normativa FIFA</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Circulares UEFA</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Laws of the Game</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cada respuesta incluye referencias específicas a la sección del reglamento utilizado, asegurando total transparencia y trazabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
