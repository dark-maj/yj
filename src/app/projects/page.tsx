import { notFound } from "next/navigation";

const DATA = {
  "todo-weather": {
    title: "To-Do + Weather",
    body: "Built with Next.js App Router, server components, and API fetch.",
  },
  "proj-3": { title: "Project 3", body: "Description coming soon." },
  "ecommerce-mini": { title: "E-commerce Mini", body: "Cart, product list, and deployed site." },
} as const;

type ProjectKey = keyof typeof DATA;

// Next.js 15: params is a Promise — await it
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: ProjectKey }>;
}) {
  const { slug } = await params;
  const item = DATA[slug];
  return { title: item ? `${item.title} – YJ Works` : "Project – YJ Works" };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: ProjectKey }>;
}) {
  const { slug } = await params;
  const item = DATA[slug];
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-100 px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <p className="text-gray-300 mt-5">{item.body}</p>
      </article>
    </main>
  );
}
