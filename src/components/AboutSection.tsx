import { motion } from "framer-motion";
import { Target, Users, TrendingUp, MapPin } from "lucide-react";

const highlights = [
  { icon: Target, label: "Missão clara", text: "Formar profissionais prontos para o mercado" },
  { icon: Users, label: "Milhares de alunos", text: "Experiência comprovada em formação" },
  { icon: TrendingUp, label: "Crescimento", text: "Expansão para múltiplas cidades" },
  { icon: MapPin, label: "5 unidades", text: "Presença no Rio de Janeiro" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              Sobre o <span className="text-gradient">Curso Protech</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Curso Protech nasceu com o propósito de democratizar o acesso à educação
              tecnológica de qualidade. Nossa missão é preparar jovens e adultos para o mercado
              de trabalho, oferecendo formação prática e atualizada nas áreas de informática,
              hardware e robótica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com anos de experiência e milhares de alunos formados, o Protech se consolidou
              como referência em ensino de tecnologia, presente em cinco cidades do estado do
              Rio de Janeiro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso compromisso é com a transformação profissional dos nossos alunos,
              oferecendo infraestrutura moderna, professores qualificados e metodologia prática
              que prepara para os desafios reais do mercado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-muted/60 rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                  <h.icon size={20} className="text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                  {h.label}
                </h4>
                <p className="text-xs text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
