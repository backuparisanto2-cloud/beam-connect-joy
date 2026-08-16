import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";
import manifest from "@/data/hotspot-manifest.json";

const TITLE = "Hotspot Kost Griya Arca Putri — File Login MikroTik";
const DESC =
  "Unduh file halaman login hotspot MikroTik Kost Griya Arca Putri Purwokerto: login, status, logout, error, plus FAQ dan SOP internet kost.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const DESCRIPTIONS: Record<string, string> = {
  "login.html": "Halaman login member (username + password)",
  "alogin.html": "Halaman setelah berhasil login",
  "status.html": "Status koneksi & tombol logout",
  "logout.html": "Halaman setelah logout",
  "error.html": "Halaman error",
  "rlogin.html": "Auto-login by MAC (bawaan MikroTik)",
  "redirect.html": "Halaman pengalih (bawaan MikroTik)",
  "faq.html": "FAQ & SOP penggunaan internet kost",
  "style.css": "Tema tampilan semua halaman",
  "theme.js": "Tema otomatis siang/malam (jam WIB)",
  "preload.js": "Pramuat gambar latar agar cepat",
  "md5.js": "Enkripsi password login CHAP (wajib ada)",
  "README.txt": "Panduan upload ke router",
  "IPHONE-COMPAT.md": "Catatan kompatibilitas iPhone/iOS",
};

const ORDER = [
  "login.html",
  "alogin.html",
  "status.html",
  "logout.html",
  "error.html",
  "rlogin.html",
  "redirect.html",
  "faq.html",
  "style.css",
  "theme.js",
  "preload.js",
  "md5.js",
  "README.txt",
  "IPHONE-COMPAT.md",
];

const IMAGE_COUNT = manifest.files.filter((f) => f.name.startsWith("img/")).length;

const FILES: { name: string; desc: string }[] = manifest.files
  .filter((f) => !f.name.startsWith("img/"))
  .map((f) => ({ name: f.name, desc: DESCRIPTIONS[f.name] ?? "File pendukung halaman hotspot" }))
  .sort((a, b) => {
    const ia = ORDER.indexOf(a.name);
    const ib = ORDER.indexOf(b.name);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.name.localeCompare(b.name);
  });

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-3 text-foreground">
          <BrandLogo className="h-10 w-auto max-w-full shrink-0 text-foreground sm:h-12 md:h-14" />
          <span className="text-sm font-medium text-muted-foreground">Purwokerto, Jawa Tengah</span>
        </div>
        <h1 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
          File Halaman Hotspot MikroTik
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Semua file siap di-upload ke folder <code>/hotspot</code> pada router. Klik untuk
          melihat atau mengunduh (klik kanan → Save link as).
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/preview"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Pratinjau Login
          </a>
          <a
            href="/export"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground"
          >
            Export ZIP
          </a>
          <a
            href="/hotspot/faq.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground"
          >
            Pratinjau FAQ &amp; SOP
          </a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Catatan: pada pratinjau, kode variabel MikroTik seperti $(error) tampil apa adanya —
          di router variabel itu terisi otomatis.
        </p>

        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border">
          {FILES.map((f) => (
            <li key={f.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4">
              <div className="min-w-0">
                <p className="truncate font-mono text-sm font-medium text-foreground">{f.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.desc}</p>
              </div>
              <a
                href={`/hotspot/${f.name}`}
                download
                className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground"
              >
                Unduh
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs text-muted-foreground">
          Plus {IMAGE_COUNT} file gambar di folder <code>img/</code> (latar pagi &amp; malam, logo,
          favicon). Semua {manifest.fileCount} file ini sudah termasuk di dalam Export ZIP.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          Admin WhatsApp:{" "}
          <a className="font-semibold text-foreground" href="https://wa.me/6285888440751">
            +62 858-8844-0751
          </a>
        </p>
      </div>
    </main>
  );
}
