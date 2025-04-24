import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ChatbotSection() {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [chatHistory, setCharHistory] = useState([
    {
      type: 'bot',
      message: '¡Hola! Soy ArbitrIA, tu asistente virtual especializado en el reglamento del fútbol.',
      details: [
        'Puedo consultar en tiempo real las reglas oficiales de FIFA, UEFA y RFEF.',
        'Pregúntame sobre cualquier situación o duda reglamentaria del fútbol.',
        'Te proporcionaré respuestas precisas con referencias a los artículos específicos.'
      ]
    }
  ]);
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // This is a placeholder for future backend integration
    toast({
      title: "Funcionalidad en desarrollo",
      description: "El chat se integrará con el backend LLM en la implementación final.",
      duration: 3000,
    });
    
    setMessage('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <section id="chatbot" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Consulta al asistente</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Haz cualquier pregunta sobre el reglamento del fútbol y obtén respuestas precisas al instante.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-primary-dark px-4 py-3 flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div className="flex-1 text-center text-white text-sm">ArbitrIA Asistente</div>
            </div>
            
            <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 flex justify-${chat.type === 'user' ? 'start' : 'end'}`}>
                  <div className={`${chat.type === 'user' ? 'bg-gray-200' : 'bg-primary text-white'} rounded-lg py-2 px-4 max-w-xs md:max-w-md`}>
                    <p className={chat.type === 'user' ? 'text-gray-800' : ''}>{chat.message}</p>
                    
                    {chat.details && (
                      <ol className="list-decimal ml-5 mt-2 text-sm">
                        {chat.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ol>
                    )}
                    
                    {chat.source && (
                      <div className="mt-3 pt-2 border-t border-white/20 text-xs">
                        <p><strong>Fuente:</strong> {chat.source}</p>
                      </div>
                    )}
                    
                    {chat.isTyping && (
                      <div className="mt-3 pt-2 border-t border-white/20 text-xs">
                        <div className="flex items-center">
                          <i className="fas fa-robot mr-1"></i>
                          <p>Escribiendo respuesta...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200 flex">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Haz tu pregunta sobre reglas del fútbol..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
              />
              <Button 
                onClick={handleSendMessage}
                className="ml-2 bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Basado en reglamentos oficiales FIFA, UEFA y RFEF 2024/2025</p>
            <p className="mt-2">Las respuestas incluyen referencias a las secciones específicas del reglamento</p>
          </div>
        </div>
      </div>
    </section>
  );
}