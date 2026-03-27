import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const units = [
  { city: "Volta Redonda", address: "Endereço a definir" },
  { city: "Barra Mansa", address: "Endereço a definir" },
  { city: "Resende", address: "Endereço a definir" },
  { city: "Madureira", address: "Endereço a definir" },
  { city: "Campo Grande", address: "Endereço a definir" },
];

const UnitsSection = () => {
  return (
    <section id="unidades" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Nossas <span className="text-gradient">Unidades</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Estamos presentes em cinco cidades, levando educação tecnológica para mais perto de você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center mb-4">
                <MapPin size={18} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                {unit.city}
              </h3>
              <p className="text-sm text-muted-foreground">{unit.address}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;
