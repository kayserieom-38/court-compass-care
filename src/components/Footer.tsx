import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-7 w-7 text-gold" />
              <div>
                <span className="text-lg font-heading font-bold">YILMAZ</span>
                <span className="block text-xs text-gold tracking-[0.3em] uppercase">Hukuk Bürosu</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              20 yılı aşkın deneyimimizle, hukuki süreçlerinizde yanınızdayız. Güvenilir, şeffaf ve sonuç odaklı hukuki danışmanlık.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {[
                { label: "Ana Sayfa", path: "/" },
                { label: "Hakkımızda", path: "/hakkimizda" },
                { label: "Hizmetler", path: "/hizmetler" },
                { label: "Blog", path: "/blog" },
                { label: "İletişim", path: "/iletisim" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Ceza Hukuku</li>
              <li>Aile Hukuku</li>
              <li>İş Hukuku</li>
              <li>Ticaret Hukuku</li>
              <li>Gayrimenkul Hukuku</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                Levent Mah. Hukuk Cad. No: 42, Beşiktaş / İstanbul
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                (0212) 123 45 67
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                info@yilmazhukuk.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Yılmaz Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link to="/gizlilik" className="hover:text-gold transition-colors">Gizlilik Politikası</Link>
            <Link to="/kvkk" className="hover:text-gold transition-colors">KVKK</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
