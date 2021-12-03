import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchContextProvider } from "../context/SearchContext"
import { useEffect } from "react"
import SimpleReactLightbox from "simple-react-lightbox"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		document.getElementById("__next")!.className = "h-full"
	}, [])

	return (
		<SearchContextProvider>
			<div className=" h-full flex flex-col justify-between">
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
