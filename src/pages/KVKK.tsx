import Layout from "@/components/Layout";

const KVKK = () => (
  <Layout>
    <section className="navy-gradient section-padding">
      <div className="container-custom mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">KVKK Aydınlatma Metni</h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-lg p-8 space-y-6 text-muted-foreground text-sm leading-relaxed">
          <h2 className="text-xl font-heading font-bold text-foreground">Veri Sorumlusu</h2>
          <p>Yılmaz Hukuk Bürosu olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin güvenliğine önem vermekteyiz.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">İşlenen Kişisel Veriler</h2>
          <p>Ad, soyad, telefon numarası, e-posta adresi, hukuki süreç bilgileri.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">İşleme Amaçları</h2>
          <p>Hukuki danışmanlık hizmeti sunulması, iletişim sağlanması, yasal yükümlülüklerin yerine getirilmesi.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">Veri Saklama Süresi</h2>
          <p>Kişisel verileriniz, ilgili mevzuatta öngörülen süre boyunca ve hukuki ilişki devam ettiği sürece saklanmaktadır.</p>
          <h2 className="text-xl font-heading font-bold text-foreground">Haklarınız</h2>
          <p>KVKK'nın 11. maddesi kapsamında kişisel verilerinize ilişkin bilgi talep etme, düzeltme, silme ve itiraz etme haklarınız bulunmaktadır.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default KVKK;
