import Link from "next/link";

const sessions = [
  { id: "s1", title: "Pilot Session 001", city: "Valdivia", venue: "Casino", status: "REPLAY" },
  { id: "s2", title: "Pilot Session 002", city: "Valdivia", venue: "Casino", status: "REPLAY" },
  { id: "s3", title: "Pilot Session 003", city: "Valdivia", venue: "Casino", status: "PRÓXIMA" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm tracking-[0.35em] text-white/80">ROOM SESSIONS</div>
          <nav className="flex gap-6 text-sm text-white/70">
            <Link className="hover:text-white" href="/sesiones">Sesiones</Link>
            <Link className="hover:text-white" href="/djs">DJs</Link>
            <Link className="hover:text-white" href="/para-venues">Para venues</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            poster="/next.svg"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            PILOTO SEMANAL • DJ ROTATIVO • CONTENIDO
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Sesiones en vivo desde un venue real.
            <span className="text-white/70"> Cada semana, un DJ distinto.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Un formato escalable para bares y discoteques: grabación, clips virales, archivo permanente y comunidad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/sesiones"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Ver sesiones
            </Link>
            <Link
              href="/para-venues"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Traer el formato a mi local
            </Link>
          </div>

          {/* Glow line */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mt-8 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold md:text-2xl">Archivo</h2>
          <div className="text-sm text-white/60">Demo reemplazable → luego multicámara + streaming</div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {sessions.map((s) => (
            <Link
              key={s.id}
              href={`/sesiones/${s.id}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs text-white/60">{s.city} • {s.venue}</div>
                <div className="rounded-full border border-white/15 px-2 py-1 text-[10px] tracking-widest text-white/70">
                  {s.status}
                </div>
              </div>

              <div className="mt-3 text-lg font-semibold">
                {s.title}
              </div>

              <div className="mt-2 text-sm text-white/60">
                Ver replay / detalles / lineup
              </div>

              <div className="mt-4 h-px w-full bg-white/10" />
              <div className="mt-3 text-xs text-white/60 group-hover:text-white/80">
                Abrir →
              </div>
            </Link>
          ))}
        </div>

        {/* 3 value props */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Formato</div>
            <p className="mt-2 text-sm text-white/70">Mismo concepto, DJs rotativos, estética consistente.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Viralidad</div>
            <p className="mt-2 text-sm text-white/70">Clips cortos listos para IG/TikTok/Shorts.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Escala</div>
            <p className="mt-2 text-sm text-white/70">Licencia del formato a otros venues + plataforma central.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ROOM SESSIONS • Piloto
      </footer>
    </main>
  );
}