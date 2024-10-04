/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com'],
    },
    env: {
        NEXT_PUBLIC_SANITY_API_READ_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
    },
};

export default nextConfig;
