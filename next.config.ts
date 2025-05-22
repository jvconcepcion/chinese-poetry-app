import type { NextConfig } from 'next';
import i18nConfig from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...i18nConfig,
};

export default nextConfig;