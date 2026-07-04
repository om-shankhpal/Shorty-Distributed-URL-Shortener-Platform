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
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 backdrop-blur-md"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          <span className="text-blue-400">/</span>shorty
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
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
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border border-blue-500/20"
              style={{ backgroundColor: "rgba(59,130,246,0.07)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              <span className="font-mono text-xs text-blue-400 font-medium">
                v1.0 · Open Source
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Production-Grade
              <br />
              <span className="text-blue-400">URL Shortener</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-9 max-w-lg">
              A microservices reference architecture demonstrating Spring Boot,
              JWT authentication, Redis caching, Kafka event streaming, and
              Docker.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Get Started
                <FiArrowRight size={15} />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors">
                <FiGithub size={15} /> GitHub
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-9">
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-slate-500 rounded-full"
                  style={{ backgroundColor: "#1e293b" }}
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
      className="rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 transition-colors group"
      style={{ backgroundColor: "#0d1117" }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-400 mb-5 border border-blue-500/15"
        style={{ backgroundColor: "rgba(59,130,246,0.08)" }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-200 mb-2">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="border-t border-slate-800/60 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Architecture
          </p>
          <h2 className="text-3xl font-bold text-white">
            Built on solid foundations
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Each layer of the stack earns its place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-base font-bold text-slate-600">
          <span className="text-blue-500">/</span>shorty
        </span>
        <p className="text-sm text-slate-500">
          Built with React + Spring Boot Microservices.
        </p>
        <p className="text-xs text-slate-700">© {new Date().getFullYear()} Shorty</p>
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
