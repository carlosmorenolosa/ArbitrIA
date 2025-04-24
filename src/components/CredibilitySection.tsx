export default function CredibilitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Respaldado por fuentes oficiales</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            FútbolAI utiliza exclusivamente documentación oficial y actualizada de las principales organizaciones de fútbol.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">FIFA</div>
              <div className="text-xs text-gray-500">Federación Internacional</div>
            </div>
          </div>
          <div className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">UEFA</div>
              <div className="text-xs text-gray-500">Unión Europea</div>
            </div>
          </div>
          <div className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">RFEF</div>
              <div className="text-xs text-gray-500">Real Federación Española</div>
            </div>
          </div>
          <div className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-primary">IFAB</div>
              <div className="text-xs text-gray-500">International Football Association Board</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Actualizado con los últimos cambios normativos para la temporada 2024/2025
          </p>
          <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
            Ver documentos de referencia
            <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
