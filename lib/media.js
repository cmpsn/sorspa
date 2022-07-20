export function getApiURL(path='') {
  return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
}

export function getMediaURL(media) {
  const imageUrl = media.url.startsWith("/") ? getApiURL(media.url) : media.url;
  return imageUrl;
}