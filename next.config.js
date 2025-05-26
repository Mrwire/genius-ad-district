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
    // Désactiver le format WebP pour accélérer le build
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configuration du compilateur
  compiler: {
    styledComponents: true,
    // Activer la minification SWC
    swcMinify: true,
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
    // Activer le cache des modules
    swcFileReading: true,
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
  
  // Optimisation du cache Webpack
  webpack: (config, { isServer, dev }) => {
    // Utiliser le cache en développement
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