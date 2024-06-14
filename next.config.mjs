/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/**',
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
