/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		remotePatterns: [
			{
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sharenotoparty.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.sharenotoparty.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
