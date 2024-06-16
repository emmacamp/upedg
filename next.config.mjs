/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
            //https://xsgames.co/randomusers/avatar.php?g=pixel
            {
                protocol: 'https',
                hostname: 'xsgames.co',
                port: '',
                pathname: '/randomusers/avatar.php',
            },
        ],
    }
};

export default nextConfig;
