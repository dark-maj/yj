// import Image from "next/image";
// src/app/page.tsx
import Link from "next/link";

function Section({ id, title, children }: { id?: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      {title && <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold">YJ Works</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section>
    


    <div className="grid md:grid-cols-2 items-center gap-8">
      {/* Left: Headline + CTA */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="underline">Full-stack dev</span> +{" "}
          <span className="underline">ML enthusiast</span> — shipping student projects that work.
        </h1>

        <p className="mt-4 text-gray-600 max-w-prose">
          I’m <span className="font-semibold">Yeturi Jaahnavi</span> — Machine Learning Enthusiast + Next.js engineer.
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="px-5 py-2 rounded bg-black text-white">
            View Projects
          </Link>
          <a href="/resume.pdf" className="px-5 py-2 rounded border">
            Download CV
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <li><b>3+</b> projects</li>
          <li><b>4</b> certs</li>
          <li className="hidden sm:block"><b>Open to</b> internships</li>
        </ul>
      </div>

      {/* Right: Tight logo card that fits exactly around the logo */}
{/* Right: Tight logo card, nudged a bit left */}
<div className="flex md:justify-end">
  <div className="rounded-2xl border bg-white shadow-sm p-4 md:mr-6">
    <svg
      viewBox="0 0 320 160"
      role="img"
      aria-label="YJ Works monogram and wordmark"
      className="w-64 h-auto"
    >
      <circle cx="90" cy="80" r="36" fill="#111827" />
      <text x="90" y="88" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="28" fontWeight="800" fill="#fff">YJ</text>
      <text x="150" y="72" fontFamily="Inter, system-ui, sans-serif" fontSize="28" fontWeight="800" fill="#111827">
        YJ <tspan fill="#6B7280" fontWeight="700">Works</tspan>
      </text>
      <text x="150" y="102" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fill="#6B7280">
        Full-stack & ML Portfolio
      </text>
    </svg>
  </div>
</div>



    </div>
  


      </Section>

      {/* Featured Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { slug: "weather-app", title: "Weather App", tags: ["Next.js", "API", "Tailwind"] },
            { slug: "portfolio", title: "Portfolio Site", tags: ["Next.js", "Vercel"] },
            { slug: "infra-ci", title: "Infra CI/CD", tags: ["GitHub Actions", "Docker", "AWS"] },
          ].map(p => (
            <article key={p.slug} className="rounded-2xl border p-4 hover:shadow-sm">
              <div className="aspect-video bg-gray-50 rounded mb-3" />
              <h3 className="font-semibold">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="text-xs border rounded px-2 py-0.5">{t}</span>)}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                <Link href={`/projects/${p.slug}`} className="underline">Details</Link>
                <a href="#" className="underline">GitHub</a>
                <a href="#" className="underline">Demo</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {["Next.js","React","TypeScript","Tailwind","Node","Docker","AWS","Terraform","PostgreSQL"].map(t => (
            <span key={t} className="text-sm border rounded px-3 py-1">{t}</span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-2xl border p-8 text-center">
          <h2 className="text-2xl font-bold">Got an idea to ship?</h2>
          <p className="mt-2 text-gray-600">I’m open to freelance and full-time roles.</p>
          <Link href="/contact" className="mt-4 inline-block px-5 py-2 rounded bg-black text-white">Contact Me</Link>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} YJ Works</span>
          <div className="flex gap-4">
            <a href="https://github.com/yourid">GitHub</a>
            <a href="https://linkedin.com/in/yourid">LinkedIn</a>
            <a href="/rss.xml">RSS</a>
          </div>
        </div>
      </footer>
    </>
  );
}
