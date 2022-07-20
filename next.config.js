const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SITE_URL}`],
    loader: "custom",
    path: "",
    deviceSizes: [640, 1024, 1840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
}
