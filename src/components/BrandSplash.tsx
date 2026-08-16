import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

/** Splash screen sederhana & eksklusif dengan logo, tampil sekali saat halaman dibuka. */
export function BrandSplash() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1400);
    const t2 = setTimeout(() => setGone(true), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`brand-splash ${hidden ? "brand-splash--hide" : ""}`} aria-hidden="true">
      <div className="brand-splash__inner">
        <BrandLogo className="h-6 w-auto sm:h-7 md:h-8" />
        <p className="brand-splash__name">KOST GRIYA ARCA PUTRI</p>
        <span className="brand-splash__bar">
          <i />
        </span>
      </div>
    </div>
  );
}
