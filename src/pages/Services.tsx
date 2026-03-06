import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, Briefcase, Building2, Home, FileText, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Shield,
    title: "Ceza Hukuku",
    desc: "Ceza davalarında şüpheli, sanık veya mağdur olarak haklarınızın korunması için uzman hukuki destek sağlıyoruz.",
    process: "Soruşturma aşamasından kovuşturmaya, temyiz sürecine kadar her adımda yanınızdayız.",
  },
  {
    icon: Users,
    title: "Aile Hukuku",
    desc: "Boşanma, velayet, nafaka, mal paylaşımı ve evlat edinme gibi aile hukuku konularında profesyonel danışmanlık.",
    process: "Uzlaşma yoluyla çözüm veya dava sürecinde tam kapsamlı hukuki temsil.",
  },
  {
    icon: Briefcase,
    title: "İş Hukuku",
    desc: "İşçi ve işveren haklarının korunması, iş kazaları, kıdem ve ihbar tazminatı davaları.",
    process: "Arabuluculuk ve dava süreçlerinde hızlı ve etkili çözümler.",
  },
  {
    icon: Building2,
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluşu, birleşme, ticari sözleşmeler ve uyuşmazlık çözümü konularında danışmanlık.",
    process: "Sözleşme hazırlama, müzakere ve ticari dava süreçleri yönetimi.",
  },
  {
    icon: Home,
    title: "Gayrimenkul Hukuku",
    desc: "Tapu işlemleri, kira uyuşmazlıkları, imar sorunları ve gayrimenkul alım-satım süreçleri.",
    process: "Tapu davaları, kamulaştırma ve kat mülkiyeti uyuşmazlıklarında hukuki destek.",
  },
  {
    icon: FileText,
    title: "İcra ve İflas Hukuku",
    desc: "Alacak tahsilatı, icra takibi, iflas ve konkordato süreçlerinde profesyonel hukuki yardım.",
    process: "İlamlı ve ilamsız icra takipleri, itiraz ve istihkak davaları.",
  },
  {
    icon: Handshake,
    title: "Danışmanlık Hizmetleri",
    desc: "Bireysel ve kurumsal müvekkillere genel hukuki danışmanlık ve sözleşme inceleme hizmetleri.",
    process: "Düzenli hukuki danışmanlık anlaşmaları ve anlık hukuki görüş talepleri.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => {
  return (
    <Layout>
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Hizmetlerimiz</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Geniş uzmanlık alanlarımızla hukuki ihtiyaçlarınıza çözüm üretiyoruz.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card border border-border rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <s.icon className="h-8 w-8 text-gold" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Süreç:</strong> {s.process}</p>
                <Link to="/iletisim">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold">
                    İletişime Geç <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
