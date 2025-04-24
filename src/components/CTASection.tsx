import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para probar ArbitrIA?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Obtén respuestas precisas sobre el reglamento del fútbol en segundos y mejora tu conocimiento del juego.
        </p>
        <Button className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg">
          Probar el asistente
        </Button>
        <p className="mt-4 text-white/70">
          No requiere registro. Acceso inmediato.
        </p>
      </div>
    </section>
  );
}
