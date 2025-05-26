/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configuration du compilateur
  compiler: {
    styledComponents: true,
  },
  
  // Désactiver les source maps en production
  productionBrowserSourceMaps: false,
  
  // Mode strict React
  reactStrictMode: true,
  
  // Configuration expérimentale
  experimental: {
    serverComponentsExternalPackages: ['@sanity/client', 'next-sanity'],
    // Activer les transformations SWC
    forceSwcTransforms: true,
    // Optimiser le cache des packages
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui',
    ],
  },
  
  // Configuration du cache
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60 * 24, // 24h
    pagesBufferLength: 10,
  },
  
  // Configuration SWC (remplace swcMinify)
  swcMinify: true,
  
  // Configuration du cache Webpack
  webpack: (config, { isServer, dev }) => {
    // Utiliser le cache en production
    if (!isServer && !dev) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};

module.exports = withNextIntl(nextConfig);