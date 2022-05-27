/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
	},
}

module.exports = nextConfig
