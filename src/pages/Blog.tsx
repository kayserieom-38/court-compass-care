import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const categories = ["Tümü", "Ceza Hukuku", "Aile Hukuku", "İş Hukuku", "Genel"];

const articles = [
  { id: 1, title: "Boşanma Davası Sürecinde Bilinmesi Gerekenler", category: "Aile Hukuku", date: "15 Şubat 2026", excerpt: "Boşanma davası açmadan önce bilmeniz gereken haklar, süreç ve dikkat edilmesi gereken hususlar hakkında detaylı bilgi." },
  { id: 2, title: "İş Kazası Tazminatı Nasıl Hesaplanır?", category: "İş Hukuku", date: "10 Şubat 2026", excerpt: "İş kazası sonrası tazminat haklarınız, hesaplama yöntemleri ve dava süreci hakkında bilmeniz gerekenler." },
  { id: 3, title: "Kira Artış Oranları ve Kiracı Hakları 2026", category: "Genel", date: "5 Şubat 2026", excerpt: "2026 yılı kira artış oranları, kiracı ve ev sahibi hakları hakkında güncel mevzuat bilgileri." },
  { id: 4, title: "Ceza Davasında Savunma Hakkı", category: "Ceza Hukuku", date: "28 Ocak 2026", excerpt: "Ceza davalarında sanık hakları, avukat tutma hakkı ve savunma stratejileri." },
  { id: 5, title: "Miras Hukuku: Veraset İlamı Nasıl Alınır?", category: "Genel", date: "20 Ocak 2026", excerpt: "Veraset ilamı başvuru süreci, gerekli belgeler ve miras paylaşımı hakkında temel bilgiler." },
  { id: 6, title: "İhbar ve Kıdem Tazminatı Hesaplama Rehberi", category: "İş Hukuku", date: "12 Ocak 2026", excerpt: "İşten ayrılırken hak edilen ihbar ve kıdem tazminatının hesaplanma yöntemleri." },
];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Tümü" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <Layout>
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Blog & Makaleler</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Hukuki konularda bilgilendirici yazılarımızı okuyun.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Makale ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-gold text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">{a.category}</span>
                <h3 className="text-lg font-heading font-semibold text-foreground mt-4 mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {a.date}
                  </span>
                  <span className="text-gold text-sm font-medium inline-flex items-center gap-1 cursor-pointer hover:underline">
                    Devamını Oku <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aradığınız kriterlere uygun makale bulunamadı.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
