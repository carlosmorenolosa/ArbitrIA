export default function UsersSection() {
  return (
    <section id="usuarios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Quién puede usarlo?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            FútbolAI está diseñado para todos los roles dentro del ecosistema del fútbol.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User 1 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-whistle text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Árbitros</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Consulta rápida antes de los partidos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Formación continua con casos reales</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Preparación para exámenes federativos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User 2 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-chalkboard-teacher text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Entrenadores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Preparación táctica basada en reglas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Entendimiento de situaciones arbitrales</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Formación de jugadores sobre normativa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User 3 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-futbol text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Jugadores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Comprensión de decisiones arbitrales</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Adaptación a cambios en el reglamento</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Ventaja estratégica en el juego</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User 4 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-microphone text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Periodistas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Análisis fundamentado de jugadas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Credibilidad en debates deportivos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Preparación rápida antes de retransmisiones</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User 5 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-users text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Aficionados</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Mejor comprensión del juego</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Argumentos basados en hechos en discusiones</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Mayor disfrute durante los partidos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User 6 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
              <i className="fas fa-graduation-cap text-white text-5xl"></i>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">Formadores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Material educativo actualizado</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Ejemplos prácticos y casos de estudio</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary-light mt-1 mr-2"></i>
                  <span>Soporte para cursos de arbitraje</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
