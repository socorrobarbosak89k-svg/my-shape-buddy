import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/treinos", label: "Treinos" },
    { path: "/calculadora", label: "Calculadora" },
    { path: "/dietas", label: "Dietas" },
    { path: "/suporte", label: "Suporte" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        {/* Logo - Escondido em mobile para dar mais espaço aos links */}
        <Link to="/" className="hidden sm:flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Dumbbell className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">NutriIQ</span>
        </Link>

        {/* Mobile + Desktop Navigation - Sempre visível, horizontal em mobile */}
        <nav className="flex items-center justify-center gap-4 sm:gap-6 flex-1 sm:flex-none">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botões de ação - Apenas desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link to="/suporte">Login</Link>
          </Button>
          <Button asChild className="gradient-primary shadow-primary">
            <Link to="/calculadora">Começar Agora</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
