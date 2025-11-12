/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow production builds even if there are TypeScript type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
