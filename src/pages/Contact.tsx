import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Hata", description: "Lütfen gerekli alanları doldurun.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('notify-contact', {
        body: { name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim(), message: form.message.trim() },
      });

      if (error) throw error;

      toast({ title: "Mesajınız Gönderildi", description: "En kısa sürede sizinle iletişime geçeceğiz." });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error('Submit error:', err);
      toast({ title: "Hata", description: "Mesaj gönderilemedi. Lütfen tekrar deneyin.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">İletişim</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Hukuki danışmanlık için bizimle iletişime geçin.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Bize Ulaşın</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon</h3>
                    <a href="tel:+902121234567" className="text-muted-foreground hover:text-gold transition-colors">(0212) 123 45 67</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-posta</h3>
                    <a href="mailto:info@yilmazhukuk.com" className="text-muted-foreground hover:text-gold transition-colors">info@yilmazhukuk.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Adres</h3>
                    <p className="text-muted-foreground">Levent Mah. Hukuk Cad. No: 42<br />Beşiktaş / İstanbul</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/902121234567" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">Hızlı mesaj gönderin</a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2!2d29.01!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyOcKwMDAnMzYuMCJF!5e0!3m2!1str!2str!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ofis Konumu"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">İletişim Formu</h2>
                <p className="text-sm text-muted-foreground mb-6">Formu doldurun, size en kısa sürede dönüş yapalım.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Ad Soyad *</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Adınız Soyadınız" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Telefon *</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="05XX XXX XX XX" maxLength={20} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">E-posta</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ornek@email.com" maxLength={255} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Mesajınız *</label>
                    <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Hukuki konunuzu kısaca açıklayın..." rows={5} maxLength={1000} />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                    {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Formunuzu göndererek <a href="/kvkk" className="text-gold underline">KVKK aydınlatma metnini</a> okuduğunuzu kabul edersiniz.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
