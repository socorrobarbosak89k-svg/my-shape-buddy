import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Shape Inexplicável</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolucione sua jornada fitness com tecnologia e inteligência artificial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/calculadora" className="hover:text-primary transition-smooth">Calculadora</Link></li>
              <li><Link to="/treinos" className="hover:text-primary transition-smooth">Treinos</Link></li>
              <li><Link to="/dietas" className="hover:text-primary transition-smooth">Dietas</Link></li>
              <li><Link to="/suporte" className="hover:text-primary transition-smooth">Suporte IA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Em Busca do Shape Inexplicável. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
