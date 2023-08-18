/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.emailjs.com/:path*',
      },
    ]
  },
  // output: "export",
};

module.exports = nextConfig;
