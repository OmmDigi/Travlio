/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source:
          "/international-tour-packages-from-kolkata-a-guide-to-explore-the-world",
        destination: "/blogs/best-international-tour-packages-from-kolkata",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
