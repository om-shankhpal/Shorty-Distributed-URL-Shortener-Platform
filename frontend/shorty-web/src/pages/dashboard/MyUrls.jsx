import { useEffect, useMemo, useState } from "react";
import { confirmDelete } from "../../utils/confirm";
import { showError, showSuccess } from "../../utils/toast";

import SearchBar from "../../components/urls/SearchBar";
import UrlCard from "../../components/urls/UrlCard";
import UrlSkeleton from "../../components/urls/UrlSkeleton";
import EmptyState from "../../components/urls/EmptyState";

import { getMyUrls, deleteUrl } from "../../services/urlService";

export default function MyUrls() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      setLoading(true);

      const response = await getMyUrls();

      setUrls(response);
    } catch (error) {
      console.error(error);
      showError("Failed to fetch URLs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = await confirmDelete();

    if (!confirmed) return;

    try {
      await deleteUrl(id);

      setUrls((prev) => prev.filter((url) => url.id !== id));

      showSuccess("URL deleted successfully.");
    } catch (error) {
      console.error(error);
      showError("Failed to delete URL");
    }
  };

  const filteredUrls = useMemo(() => {
    return urls.filter((url) => {
      const query = search.toLowerCase();

      return (
        url.shortUrl.toLowerCase().includes(query) ||
        url.originalUrl.toLowerCase().includes(query)
      );
    });
  }, [urls, search]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}

      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">My URLs</h1>

        <p className="mt-2 text-slate-400">
          Manage, organize and share all your shortened links.
        </p>
      </div>

      {/* Search */}

      <SearchBar value={search} onChange={setSearch} />

      {/* Loading */}

      {loading && (
        <div className="space-y-5">
          <UrlSkeleton />
          <UrlSkeleton />
          <UrlSkeleton />
        </div>
      )}

      {/* Empty */}

      {!loading && filteredUrls.length === 0 && <EmptyState />}

      {/* Cards */}

      {!loading && filteredUrls.length > 0 && (
        <div className="space-y-4 sm:space-y-5">
          {filteredUrls.map((url) => (
            <UrlCard key={url.id} url={url} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
