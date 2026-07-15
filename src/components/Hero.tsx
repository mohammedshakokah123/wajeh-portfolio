const skills = [
  "Dart",
  "Flutter",
  "Clean Architecture",
  "Bloc / Cubit",
  "Dependency Injection (DI)",
  "Flavor & Env Config",
  "TDD & Testing",
  "CI/CD (Current Learning)",
  "REST APIs",
  "Firebase",
  "Secure Storage & SharedPreferences",
  "Sqflite",
  "App Store & Play Store",
  "Push Notifications (FCM)",
  "Google Maps",
  "Payment Gateways",
];

export default function Hero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-background px-8 pb-12 pt-24">
      <img
        src="https://wajeh-s-portfolio.vercel.app/images/bg.jpg"
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 backdrop-blur-[1px] opacity-80" style={{ backgroundColor: 'var(--background)' }} />

      <div className="container relative z-10 mx-auto">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center justify-between gap-10 2xl:flex-row 2xl:items-start 2xl:gap-16">
          <div className="flex flex-1 flex-col items-center gap-8 text-center xl:flex-row xl:items-center xl:gap-12 xl:text-left">
            <div className="group relative shrink-0">
              <div className="absolute -inset-8 rounded-full bg-primary/5 blur-[80px]" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-primary/40 opacity-50 blur transition duration-500 group-hover:opacity-80" />
              <div className="relative h-48 w-48 rounded-full border-2 border-primary/30 bg-background p-1.5 lg:h-56 lg:w-56 xl:h-60 xl:w-60">
                <img
                  src="https://wajeh-s-portfolio.vercel.app/images/profile.jpg"
                  alt="Wajeh Al-Hawari"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 xl:items-start">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[52px]">
                  Wajeh Al-Hawari
                </h1>
                <h2 className="text-xl font-medium text-primary md:text-2xl">
                  Flutter Developer (4+ Years) | Clean Architecture
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-[16px]">
                  Experienced Flutter Developer focused on clean, scalable
                  applications using Clean Architecture. Skilled in handling App
                  Store & Google Play submission guidelines and policy
                  compliance.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row">
                <a
                  href="files/WajihHawari_CV_2026.pdf"
                  download="WajihHawari_CV_2026.pdf"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(67,223,184,0.5)]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                  <span>DOWNLOAD CV</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative flex min-h-[60px] cursor-default flex-col items-center justify-center gap-1 rounded-xl border border-white/5 bg-secondary p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary/80"
              >
                <span className="text-sm font-semibold text-foreground">
                  {skill}
                </span>
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
