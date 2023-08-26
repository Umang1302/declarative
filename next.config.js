/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://api.emailjs.com/:path*',
  //     },
  //   ]
  // }
};

module.exports = nextConfig;
