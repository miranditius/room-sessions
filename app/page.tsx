import Link from "next/link";

const sessions = [
  { id: 1, title: "Pilot Session 001", city: "Valdivia", venue: "Casino" },
  { id: 2, title: "Pilot Session 002", city: "Valdivia", venue: "Casino" },
  { id: 3, title: "Pilot Session 003", city: "Valdivia", venue: "Casino" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="flex justify-between items-center p-6 border-b border-white/10">
        <h1 className="text-xl tracking-widest">ROOM SESSIONS</h1>

        <nav className="flex gap-6 text-sm text-white/70">
          <Link href="#">Sesiones</Link>
          <Link href="#">DJs</Link>
          <Link href="#">Venues</Link>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold leading-tight">
          Live DJ Sessions
        </h2>

        <p className="mt-6 text-white/60 max-w-xl">
          Un formato de sesiones semanales grabadas desde un venue real,
          con DJs rotativos y contenido viral.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl">
          Ver sesiones
        </button>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h3 className="text-2xl mb-8">Sesiones recientes</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {sessions.map((s) => (
            <div
              key={s.id}
              className="border border-white/10 p-6 rounded-xl hover:bg-white/5 transition"
            >
              <div className="text-sm text-white/50">
                {s.city} • {s.venue}
              </div>

              <h4 className="text-lg mt-2">
                {s.title}
              </h4>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}