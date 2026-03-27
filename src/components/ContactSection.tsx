import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const units = ["Volta Redonda", "Barra Mansa", "Resende", "Madureira", "Campo Grande"];

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", unidade: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", telefone: "", email: "", unidade: "", mensagem: "" });
  };

  return (
    <section id="contato" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Tire suas dúvidas, agende uma visita ou matricule-se agora mesmo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              required
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <select
              required
              value={form.unidade}
              onChange={(e) => setForm({ ...form, unidade: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">Selecione a unidade</option>
              {units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
            <textarea
              required
              rows={4}
              placeholder="Sua mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-semibold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Enviar mensagem
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <a
              href="https://wa.me/5524999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-muted/60 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <MessageCircle size={24} className="text-green-600" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">(24) 99999-9999</p>
              </div>
            </a>

            <a
              href="mailto:contato@cursoprotech.com.br"
              className="flex items-center gap-4 p-5 rounded-xl bg-muted/60 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Mail size={24} className="text-secondary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">contato@cursoprotech.com.br</p>
              </div>
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted/60 border border-border flex items-center justify-center hover:shadow-md transition-shadow"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-foreground/70" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-muted/60 border border-border flex items-center justify-center hover:shadow-md transition-shadow"
                aria-label="Facebook"
              >
                <Facebook size={22} className="text-foreground/70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
