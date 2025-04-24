export default function Footer() {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">ArbitrIA</span>
            </div>
            <p className="text-white/70 mb-4">
              Inteligencia artificial al servicio del reglamento del fútbol.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#que-es" className="text-white/70 hover:text-white transition-colors">¿Qué es?</a></li>
              <li><a href="#problemas" className="text-white/70 hover:text-white transition-colors">Problemas resueltos</a></li>
              <li><a href="#usuarios" className="text-white/70 hover:text-white transition-colors">Usuarios</a></li>
              <li><a href="#funcionamiento" className="text-white/70 hover:text-white transition-colors">Funcionamiento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-white/50 mt-1 mr-2"></i>
                <a href="mailto:info@arbitria.com" className="text-white/70 hover:text-white transition-colors">info@arbitria.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-globe text-white/50 mt-1 mr-2"></i>
                <a href="https://arbitria.com" className="text-white/70 hover:text-white transition-colors">arbitria.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© 2024 ArbitrIA. Todos los derechos reservados.</p>
          <p className="mt-2">
            ArbitrIA no está afiliado oficialmente con FIFA, UEFA o RFEF.
            Los reglamentos y documentos utilizados son de acceso público.
          </p>
        </div>
      </div>
    </footer>
  );
}
