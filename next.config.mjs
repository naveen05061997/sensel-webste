/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/workhour-meter', destination: '/solutions/work-hour-monitor', permanent: true },
      { source: '/fleet-solution', destination: '/solutions/rechargeable-asset-tracker', permanent: true },
      { source: '/solar-based-tracking-solution', destination: '/solutions/solar-powered-asset-tracker', permanent: true },
      { source: '/industrial-solution', destination: '/solutions/hazardous-cargo', permanent: true },
      { source: '/cement-solution', destination: '/solutions/cement-mining', permanent: true },
      { source: '/fleet-smart', destination: '/products/fleet-smart', permanent: true },
      { source: '/asset-smart', destination: '/products/asset-smart', permanent: true },
      { source: '/solar-tracker', destination: '/products/solar-tracker', permanent: true },
      { source: '/carrier', destination: '/careers', permanent: true },
      { source: '/blogs', destination: '/resources/blog', permanent: true },
      { source: '/videos', destination: '/resources/videos', permanent: true },
      { source: '/sensel-terms-of-use', destination: '/terms', permanent: true },
      { source: '/privacy-policy-sensel', destination: '/privacy-policy', permanent: true },
    ];
  },
};

export default nextConfig;
