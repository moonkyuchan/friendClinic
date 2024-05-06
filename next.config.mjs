/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/gwangmyeong",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
