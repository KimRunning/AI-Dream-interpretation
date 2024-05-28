/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // 모든 경로를 포함
        destination: "https://www.dreaminterpretationai.com/:path*", // 새 도메인으로 리다이렉트
        permanent: true, // 301 리다이렉트를 위해 true로 설정
        has: [
          {
            type: "host",
            value: "www.dreaminterpretaion.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
