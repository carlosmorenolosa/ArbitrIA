export default function ProblemsSection() {
  return (
    <section id="problemas" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Problemas que resuelve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            FútbolAI elimina la confusión y agiliza el acceso a información oficial sobre reglas del fútbol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Problem 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <i className="fas fa-book fa-2x"></i>
            </div>
            <h3 className="font-semibold text-xl mb-3">Reglamentos extensos</h3>
            <p className="text-gray-600">
              Elimina la necesidad de navegar por documentos PDF extensos y técnicos, ahorrando tiempo y frustración.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <i className="fas fa-balance-scale fa-2x"></i>
            </div>
            <h3 className="font-semibold text-xl mb-3">Interpretaciones inconsistentes</h3>
            <p className="text-gray-600">
              Resuelve la falta de consenso en interpretaciones arbitrales, especialmente en situaciones polémicas como manos o expulsiones.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <i className="fas fa-exclamation-triangle fa-2x"></i>
            </div>
            <h3 className="font-semibold text-xl mb-3">Desinformación mediática</h3>
            <p className="text-gray-600">
              Combate la desinformación que circula en debates deportivos, televisión y redes sociales sobre decisiones arbitrales.
            </p>
          </div>

          {/* Problem 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <i className="fas fa-clock fa-2x"></i>
            </div>
            <h3 className="font-semibold text-xl mb-3">Tiempo de formación</h3>
            <p className="text-gray-600">
              Reduce dramáticamente el tiempo necesario para formarse o preparar partidos con acceso inmediato a la normativa vigente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
