import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect
} from "react"

interface SearchContextProps {
	currentUrl: string
	setCurrentUrl: React.Dispatch<React.SetStateAction<string>>
	nextPage: string
	setNext: React.Dispatch<React.SetStateAction<string>>
	prevPage: string
	setPrevious: React.Dispatch<React.SetStateAction<string>>
	pages: number
	perPage: number
}

interface SearchContextProviderProps {
	children: ReactNode
}

const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({
	children
}: SearchContextProviderProps) {
	const [pages, setPages] = useState(1)
	const [perPage, setPerPage] = useState(3)
	const [nextPage, setNext] = useState("")
	const [prevPage, setPrevious] = useState("")
	const [currentUrl, setCurrentUrl] = useState(
		`https://api.pexels.com/v1/curated?&page=${pages}&per_page=${perPage}`
	)

	return (
		<SearchContext.Provider
			value={{
				currentUrl,
				setCurrentUrl,
				nextPage,
				setNext,
				prevPage,
				setPrevious,
				pages,
				perPage
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}

export function useSearchContext() {
	return useContext(SearchContext)
}
