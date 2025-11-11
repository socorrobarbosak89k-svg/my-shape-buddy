import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Página Não Encontrada</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="gradient-primary shadow-primary">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/calculadora">
              <Search className="h-4 w-4 mr-2" />
              Ver Calculadora
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
