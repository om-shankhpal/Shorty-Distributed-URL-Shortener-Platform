import { useState } from "react";
import { FiCopy, FiTrash2, FiExternalLink, FiCheck, FiInbox } from "react-icons/fi";

const MOCK_URLS = [
  {
    id: "1",
    shortCode:   "xK9p2m",
    shortUrl:    "https://short.ly/xK9p2m",
    originalUrl: "https://github.com/om-shorty/shorty-platform",
    clicks: 142,
    createdAt: "Jul 1, 2025",
  },
  {
    id: "2",
    shortCode:   "aB3kLm",
    shortUrl:    "https://short.ly/aB3kLm",
    originalUrl: "https://spring.io/projects/spring-boot",
    clicks: 87,
    createdAt: "Jul 1, 2025",
  },
  {
    id: "3",
    shortCode:   "mN7pQr",
    shortUrl:    "https://short.ly/mN7pQr",
    originalUrl: "https://kafka.apache.org/documentation/streams",
    clicks: 54,
    createdAt: "Jun 30, 2025",
  },
  {
    id: "4",
    shortCode:   "zW2jKx",
    shortUrl:    "https://short.ly/zW2jKx",
    originalUrl: "https://redis.io/docs/latest/develop/connect",
    clicks: 33,
    createdAt: "Jun 30, 2025",
  },
  {
    id: "5",
    shortCode:   "pL5tYh",
    shortUrl:    "https://short.ly/pL5tYh",
    originalUrl: "https://docs.docker.com/compose/compose-file",
    clicks: 21,
    createdAt: "Jun 29, 2025",
  },
];

function truncate(url, max = 42) {
  const clean = url.replace(/^https?:\/\//, "");
  return clean.length > max ? `${clean.slice(0, max)}…` : clean;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
        copied
          ? "text-emerald-400 bg-emerald-500/10"
          : "text-slate-400 hover:text-white hover:bg-slate-700"
      }`}
    >
      {copied ? <FiCheck size={12} /> : <FiCopy size={12} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function RecentUrlsTable() {
  const [urls, setUrls] = useState(MOCK_URLS);

  function handleDelete(id) {
    setUrls((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
      {/* Table header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">
        <div>
          <h2 className="text-sm font-semibold text-white">Recent URLs</h2>
          <p className="text-xs text-slate-500 mt-0.5">{urls.length} short links</p>
        </div>
        <button className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
          + Create
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/40">
              {["Short URL", "Original URL", "Clicks", "Created", "Actions"].map(
                (col, i) => (
                  <th
                    key={col}
                    className={`px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap ${
                      i === 4 ? "text-right" : "text-left"
                    }`}
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {urls.map((url, idx) => (
              <tr
                key={url.id}
                className={`hover:bg-slate-700/20 transition-colors ${
                  idx < urls.length - 1 ? "border-b border-slate-700/30" : ""
                }`}
              >
                {/* Short URL */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-blue-400 font-mono">
                      {url.shortCode}
                    </span>
                    <a
                      href={url.shortUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 hover:text-slate-300 transition-colors"
                    >
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </td>

                {/* Original URL */}
                <td className="px-5 py-3.5 max-w-xs">
                  <span className="text-sm text-slate-400 font-mono block truncate">
                    {truncate(url.originalUrl)}
                  </span>
                </td>

                {/* Clicks */}
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-slate-200">
                    {url.clicks.toLocaleString()}
                  </span>
                </td>

                {/* Created */}
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className="text-sm text-slate-500">{url.createdAt}</span>
                </td>

                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    <CopyButton text={url.shortUrl} />
                    <button
                      onClick={() => handleDelete(url.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <FiTrash2 size={12} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {urls.length === 0 && (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <FiInbox size={32} className="text-slate-700 mb-3" />
            <p className="text-sm font-medium text-slate-500">No URLs yet</p>
            <p className="text-xs text-slate-600 mt-1">Create your first short link to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}