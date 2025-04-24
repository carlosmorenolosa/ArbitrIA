import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              La IA que entiende el reglamento de fútbol como un árbitro profesional
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Consulta cualquier regla del fútbol en lenguaje natural y obtén respuestas precisas basadas en la normativa oficial FIFA, UEFA y RFEF actualizada 2024/2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToElement("chatbot")}
                className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
              >
                Probar el asistente
              </Button>
              <Button 
                onClick={() => scrollToElement("que-es")}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/30"
              >
                Descubrir más
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-primary-dark px-4 py-3 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="flex-1 text-center text-white text-sm">ArbitrIA Asistente</div>
                </div>
                <div className="p-4 bg-gray-50 h-80 overflow-y-auto">
                  <div className="mb-4 flex justify-start">
                    <div className="bg-gray-200 rounded-lg py-2 px-4 max-w-xs">
                      <p className="text-gray-800">¿Cuándo es punible una mano?</p>
                    </div>
                  </div>
                  <div className="mb-4 flex justify-end">
                    <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-xs">
                      <p>Según el reglamento actual, una mano es punible cuando:</p>
                      <ol className="list-decimal ml-5 mt-2 text-sm">
                        <li>El jugador toca deliberadamente el balón con la mano/brazo</li>
                        <li>El jugador amplía su cuerpo de manera antinatural</li>
                        <li>El jugador marca gol directamente con la mano/brazo</li>
                      </ol>
                      <div className="mt-3 pt-2 border-t border-white/20 text-xs">
                        <p><strong>Fuente:</strong> Regla 12.1 - IFAB 2024/25</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex justify-start">
                    <div className="bg-gray-200 rounded-lg py-2 px-4 max-w-xs">
                      <p className="text-gray-800">¿Cuándo se aplica el fuera de juego?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-xs">
                      <p>El fuera de juego se aplica cuando un jugador se encuentra...</p>
                      <div className="mt-3 pt-2 border-t border-white/20 text-xs">
                        <div className="flex items-center">
                          <i className="fas fa-robot mr-1"></i>
                          <p>Escribiendo respuesta...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-200 flex">
                  <input 
                    type="text" 
                    placeholder="Haz tu pregunta sobre reglas del fútbol..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                  <Button className="ml-2 bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
                    <i className="fas fa-paper-plane"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
