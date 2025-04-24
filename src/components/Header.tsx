import { useState } from "react";
import { cn, scrollToElement } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">ArbitrIA</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick("que-es")} 
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              ¿Qué es?
            </button>
            <button 
              onClick={() => handleNavClick("problemas")} 
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Problemas resueltos
            </button>
            <button 
              onClick={() => handleNavClick("usuarios")} 
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Usuarios
            </button>
            <button 
              onClick={() => handleNavClick("funcionamiento")} 
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Funcionamiento
            </button>
            <button 
              onClick={() => handleNavClick("chatbot")} 
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Asistente
            </button>
          </nav>
          
          <div>
            <Button
              onClick={() => handleNavClick("chatbot")}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
            >
              Probar ahora
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost"
              onClick={toggleMobileMenu} 
              className="text-gray-700"
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-white shadow-md",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          <button 
            onClick={() => handleNavClick("que-es")} 
            className="block w-full text-left font-medium text-gray-700 hover:text-primary transition-colors"
          >
            ¿Qué es?
          </button>
          <button 
            onClick={() => handleNavClick("problemas")} 
            className="block w-full text-left font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Problemas resueltos
          </button>
          <button 
            onClick={() => handleNavClick("usuarios")} 
            className="block w-full text-left font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Usuarios
          </button>
          <button 
            onClick={() => handleNavClick("funcionamiento")} 
            className="block w-full text-left font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Funcionamiento
          </button>
          <button 
            onClick={() => handleNavClick("chatbot")} 
            className="block w-full text-left font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Asistente
          </button>
        </div>
      </div>
    </header>
  );
}
