/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["www.pexels.com", "images.pexels.com"]
	},
	env: {
		PEXELS_API_KEY: process.env.PEXELS_API_KEY
	}
}
