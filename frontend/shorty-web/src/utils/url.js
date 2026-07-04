export function shortenOriginalUrl(url, maxLength = 65) {
  try {
    const parsed = new URL(url);

    const preview =
      parsed.hostname.replace("www.", "") +
      parsed.pathname +
      parsed.search;

    return preview.length > maxLength
      ? preview.substring(0, maxLength) + "..."
      : preview;
  } catch {
    return url.length > maxLength
      ? url.substring(0, maxLength) + "..."
      : url;
  }
}