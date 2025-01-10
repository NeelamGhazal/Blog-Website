const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com", // Add this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Add this if using other Unsplash URLs
      },
    ],
  },
};

export default nextConfig;
