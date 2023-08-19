/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
