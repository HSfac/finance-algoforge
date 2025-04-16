/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint 검사는 활성화하되, 빌드 실패를 방지합니다.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript 오류로 인한 빌드 실패를 방지합니다.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 