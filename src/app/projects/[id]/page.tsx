"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

function StatusBadge({ status }: { status: string }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-xs font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 gap-1.5 border capitalize ${
        isCompleted
          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
      }`}
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {isCompleted ? (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </>
        ) : (
          <>
            <line x1="10" x2="14" y1="2" y2="2" />
            <line x1="12" x2="15" y1="14" y2="11" />
            <circle cx="12" cy="14" r="8" />
          </>
        )}
      </svg>
      {status}
    </span>
  );
}

function Carousel({ screenshots, title }: { screenshots: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const max = Math.max(0, screenshots.length - 1);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  if (!screenshots.length) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto" role="region" aria-roledescription="carousel">
      <div className="overflow-hidden">
        <div
          className="flex -ml-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translate3d(-${current * (100 / 3)}%, 0, 0)` }}
        >
          {screenshots.map((src, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-projects-card pt-0 border-none overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative">
                  <div className="flex aspect-[3/5] items-center justify-center p-0 relative bg-muted">
                    <img
                      alt={`${title} Screenshot ${i + 1}`}
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        disabled={current === 0}
        className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -left-12 -translate-y-1/2 hidden md:flex cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <span className="sr-only">Previous slide</span>
      </button>

      <button
        onClick={next}
        disabled={current === max}
        className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 absolute size-8 rounded-full top-1/2 -right-12 -translate-y-1/2 hidden md:flex cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const screenshots = project.screenshots || [];

  return (
    <div className="min-h-screen bg-background text-foreground pb-12 pt-20 px-4 md:px-8">
      <Header />
      <div className="container mx-auto max-w-5xl">
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm pt-2">
                <StatusBadge status={project.status} />
                {project.year && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    {project.year}
                  </span>
                )}
                {project.type && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
                    </svg>
                    {project.type}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6 md:mt-0 flex-wrap">
              {project.links.demo && (
                <a
                  target="_blank"
                  href={project.links.demo}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium outline-none h-9 px-4 py-2 rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg shadow-primary/20 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.links.google && (
                <a
                  target="_blank"
                  href={project.links.google}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium outline-none h-9 px-4 py-2 rounded-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700 border-none shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                  </svg>
                  Google Play
                </a>
              )}
              {project.links.apple && (
                <a
                  target="_blank"
                  href={project.links.apple}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium outline-none h-9 px-4 py-2 rounded-full gap-2 bg-blue-600 text-white hover:bg-blue-700 border-none shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M10 4v4" />
                    <path d="M2 8h20" />
                    <path d="M6 4v4" />
                  </svg>
                  App Store
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden mb-12 border bg-muted shadow-2xl">
            {project.image ? (
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>
        </div>

        {screenshots.length > 0 && (
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <section className="space-y-4 md:space-y-8 mb-16">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">App Gallery</h2>
                <div className="h-px bg-border flex-1 ml-6" />
              </div>
              <Carousel screenshots={screenshots} title={project.title} />
            </section>
          </div>
        )}

        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">About Project</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.longDescription || project.description}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
