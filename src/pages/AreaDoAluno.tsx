import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

const AreaDoAluno = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
          <Construction size={32} className="text-accent-foreground" />
        </div>
        <h1 className="text-2xl font-heading font-bold text-foreground mb-3">
          Área do Aluno
        </h1>
        <p className="text-muted-foreground mb-8">
          Esta área está em desenvolvimento e estará disponível em breve.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={18} />
          Voltar ao site
        </Link>
      </div>
    </div>
  );
};

export default AreaDoAluno;
