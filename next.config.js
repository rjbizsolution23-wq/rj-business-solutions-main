/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['storage.googleapis.com', 'lh3.googleusercontent.com'],
  },
  env: {
    BUSINESS_NAME: 'RJ Business Solutions',
    BUSINESS_OWNER: 'Rick Jefferson',
    BUSINESS_EMAIL: 'rjbizsolution23@gmail.com',
    BUSINESS_PHONE: '945-308-8003',
    BUSINESS_ADDRESS: '1342 NM 333, Tijeras, New Mexico 87059',
    BUSINESS_WEBSITE: 'https://rickjeffersonsolutions.com',
    LINKEDIN_URL: 'https://linkedin.com/in/rick-jefferson-314998235',
    TIKTOK_URL: 'https://www.tiktok.com/@rick_jeff_solution',
    GITHUB_URL: 'https://github.com/rjbizsolution23-wq',
  },
}

module.exports = nextConfig