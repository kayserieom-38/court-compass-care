import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "İlk görüşme ücretli midir?", a: "Hayır, ilk hukuki danışma görüşmemiz ücretsizdir. Bu görüşmede davanızın genel değerlendirmesini yapar ve süreç hakkında bilgi veririz." },
  { q: "Dava süreci ne kadar sürer?", a: "Dava süreci, davanın türüne ve mahkemenin iş yüküne bağlı olarak değişir. Basit davalar 3-6 ay, karmaşık davalar 1-3 yıl sürebilir." },
  { q: "Avukatlık ücreti nasıl belirlenir?", a: "Avukatlık ücretleri, Türkiye Barolar Birliği asgari ücret tarifesine uygun olarak ve davanın niteliğine göre belirlenir. İlk görüşmede net bilgi verilir." },
  { q: "Arabuluculuk nedir ve hangi davalarda uygulanır?", a: "Arabuluculuk, tarafların bir arabulucu eşliğinde uzlaşma aramasıdır. İş hukuku ve ticaret hukuku davalarında dava öncesi zorunlu arabuluculuk şartı bulunmaktadır." },
  { q: "Online danışmanlık hizmeti veriyor musunuz?", a: "Evet, video konferans aracılığıyla online hukuki danışmanlık hizmeti sunmaktayız. Randevu almak için iletişim sayfamızdan bize ulaşabilirsiniz." },
  { q: "Hangi şehirlerde hizmet veriyorsunuz?", a: "Ofisimiz İstanbul'da bulunmaktadır ancak Türkiye genelinde hukuki danışmanlık ve dava takibi hizmeti sunmaktayız." },
  { q: "Dava masraflarını kim karşılar?", a: "Dava masrafları genellikle davayı açan tarafça ödenir. Dava sonucunda kaybeden taraf masrafları karşılar. Detaylı bilgi için görüşme yapabilirsiniz." },
  { q: "KVKK kapsamında kişisel verilerim nasıl korunur?", a: "Müvekkil bilgileri, 6698 sayılı KVKK kapsamında gizlilik ilkesine uygun olarak korunmaktadır. Verileriniz üçüncü şahıslarla paylaşılmaz." },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Hukuki süreçlerle ilgili merak ettiğiniz soruların yanıtları.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
