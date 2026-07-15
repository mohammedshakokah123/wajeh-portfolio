const experiences = [
  {
    company: "UAE Software Company",
    location: "Remote",
    flag: "🇦🇪",
    role: "Flutter Developer",
    duration: "6 Months",
    type: "Remote",
    highlights: [
      "Maintained and enhanced a production Flutter application.",
      "Fixed bugs and implemented new features.",
      "Collaborated remotely with the development team.",
      "Successfully published application updates to Google Play.",
    ],
  },
  {
    company: "Software Company",
    location: "Latakia, Syria",
    flag: "🇸🇾",
    role: "Flutter Developer",
    duration: "2 Years",
    type: "On-site",
    highlights: [
      "Developed and maintained multiple Flutter applications.",
      "Built scalable features using Clean Architecture and BLoC.",
      "Integrated REST APIs, Firebase, authentication, maps, and payment solutions.",
      "Collaborated closely with UI/UX designers and backend developers.",
    ],
  },
  {
    company: "Freelance Flutter Developer & Technical Lead",
    location: "Multiple Clients",
    flag: "🌍",
    role: "Technical Lead",
    duration: "",
    type: "Freelance",
    highlights: [
      "Led the development team for a SaaS platform.",
      "Planned architecture and distributed tasks among developers.",
      "Communicated directly with clients and translated requirements into technical solutions.",
      "Delivered multiple freelance projects across different industries.",
    ],
  },
  {
    company: "Training Center",
    location: "",
    flag: "👨‍🏫",
    role: "Flutter Instructor",
    duration: "",
    type: "",
    highlights: [
      "Delivered Flutter training sessions for beginner and intermediate students.",
      "Taught Dart, Flutter fundamentals, state management, Clean Architecture, and API integration.",
      "Mentored students through practical projects and code reviews.",
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "12+" },
  { label: "Companies", value: "2" },
  { label: "Team Lead", value: "Yes" },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="animate-fade-up mb-16 text-center"
          style={{ animationDelay: "0s", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A journey through companies, freelance projects, and teaching — building
            production-ready apps and leading teams.
          </p>
        </div>

        <div
          className="animate-fade-up mb-16"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="animate-fade-up relative"
                style={{
                  animationDelay: `${0.2 + i * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="md:grid md:grid-cols-[4rem_1fr] gap-6">
                  <div className="hidden md:flex justify-center">
                    <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-card text-xl shadow-sm">
                      {exp.flag}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="md:hidden text-lg">{exp.flag}</span>
                          <h3 className="text-lg font-bold">{exp.company}</h3>
                        </div>
                        <p className="text-sm text-primary font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.duration && (
                          <span className="inline-flex items-center rounded-full border border-border bg-projects-bg px-3 py-1 text-xs font-medium">
                            {exp.duration}
                          </span>
                        )}
                        {exp.type && (
                          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
