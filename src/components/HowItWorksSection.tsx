export default function HowItWorksSection() {
  return (
    <section id="funcionamiento" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Un sistema inteligente que procesa tu consulta y ofrece respuestas fundamentadas en reglamentos oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div className="text-center pt-4">
              <div className="text-primary mb-4">
                <i className="fas fa-question-circle fa-3x"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Consulta</h3>
              <p className="text-gray-600">
                Haces una pregunta en lenguaje natural sobre cualquier aspecto del reglamento.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div className="text-center pt-4">
              <div className="text-primary mb-4">
                <i className="fas fa-search fa-3x"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Recuperación</h3>
              <p className="text-gray-600">
                El sistema busca en los documentos oficiales las secciones más relevantes.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div className="text-center pt-4">
              <div className="text-primary mb-4">
                <i className="fas fa-robot fa-3x"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Generación</h3>
              <p className="text-gray-600">
                La IA crea una respuesta clara y precisa basada únicamente en fuentes oficiales.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div className="text-center pt-4">
              <div className="text-primary mb-4">
                <i className="fas fa-file-alt fa-3x"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Evidencia</h3>
              <p className="text-gray-600">
                Recibes la respuesta junto con los fragmentos exactos del reglamento como respaldo.
              </p>
            </div>
          </div>
        </div>

        {/* Demo example */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-xl">Ejemplo de respuesta:</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="p-6 md:col-span-3">
              <h4 className="font-medium text-lg mb-4 text-primary">Pregunta: ¿En qué casos se expulsa a un jugador directamente?</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="mb-3">Un jugador será expulsado (tarjeta roja) cuando cometa cualquiera de estas infracciones:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Juego brusco grave</li>
                  <li>Conducta violenta</li>
                  <li>Escupir o morder a alguien</li>
                  <li>Impedir con mano intencionada un gol o una oportunidad manifiesta de gol (excepto el guardameta en su propia área)</li>
                  <li>Impedir una oportunidad manifiesta de gol con infracción que debe ser sancionada con tiro libre, si el atacante se dirigía hacia la portería</li>
                  <li>Lenguaje o gestos ofensivos, insultantes o humillantes</li>
                  <li>Recibir una segunda amonestación en el mismo partido</li>
                  <li>Entrar en la sala de vídeo</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500">
                * La respuesta está basada exclusivamente en el reglamento oficial 2024/2025.
              </p>
            </div>
            <div className="bg-gray-50 p-6 md:col-span-2 border-t md:border-t-0 md:border-l">
              <h4 className="font-medium text-lg mb-4 text-primary">Fuentes recuperadas:</h4>
              <div className="border-l-4 border-primary-light pl-4 mb-4">
                <p className="text-gray-700 text-sm">
                  <strong>Regla 12 - IFAB 2024/25, Sección 3:</strong>
                  "Un jugador, sustituto o jugador sustituido que cometa alguna de las siguientes infracciones será expulsado: • impedir mediante una infracción por mano un gol o evitar una ocasión manifiesta de gol (excepto en el caso del guardameta dentro de su propia área)..."
                </p>
              </div>
              <div className="border-l-4 border-primary-light pl-4">
                <p className="text-gray-700 text-sm">
                  <strong>Circular FIFA 2024/01:</strong>
                  "Se aclara que entrar en la sala de vídeo (VOR) será sancionado con tarjeta roja directa para cualquier miembro del equipo, incluyendo jugadores, staff técnico y oficiales del club..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
