import { Mail, Linkedin, Github,MapPin } from "lucide-react";

export const metadata = {
  title: "Contact – YJ Works",
  description:
    "Connect with Yeturi Jaahnavi – Full Stack Developer passionate about building modern web experiences with React, Next.js, and AI integration.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-6 py-20 flex flex-col items-center justify-center">
      {/* Header */}
      <section className="max-w-3xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Let’s Connect 🤝
        </h1>
        <p className="text-gray-400 text-lg">
          Whether you want to collaborate on a project, discuss tech ideas, or
          just say hi — I’d love to hear from you.
        </p>
      </section>

      {/* Contact Details */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl w-full">
        <div className="flex items-center gap-4 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition">
          <Mail className="text-blue-400" size={28} />
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <a
              href="mailto:jaahnavi005@gmail.com"
              className="text-white font-medium hover:text-blue-400"
            >
              jaahnavi005@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition">
          <Linkedin className="text-blue-500" size={28} />
          <div>
            <p className="text-sm text-gray-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/jaahnaviyeturi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-blue-400"
            >
              linkedin.com/in/jaahnaviyeturi
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition">
          <Github className="text-gray-300" size={28} />
          <div>
            <p className="text-sm text-gray-400">GitHub</p>
            <a
              href="https://github.com/dark-maj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-blue-400"
            >
              github.com/dark-maj
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition">
          <MapPin className="text-red-400" size={28} />
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-white font-medium">Hyderabd,India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} YJ Works — All Rights Reserved
      </footer>
    </main>
  );
}
