import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Loader2, Trash2, Mail, Phone, Calendar, MessageSquare, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  created_at: string;
}

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/giris"); return false; }

    const { data: roles } = await supabase.from("user_roles").select("role").eq("role", "admin");
    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/giris");
      return false;
    }
    return true;
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Hata", description: "Veriler yüklenemedi.", variant: "destructive" });
    } else {
      setSubmissions(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
    if (error) {
      toast({ title: "Hata", description: "Silinemedi.", variant: "destructive" });
    } else {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      toast({ title: "Silindi", description: "Kayıt başarıyla silindi." });
    }
    setDeleting(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/giris");
  };

  useEffect(() => {
    const init = async () => {
      const ok = await checkAuth();
      if (ok) await fetchSubmissions();
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate("/giris");
    });
    return () => subscription.unsubscribe();
  }, []);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });

  return (
    <Layout>
      <section className="navy-gradient section-padding">
        <div className="container-custom mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Yönetici Paneli</h1>
            <p className="text-primary-foreground/70 mt-1">İletişim formu gönderileri</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchSubmissions} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <RefreshCw className="h-4 w-4 mr-1" /> Yenile
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <LogOut className="h-4 w-4 mr-1" /> Çıkış
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-20">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-heading font-semibold text-foreground mb-2">Henüz mesaj yok</h2>
              <p className="text-muted-foreground">İletişim formu gönderileri burada görünecek.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">Toplam {submissions.length} mesaj</p>
              <div className="grid gap-4">
                {submissions.map((sub, i) => (
                  <motion.div key={sub.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gold" />
                            <span className="font-semibold text-foreground">{sub.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a href={`tel:${sub.phone}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">{sub.phone}</a>
                          </div>
                          {sub.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <a href={`mailto:${sub.email}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">{sub.email}</a>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{formatDate(sub.created_at)}</span>
                          </div>
                        </div>
                        <p className="text-foreground/80 text-sm leading-relaxed">{sub.message}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(sub.id)} disabled={deleting === sub.id} className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0">
                        {deleting === sub.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
