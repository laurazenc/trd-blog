export function getStrapiMedia(url: string) {
  if (url == null) {
    return null;
  }

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}
