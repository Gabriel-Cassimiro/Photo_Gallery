import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchContextProvider } from "../context/SearchContext"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SearchContextProvider>
			<div className="bg-gray-300">
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
		</SearchContextProvider>
	)
}

export default MyApp
