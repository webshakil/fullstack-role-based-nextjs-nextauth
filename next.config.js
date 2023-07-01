/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
      API_URL: "http://localhost:3000",
    
      MONGODB_URL,
      NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      NEXTAUTH_URL:"http://localhost:3000"
  },
  images: {
      domains: ["res.cloudinary.com"],
    },
};

module.exports = nextConfig;
