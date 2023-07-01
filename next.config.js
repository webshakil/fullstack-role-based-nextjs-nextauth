/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
      API_URL: "http://localhost:3000",
      MONGODB_URL: "mongodb+srv://topu:Hphp2010f@mernstack-pagination.dmkoc.mongodb.net/fullstack-role-based-nextjs-nextauth?retryWrites=true&w=majority",
      NEXTAUTH_SECRET:"Coding with shakil",
      GOOGLE_CLIENT_ID:"707582940430-pgttavl8uvv6cb5gb686b37p2o0mbkv7.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET:"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",
      
      NEXTAUTH_URL:"http://localhost:3000"
  },
  images: {
      domains: ["res.cloudinary.com"],
    },
};

module.exports = nextConfig;
