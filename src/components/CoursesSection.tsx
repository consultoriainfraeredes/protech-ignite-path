import { motion } from "framer-motion";
import { Monitor, Cpu } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Informática Administrativa",
    description:
      "Cursos voltados para mercado de trabalho, produtividade e domínio das ferramentas digitais mais utilizadas nas empresas.",
  },
  {
    icon: Cpu,
    title: "Hardware, Robótica e Manutenção de Videogame",
    description:
      "Aprenda montagem, configuração e manutenção de computadores, eletrônica básica, robótica e conserto de videogames na prática.",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Nossos <span className="text-gradient">Cursos</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Formação prática e completa nas áreas mais demandadas do mercado de tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-6">
                <course.icon size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {course.description}
              </p>
              <a
                href="#contato"
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                Saiba mais →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
