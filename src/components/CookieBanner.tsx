import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-t border-gold/20 p-4 md:p-6">
      <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/80 text-center md:text-left">
          Bu web sitesi, deneyiminizi geliştirmek için çerezleri kullanmaktadır. Sitemizi kullanmaya devam ederek{" "}
          <a href="/gizlilik" className="text-gold underline">çerez politikamızı</a> kabul etmiş olursunuz.
        </p>
        <Button onClick={accept} className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold shrink-0">
          Kabul Et
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
