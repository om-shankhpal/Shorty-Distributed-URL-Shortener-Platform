import { Link } from "react-router-dom";
import {
  FiShield,
  FiLink,
  FiZap,
  FiBarChart2,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";

const TECH_PILLS = [
  "Spring Boot 3",
  "JWT",
  "Redis",
  "Kafka",
  "Docker",
  "PostgreSQL",
];

const FEATURES = [
  {
    icon: <FiShield size={18} />,
    title: "JWT Authentication",
    desc: "Stateless auth across all microservices via signed tokens validated at the API Gateway.",
  },
  {
    icon: <FiLink size={18} />,
    title: "URL Shortening",
    desc: "Cryptographically random 6-char alphanumeric codes. Uniqueness guaranteed before every write.",
  },
  {
    icon: <FiZap size={18} />,
    title: "Redis Caching",
    desc: "Short code lookups hit Redis first. 24-hour TTL. PostgreSQL is queried only on cache miss.",
  },
  {
    icon: <FiBarChart2 size={18} />,
    title: "Kafka Analytics",
    desc: "Every redirect publishes a ClickEvent. The Analytics Service consumes and persists asynchronously.",
  },
];

function Navbar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 backdrop-blur-md"
      style={{ backgroundColor: "rgba(15,23,42,0.85)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          <span className="text-blue-400">/</span>shorty
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroTerminal() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-slate-800 font-mono text-sm hidden lg:block"
      style={{ backgroundColor: "#0d1117" }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-slate-800"
        style={{ backgroundColor: "#161b22" }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
        <span className="ml-3 text-xs text-slate-500 font-sans">
          shorty · api demo
        </span>
      </div>
      <div className="px-6 py-5 leading-loose text-slate-400 text-xs">
        <p>
          <span className="text-green-400">$</span> curl -X POST
          https://api.shorty.dev<span className="text-blue-400">/urls</span> \
        </p>
        <p className="pl-4">
          -H <span className="text-sky-300">"Authorization: Bearer ey..."</span>{" "}
          \
        </p>
        <p className="pl-4">
          -d{" "}
          <span className="text-sky-300">
            {'\'{"originalUrl": "https://very-long.url/path"}\''}
          </span>
        </p>
        <br />
        <p className="text-green-400">
          &#10003; 201 Created <span className="text-blue-400">· 48ms</span>
        </p>
        <br />
        <p>{"{"}</p>
        <p className="pl-5">
          "shortCode": <span className="text-sky-300">"xK9p2m"</span>,
        </p>
        <p className="pl-5">
          "shortUrl":{" "}
          <span className="text-sky-300">"https://short.ly/xK9p2m"</span>,
        </p>
        <p className="pl-5">
          "createdAt":{" "}
          <span className="text-sky-300">"2025-07-01T10:42:31Z"</span>
        </p>
        <p>{"}"}</p>
        <br />
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white">█</span>
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-20 pb-12 lg:min-h-screen lg:flex lg:items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-1.5"
              style={{
                backgroundColor: "rgba(59,130,246,0.07)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>

              <span className="font-mono text-xs font-medium text-blue-400">
                v1.0 · Open Source
              </span>
            </div>

            <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
              Production-Grade
              <br />
              <span className="text-blue-400">URL Shortener</span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              A microservices reference architecture demonstrating Spring Boot,
              JWT authentication, Redis caching, Kafka event streaming, and
              Docker.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
              >
                Get Started
                <FiArrowRight size={15} />
              </Link>

              <a
                href="https://github.com/om-shankhpal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white sm:w-auto"
              >
                <FiGithub size={15} />
                GitHub
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-xs font-mono text-slate-500"
                  style={{
                    backgroundColor: "#1e293b",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="group rounded-xl border border-slate-800 p-6 transition-colors hover:border-blue-500/50"
      style={{ backgroundColor: "#0d1117" }}
    >
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/15 text-blue-400"
        style={{
          backgroundColor: "rgba(59,130,246,0.08)",
        }}
      >
        {icon}
      </div>

      <h3 className="mb-2 text-base font-semibold text-slate-200">{title}</h3>

      <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="border-t border-slate-800/60 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
            Architecture
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Built on solid foundations
          </h2>

          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Each layer of the stack earns its place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <span className="font-mono text-base font-bold text-slate-600">
          <span className="text-blue-500">/</span>shorty
        </span>

        <p className="text-sm text-slate-500">
          Built with React + Spring Boot Microservices.
        </p>

        <p className="text-xs text-slate-700">
          © {new Date().getFullYear()} Shorty
        </p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0f172a", color: "#f1f5f9" }}
    >
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
