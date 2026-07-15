import { projects } from "@/data/projects";
import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-projects-bg px-2 py-1 text-xs font-medium text-foreground transition-[color,box-shadow] hover:bg-background/80 [&>svg]:pointer-events-none [&>svg]:size-3">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-projects-bg py-20 transition-colors duration-300"
    >
      <div className="mx-auto px-4">
        <div className="animate-fade-up mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my recent Flutter applications, demonstrating
            expertise in mobile development and UI/UX design.
          </p>
        </div>

        <div className="mx-auto grid max-w-[80%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isInProgress = project.status === "In Progress";
            return (
              <div
                key={project.id}
                className={`animate-fade-up flex flex-col overflow-hidden rounded-xl border border-none bg-projects-card shadow-sm transition-all duration-300 ${
                  isInProgress
                    ? "cursor-default"
                    : "group hover:-translate-y-1 hover:shadow-lg"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {isInProgress && (
                  <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]" />
                )}

                <div className="relative block h-48 overflow-hidden">
                  {project.image ? (
                    <Link href={`/projects/${project.id}`} className="block h-full w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`h-full w-full object-cover transition-transform duration-500 ${
                          isInProgress
                            ? "grayscale-[0.3]"
                            : "group-hover:scale-105"
                        }`}
                      />
                      {!isInProgress && (
                        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
                      )}
                    </Link>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-projects-bg text-muted-foreground">
                      Coming Soon
                    </div>
                  )}

                  <div className="absolute right-3 top-3 z-[200]">
                    {isInProgress ? (
                      <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-amber-400 bg-amber-500/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-colors hover:bg-amber-600 [&>svg]:pointer-events-none [&>svg]:size-3">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line x1="10" x2="14" y1="2" y2="2" />
                          <line x1="12" x2="15" y1="14" y2="11" />
                          <circle cx="12" cy="14" r="8" />
                        </svg>
                        In Progress
                      </span>
                    ) : (
                      <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-emerald-400 bg-emerald-500/90 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-colors hover:bg-emerald-600 [&>svg]:pointer-events-none [&>svg]:size-3">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        Completed
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 pt-6">
                  <div className="flex items-start justify-between">
                    <h3
                      className={`text-xl font-bold text-foreground ${
                        !isInProgress ? "transition-colors hover:text-primary" : ""
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground/80">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto px-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 px-6 pb-6 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.links.google && (
                      <a
                        href={project.links.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 sm:text-sm"
                      >
                        <svg
                          className="h-3 w-3 fill-current sm:h-4 sm:w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                        <span>Google</span>
                      </a>
                    )}
                    {project.links.apple && (
                      <a
                        href={project.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:text-sm"
                      >
                        <svg
                          className="h-3 w-3 sm:h-4 sm:w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M10 4v4" />
                          <path d="M2 8h20" />
                          <path d="M6 4v4" />
                        </svg>
                        <span>App Store</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 sm:text-sm"
                      >
                        <svg
                          className="h-3 w-3 sm:h-4 sm:w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                  <a
                    href={`/projects/${project.id}`}
                    className="group ml-auto flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>Details</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
