import logoLight from "@/assets/logo-light.png.asset.json";
import logoDark from "@/assets/logo-dark.png.asset.json";

type BrandLogoProps = {
  className?: string;
  /** Tanpa efek kilau (mis. di dalam splash screen yang sudah beranimasi). */
  noShine?: boolean;
  /** Disediakan untuk kompatibilitas; logo memang hanya berupa lambang. */
  iconOnly?: boolean;
};

/** Logo Kost Griya Arca Putri — PNG transparan, menyesuaikan tema terang/gelap. */
export function BrandLogo({
  className = "h-12 w-auto max-w-full shrink-0 sm:h-14 md:h-16",
  noShine = false,
}: BrandLogoProps) {
  return (
    <span className={`brand-logo ${noShine ? "" : "brand-logo--shine"} ${className}`}>
      <img
        src={logoLight.url}
        alt="Logo Kost Griya Arca Putri"
        className="logo-for-light h-full w-auto select-none"
        draggable={false}
      />
      <img
        src={logoDark.url}
        alt=""
        aria-hidden="true"
        className="logo-for-dark h-full w-auto select-none"
        draggable={false}
      />
    </span>
  );
}
