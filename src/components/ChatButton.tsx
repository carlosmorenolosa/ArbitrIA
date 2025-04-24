import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ChatButton() {
  const { toast } = useToast();
  const [showChat, setShowChat] = useState(false);
  
  const handleChatClick = () => {
    // This is a placeholder for future backend integration
    toast({
      title: "Funcionalidad en desarrollo",
      description: "El chat se integrará con el backend LLM en la implementación final.",
      duration: 3000,
    });
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handleChatClick}
        className="bg-secondary hover:bg-secondary-dark text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </Button>
    </div>
  );
}
