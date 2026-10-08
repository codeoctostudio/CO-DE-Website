/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.co-deacademy.com",
        pathname: "/api/Blogs_Image/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "https://admin.co-deacademy.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
