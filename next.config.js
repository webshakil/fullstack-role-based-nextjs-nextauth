/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
      API_URL: "http://localhost:3000",
    
      
      NEXTAUTH_URL:"http://localhost:3000"
  },
  images: {
      domains: ["res.cloudinary.com"],
    },
};

module.exports = nextConfig;
