import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
            Curso Protech
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-primary-foreground/90 font-light">
            Formação completa em tecnologia para quem quer entrar no mercado de trabalho.
          </p>
          <p className="mt-4 text-base text-primary-foreground/70 max-w-lg">
            Aprenda na prática com cursos de informática, hardware, robótica e muito mais. Transforme seu futuro com a Protech.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cursos"
              className="px-7 py-3.5 rounded-lg font-semibold gradient-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Conhecer cursos
            </a>
            <a
              href="https://wa.me/5524999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg font-semibold bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
