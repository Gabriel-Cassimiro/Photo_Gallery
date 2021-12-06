import { useEffect } from "react"
import "tailwindcss/tailwind.css"
import { NextSeo } from "next-seo"
import type { AppProps } from "next/app"
import SimpleReactLightbox from "simple-react-lightbox"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchContextProvider } from "../context/SearchContext"
import SEO from "../next-seo.config"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		document.getElementById("__next")!.className = "h-full"
	}, [])

	return (
		<SearchContextProvider>
			<div className=" h-full flex flex-col justify-between">
				<NextSeo {...SEO} />
				<Header />
				<SimpleReactLightbox>
					<Component {...pageProps} />
				</SimpleReactLightbox>
				<Footer />
			</div>
		</SearchContextProvider>
	)
}

export default MyApp
