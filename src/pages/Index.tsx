import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Briefcase, Building2, Home, FileText, Scale, Star, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.jpg";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

const services = [
  { icon: Shield, title: "Ceza Hukuku", desc: "Ceza davalarında uzman savunma ve hukuki danışmanlık." },
  { icon: Users, title: "Aile Hukuku", desc: "Boşanma, velayet ve nafaka davalarında profesyonel destek." },
  { icon: Briefcase, title: "İş Hukuku", desc: "İşçi ve işveren haklarının korunması." },
  { icon: Building2, title: "Ticaret Hukuku", desc: "Şirket hukuku ve ticari uyuşmazlık çözümü." },
  { icon: Home, title: "Gayrimenkul Hukuku", desc: "Tapu, kira ve imar uyuşmazlıkları." },
  { icon: FileText, title: "İcra ve İflas", desc: "Alacak tahsilatı ve icra takibi süreçleri." },
];

const testimonials = [
  { name: "Ahmet K.", text: "Boşanma davamda her aşamada yanımda oldu. Sonuç odaklı ve profesyonel bir yaklaşım sergiledi.", rating: 5 },
  { name: "Elif S.", text: "İş hukuku konusunda aldığım danışmanlık sayesinde haklarımı tam olarak öğrendim. Teşekkür ederim.", rating: 5 },
  { name: "Mehmet T.", text: "Ticari davamda gösterdiği özveri ve uzmanlık takdire şayan. Kesinlikle tavsiye ederim.", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Yılmaz Hukuk Bürosu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-custom mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-5 w-5 text-gold" />
              <span className="text-gold text-sm font-medium tracking-wider uppercase">Güvenilir Hukuki Çözümler</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Hakkınızı Savunmak <br />
              <span className="text-gradient-gold">Bizim İşimiz</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              20 yılı aşkın deneyimimizle, hukuki süreçlerinizde güvenilir çözüm ortağınız. Uzman kadromuzla haklarınızı en etkili şekilde savunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/iletisim">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 text-base">
                  Ücretsiz Danışma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+902121234567">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base">
                  <Phone className="mr-2 h-4 w-4" />
                  Hemen Ara
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <img src={lawyerPortrait} alt="Av. Mehmet Yılmaz" className="rounded-lg shadow-2xl w-full max-w-md mx-auto" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Hakkımızda</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Av. Mehmet Yılmaz
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                İstanbul Üniversitesi Hukuk Fakültesi mezunu olan Av. Mehmet Yılmaz, 2004 yılından bu yana İstanbul Barosu'na kayıtlı olarak avukatlık mesleğini icra etmektedir.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ceza hukuku, aile hukuku ve ticaret hukuku alanlarında uzmanlaşmış olan Yılmaz, yüzlerce müvekkiline başarılı sonuçlar elde etmiştir.
              </p>
              <Link to="/hakkimizda">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold">
                  Daha Fazla Bilgi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Uzmanlık Alanlarımız</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Hizmetlerimiz</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/hizmetler" className="text-gold text-sm font-medium hover:underline inline-flex items-center gap-1">
                  Detaylı Bilgi <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding navy-gradient">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Müvekkil Yorumları</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">Güvenimizi Kanıtlıyoruz</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <p className="text-gold font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Hukuki Desteğe mi İhtiyacınız Var?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            İlk görüşme ücretsizdir. Hemen bizimle iletişime geçin ve hukuki sürecinizi birlikte planlayalım.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/iletisim">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8">
                Randevu Al
              </Button>
            </Link>
            <a href="https://wa.me/902121234567" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold px-8">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
