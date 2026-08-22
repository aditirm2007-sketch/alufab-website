"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import { CloseIcon } from "@/components/Icons";

const tabs: Array<ProjectCategory | "All"> = ["All", ...projectCategories];

export function GalleryGrid({ initialCategory }: { initialCategory?: ProjectCategory }) {
  const [active, setActive] = useState<ProjectCategory | "All">(initialCategory ?? "All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`font-display rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active === tab ? "bg-ink text-white" : "border border-line text-steel hover:border-ink hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/5] overflow-hidden bg-surface text-left"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {project.title}
            </p>
          </button>
        ))}
      </div>

      {selected !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-white"
            onClick={() => setSelected(null)}
          >
            <CloseIcon className="h-8 w-8" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={filtered[selected].image}
                alt={filtered[selected].title}
                fill
                sizes="(min-width: 768px) 48rem, 100vw"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-white">{filtered[selected].title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
