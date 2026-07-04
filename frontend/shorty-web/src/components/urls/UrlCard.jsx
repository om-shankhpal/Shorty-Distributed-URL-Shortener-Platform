import {
  FiCopy,
  FiExternalLink,
  FiBarChart2,
  FiTrash2,
  FiCheck,
  FiCalendar,
  FiLink2,
} from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "../../utils/toast";
import { shortenOriginalUrl } from "../../utils/url";

export default function UrlCard({ url, onDelete }) {
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url.shortUrl);

    setCopied(true);

    showSuccess("Copied to clipboard.");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const createdDate = new Date(url.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Short URL */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <FiLink2 size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-white">
              {url.shortUrl}
            </h3>

            <p className="mt-1 text-sm text-slate-400" title={url.originalUrl}>
              {shortenOriginalUrl(url.originalUrl)}
            </p>
          </div>
        </div>
      </div>

      {/* Created */}

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <FiCalendar size={15} />
        Created on {createdDate}
      </div>

      {/* Divider */}

      <div className="my-6 border-t border-slate-800"></div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {/* Copy */}

        <button
          onClick={copyUrl}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium transition hover:bg-blue-500"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? "Copied" : "Copy"}
        </button>

        {/* Open */}

        <a
          href={url.shortUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 transition hover:bg-slate-800"
        >
          <FiExternalLink />
          Open
        </a>

        {/* Analytics */}

        <button
          onClick={() => navigate(`/dashboard/analytics/${url.id}`)}
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-3 transition hover:bg-slate-800"
        >
          <FiBarChart2 />
          Analytics
        </button>

        {/* Delete */}

        <button
          onClick={() => onDelete(url.id)}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-500/30 px-4 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          <FiTrash2 />
          Delete
        </button>
      </div>
    </div>
  );
}
