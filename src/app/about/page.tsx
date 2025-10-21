import Image from "next/image";

export const metadata = {
  title: "About – YJ Works",
  description:
    "About Yeturi Jaahnavi — 3rd-year engineering student building full-stack apps with a dash of Machine Learning.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Image
          src="/Myimage.jpg"        // ✅ Served from public/
          width={96}
          height={96}
          alt="YJ Works"
          className="rounded-full border object-cover"
          priority
        />
  

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Yeturi Jaahnavi</h1>
          <p className="mt-2 text-gray-600">
            3rd-year Engineering • <span className="font-semibold">Full-stack dev + ML enthusiast</span>.
            I like shipping clean UIs, reliable APIs, and small ML features that make apps smarter.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a className="underline" href="/resume.pdf">Resume</a>
            <a className="underline" href="/projects">Projects</a>
            <a className="underline" href="/contact">Contact</a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
        <div className="rounded-2xl border p-4">
          <div className="text-2xl font-extrabold">3+</div>
          <div className="text-gray-600">Projects shipped</div>
        </div>
        <div className="rounded-2xl border p-4">
          <div className="text-2xl font-extrabold">AAC</div>
          <div className="text-gray-600">Member</div>
        </div>
        <div className="rounded-2xl border p-4">
          <div className="text-2xl font-extrabold">Open to</div>
          <div className="text-gray-600">Internships</div>
        </div>
         <div className="rounded-2xl border p-4">
          <div className="text-2xl font-extrabold">PRESIDENT</div>
          <div className="text-gray-600">of LITERA</div>
        </div>
      </section>

      {/* What I do */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">What I do</h2>
        <p className="mt-3 text-white-bold-700 leading-relaxed">
          I build full-stack apps with <b>Next.js/React</b> on the front and <b>Node/Express</b> or
          serverless functions on the back. For ML, I prototype with <b>Python</b> (pandas, scikit-learn)
          and add features like recommendations or simple classifiers. I care about clean code, fast
          feedback loops, and DX (linting, CI, previews).
        </p>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">Skills & Tools</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-6 text-sm">
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Frontend</h3>
            <p className="mt-2 text-white-700">
              TypeScript, Next.js, React, Tailwind, Forms, Auth, Charts, Accessibility.
            </p>
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Backend & DevOps</h3>
            <p className="mt-2 text-white-700">
              Node/Express, REST/JSON, PostgreSQL, Prisma, Docker basics, Vercel.
            </p>
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Machine Learning</h3>
            <p className="mt-2 text-white-700">
              Python, NumPy, pandas, scikit-learn, experimentation, evaluation, simple deployment.
            </p>
          </div>
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Workflow</h3>
            <p className="mt-2 text-white-700">
              Git/GitHub, issues & PRs, Prettier/ESLint, basic CI, Notion docs.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Experience */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Highlights</h2>
        <ol className="mt-4 space-y-4 text-sm">
          <li className="rounded-2xl border p-4">
            <b>2025</b> — Built a Next.js portfolio with dynamic projects and server actions; deployed on Vercel.
          </li>
          <li className="rounded-2xl border p-4">
            <b>2025</b> — ML mini-project: trained a classifier to predict <i>[your domain here]</i>, added results
            dashboard to a Next.js app.
          </li>
        
        </ol>
      </section>

      {/* Values */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Values</h2>
        <ul className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
          <li className="rounded-2xl border p-4">Ship small, ship often.</li>
          <li className="rounded-2xl border p-4">Readable . clever.</li>
          <li className="rounded-2xl border p-4">Measure, then optimize.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="rounded-2xl border p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Let’s build something</h3>
            <p className="text-gray-600">Available for part-time internships and project collaborations.</p>
          </div>
          <a
            href="/contact"
            className="px-5 py-2 rounded bg-black text-white"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
