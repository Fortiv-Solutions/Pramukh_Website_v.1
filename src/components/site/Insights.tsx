import { BLOGS, NEWS } from "@/data/site";
import { Reveal } from "./Reveal";

export function Insights() {
  return (
    <section id="abt6" className="bg-cream-soft py-16 md:py-24">
      <div className="container-brand">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="eyebrow">Blogs</h2>
            <div className="mt-5 h-px w-12 bg-bronze/60" />
          </div>
          <a href="/blog" className="link-underline">
            View all blogs
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOGS.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <a href={b.href} className="group flex h-full flex-col bg-white">
                <div className="img-zoom relative aspect-[562/382] w-full overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-0 top-4 bg-bronze px-3 py-1.5 text-[0.53rem] font-bold uppercase tracking-[0.2em] text-white">
                    {b.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-body">
                    {b.date} <span className="mx-2 text-bronze">•</span> {b.read}
                  </p>
                  <h3 className="mt-4 text-[0.98rem] font-semibold leading-[1.55] text-ink transition-colors duration-300 group-hover:text-bronze">
                    {b.title}
                  </h3>
                  <span className="mt-auto pt-6 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-bronze">
                    read more
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="eyebrow">In The News</h2>
            <div className="mt-5 h-px w-12 bg-bronze/60" />
          </div>
          <a href="/media" className="link-underline">
            View all news
          </a>
        </Reveal>

        <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
          {NEWS.map((n, i) => (
            <Reveal as="li" key={n.title} delay={i * 80}>
              <a href={n.href} className="group grid gap-2 py-6 md:grid-cols-[120px_1fr_auto] md:items-center md:gap-8">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-bronze">
                  {n.year} / {n.tag}
                </span>
                <span className="text-[0.95rem] font-medium leading-[1.6] text-ink transition-colors duration-300 group-hover:text-bronze">
                  {n.title}
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-bronze">read</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
