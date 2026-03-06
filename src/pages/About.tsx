import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Hakkımızda</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Güvenilir, şeffaf ve sonuç odaklı hukuki danışmanlık.</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <img src={lawyerPortrait} alt="Av. Mehmet Yılmaz" className="rounded-lg shadow-2xl w-full max-w-lg" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Av. Mehmet Yılmaz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  2004 yılından bu yana İstanbul Barosu'na kayıtlı olarak mesleğini icra eden Av. Mehmet Yılmaz, hukuk alanında 20 yılı aşkın deneyime sahiptir. Müvekkillerinin haklarını en üst düzeyde savunmak için çalışmaktadır.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-background rounded-lg p-5 border border-border">
                  <GraduationCap className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Eğitim</h3>
                    <p className="text-sm text-muted-foreground">İstanbul Üniversitesi Hukuk Fakültesi (2000-2004)</p>
                    <p className="text-sm text-muted-foreground">İstanbul Üniversitesi - Ceza Hukuku Yüksek Lisans (2005-2007)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-background rounded-lg p-5 border border-border">
                  <Briefcase className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Mesleki Deneyim</h3>
                    <p className="text-sm text-muted-foreground">2004-2008: Kıdemli Avukat - ABC Hukuk Bürosu</p>
                    <p className="text-sm text-muted-foreground">2008-Günümüz: Kurucu Avukat - Yılmaz Hukuk Bürosu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-background rounded-lg p-5 border border-border">
                  <Award className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Sertifikalar & Üyelikler</h3>
                    <p className="text-sm text-muted-foreground">İstanbul Barosu Üyesi</p>
                    <p className="text-sm text-muted-foreground">Türkiye Barolar Birliği</p>
                    <p className="text-sm text-muted-foreground">Arabuluculuk Sertifikası</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Değerlerimiz</h3>
                <ul className="space-y-2">
                  {["Güvenilirlik ve şeffaflık", "Müvekkil odaklı yaklaşım", "Sonuç odaklı çalışma", "Etik ve hukuka bağlılık"].map((val) => (
                    <li key={val} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
