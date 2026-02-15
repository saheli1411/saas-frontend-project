export default function HeroDark() {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">

      {/* === GRID LINES === */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:80px_100%]" />
      </div>

      {/* === LEFT GRADIENT OVAL === */}
      <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] bg-pink-500 rounded-full blur-[200px] opacity-40"></div>

      {/* === RIGHT GRADIENT OVAL === */}
      <div className="absolute -right-40 top-1/3 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-40"></div>

      {/* === FLOATING LIGHT BLOBS === */}
      <div className="absolute top-24 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-24 right-1/3 w-40 h-40 bg-white rounded-full blur-3xl opacity-10"></div>

      {/* === MAIN HERO CARD === */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-black rounded-3xl border border-white/10 px-12 py-20 text-center shadow-2xl">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Beautiful Landing Page
            <br />
            Design for You
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            A good design is not only aesthetically pleasing,
            but also functional. It should be able to solve the problem.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
              Download Template
            </button>
          </div>

          {/* Dashboard Preview */}
        <div className="mt-16 relative flex justify-center">

        {/* Glow Under Image */}
        <div className="absolute bottom-0 w-[70%] h-32 bg-purple-600 blur-[120px] opacity-30"></div>

        {/* Dashboard Image */}
       <div className="relative transform perspective-1000">
       <img
        src="/dashboard.png"
        alt="Dashboard"
        className="rounded-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] rotate-[-1deg]"
        />
        </div>

        </div>


        </div>
      </div>

    </section>
  );
}
