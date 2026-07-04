export function shortenUrl(url, maxLength = 70) {
  if (!url) return "";

  if (url.length <= maxLength) {
    return url;
  }

  return `${url.substring(0, maxLength)}...`;
}