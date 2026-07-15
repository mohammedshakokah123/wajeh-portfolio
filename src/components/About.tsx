const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    title: "Flutter Development",
    description:
      "Expert in building cross-platform apps with Flutter, Dart, and modern state management solutions.",
    delay: "0s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile UI/UX",
    description:
      "Creating intuitive and beautiful user interfaces that follow platform design guidelines.",
    delay: "0.1s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    title: "Performance",
    description:
      "Optimizing app performance, reducing load times, and ensuring smooth 60fps animations.",
    delay: "0.2s",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: "Collaboration",
    description:
      "Working effectively with teams, communicating clearly, and delivering projects on time.",
    delay: "0.3s",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className="animate-fade-up mb-16 text-center"
          style={{ animationDelay: "0s", animationFillMode: "forwards" }}
        >
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Passionate Flutter developer with 3+ years of experience building
            mobile applications. I specialize in creating elegant, performant
            apps that users love.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{
                animationDelay: feature.delay,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-primary/20 shadow-sm p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I started university in 2020 and began learning Flutter and
                  mobile development in 2022. In 2023, I started working
                  professionally as a Flutter developer, gaining 3 years of
                  experience building production-ready apps across e-commerce,
                  dashboards, and social platforms.
                </p>
                <p>
                  Throughout my studies, my GPA was consistently strong, around
                  80, with no failed years, and I successfully graduated from
                  university. I am currently fully available for work, with
                  stable internet and electricity, focusing on writing clean,
                  maintainable code and delivering exceptional user experiences.
                </p>
                <p>
                  I always share my experience and the problems I&apos;ve solved
                  on platforms like LinkedIn, and I continuously explore new
                  technologies and best practices to stay at the forefront of
                  mobile development. Outside of work, I enjoy contributing to
                  open-source projects and sharing knowledge through technical
                  articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
