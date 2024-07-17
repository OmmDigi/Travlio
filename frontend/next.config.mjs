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
      {
        source: "/tour-packages/domestic-tour",
        destination: "/tours?tour-type=Domestic+Tour",
        permanent: true,
      },
      {
        source: "/tour-packages/international-tour",
        destination: "/tours?tour-type=International+Tour",
        permanent: true,
      },
      {
        source: "/tour-packages/all",
        destination: "/tours",
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
