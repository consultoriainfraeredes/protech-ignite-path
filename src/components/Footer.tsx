import { Link } from "react-router-dom";
import logo from "@/assets/protech-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Curso Protech" className="h-14 w-auto brightness-200 mb-4" />
            <p className="text-sm text-background/50">
              Formação completa em tecnologia para o mercado de trabalho.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#cursos" className="text-sm text-background/50 hover:text-background transition-colors">Cursos</a>
              <a href="#unidades" className="text-sm text-background/50 hover:text-background transition-colors">Unidades</a>
              <a href="#contato" className="text-sm text-background/50 hover:text-background transition-colors">Contato</a>
              <Link to="/area-do-aluno" className="text-sm text-background/50 hover:text-background transition-colors">Área do Aluno</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contato</h4>
            <p className="text-sm text-background/50">contato@cursoprotech.com.br</p>
            <p className="text-sm text-background/50 mt-1">(24) 99999-9999</p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Curso Protech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
