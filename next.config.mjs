/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
            ? { exclude: ['error', 'warn'] }
            : false,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
    webpack(config) {
        // Suppress Swiper CSS nesting warnings that pollute build output
        config.ignoreWarnings = [
            { message: /Nested CSS was detected/ },
        ]
        return config
    },
}

export default nextConfig
