import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiLink,
} from "react-icons/fi";

import { createShortUrl } from "../../services/urlService";

export default function CreateUrl() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [urlResponse, setUrlResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    if (!originalUrl.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await createShortUrl({
        originalUrl,
      });

      setUrlResponse(response);
      setOriginalUrl("");

    } catch (err) {
      console.error(err);
      setError("Unable to generate short URL.");
    } finally {
      setLoading(false);
    }
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(urlResponse.shortUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Create Short URL
        </h1>

        <p className="text-slate-400 mt-2">
          Generate a secure and shareable short link instantly.
        </p>

      </div>

      {/* Form */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <label className="block text-sm font-medium text-slate-300 mb-3">
          Original URL
        </label>

        <div className="relative">

          <FiLink
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            type="url"
            placeholder="https://example.com"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 outline-none focus:border-blue-500 transition"
          />

        </div>

        {error && (
          <p className="mt-3 text-red-400 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500 disabled:opacity-70 transition"
        >
          {loading ? "Generating..." : "Generate Short URL"}
        </button>

      </div>

      {/* Result */}

      {urlResponse && (

        <div className="mt-8 rounded-2xl border border-green-500/20 bg-slate-900 p-8">

          <h2 className="text-2xl font-bold text-green-400">
            Your Short URL is Ready!
          </h2>

          <p className="mt-2 text-slate-400">
            Share this link anywhere.
          </p>

          <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-5">

            <a
              href={urlResponse.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="break-all font-mono text-blue-400 hover:underline"
            >
              {urlResponse.shortUrl}
            </a>

          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">

            <button
              onClick={copyUrl}
              className="flex-1 rounded-xl bg-blue-600 py-3 hover:bg-blue-500 transition font-semibold flex justify-center items-center gap-2"
            >
              {copied ? (
                <>
                  <FiCheck />
                  Copied
                </>
              ) : (
                <>
                  <FiCopy />
                  Copy URL
                </>
              )}
            </button>

            <a
              href={urlResponse.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl border border-slate-700 py-3 hover:bg-slate-800 transition font-semibold flex justify-center items-center gap-2"
            >
              <FiExternalLink />
              Open URL
            </a>

          </div>

        </div>

      )}

    </div>
  );
}