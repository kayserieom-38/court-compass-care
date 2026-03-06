import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="navy-gradient section-padding">
      <div className="container-custom mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Gizlilik Politikası</h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto max-w-3xl prose prose-gray">
        <div className="bg-card border border-border rounded-lg p-8 space-y-6 text-muted-foreground text-sm leading-relaxed">
          <h2 className="text-xl font-heading font-bold text-foreground">1. Genel Bilgiler</h2>
          <p>Bu gizlilik politikası, Yılmaz Hukuk Bürosu web sitesini ziyaret ettiğinizde kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi vermektedir.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">2. Toplanan Veriler</h2>
          <p>İletişim formu aracılığıyla paylaştığınız ad, soyad, telefon numarası, e-posta adresi ve mesaj içeriği gibi bilgiler toplanmaktadır.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">3. Verilerin Kullanımı</h2>
          <p>Toplanan kişisel veriler yalnızca hukuki danışmanlık hizmeti sunmak ve iletişim sağlamak amacıyla kullanılmaktadır.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">4. Çerezler</h2>
          <p>Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerez teknolojileri kullanmaktadır. Çerez tercihlerinizi tarayıcı ayarlarından yönetebilirsiniz.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">5. İletişim</h2>
          <p>Gizlilik politikamız hakkında sorularınız için info@yilmazhukuk.com adresinden bize ulaşabilirsiniz.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
