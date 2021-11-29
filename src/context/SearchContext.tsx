import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect
} from "react"

interface SearchContextProps {
	term: string
	setTerm: React.Dispatch<React.SetStateAction<string>>
}

interface SearchContextProviderProps {
	children: ReactNode
}

const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({
	children
}: SearchContextProviderProps) {
	const [term, setTerm] = useState("")

	return (
		<SearchContext.Provider value={{ term, setTerm }}>
			{" "}
			{children}{" "}
		</SearchContext.Provider>
	)
}

export function useSearchContext() {
	return useContext(SearchContext)
}
