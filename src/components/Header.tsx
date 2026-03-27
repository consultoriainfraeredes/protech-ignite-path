import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/protech-logo.png";

const navItems = [
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Unidades", href: "#unidades" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Curso Protech" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/area-do-aluno"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Área do Aluno
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/area-do-aluno"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground text-center hover:opacity-90 transition-opacity"
            >
              Área do Aluno
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
