import React, { createContext, useState, useContext, ReactNode } from "react"

export interface Photos {
	id: number
	width: number
	height: number
	url: string
	photographer: string
	photographer_url: string
	photographer_id: number
	avg_color: string
	src: {
		original: string
		large2x: string
		large: string
		medium: string
		small: string
		portrait: string
		landscape: string
		tiny: string
	}
	liked: false
}

export interface Data {
	next_page: string
	prev_page: string
	page: number
	per_page: number
	photos: Photos[]
	total_results: number
}

interface SearchContextProps {
	currentUrl: string
	setCurrentUrl: React.Dispatch<React.SetStateAction<string>>
	images: Data
	setImages: React.Dispatch<React.SetStateAction<Data>>
	pages: number
	perPage: number
	setSearchTitle: React.Dispatch<React.SetStateAction<string>>
	searchTitle: string
}

interface SearchContextProviderProps {
	children: ReactNode
}

const SearchContext = createContext({} as SearchContextProps)

export function SearchContextProvider({
	children
}: SearchContextProviderProps) {
	const [images, setImages] = useState({} as Data)
	const [pages, setPages] = useState(1)
	const [perPage, setPerPage] = useState(3)
	const [searchTitle, setSearchTitle] = useState("")
	const [currentUrl, setCurrentUrl] = useState(
		`https://api.pexels.com/v1/curated?&page=${pages}&per_page=${perPage}`
	)

	return (
		<SearchContext.Provider
			value={{
				currentUrl,
				setCurrentUrl,
				pages,
				perPage,
				images,
				setImages,
				searchTitle,
				setSearchTitle
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}

export function useSearchContext() {
	return useContext(SearchContext)
}
