import React from "react"
import { SearchContextProvider } from "../context/SearchContext"

export const TestProvider: React.FC = ({ children }) => {
	return <SearchContextProvider>{children}</SearchContextProvider>
}
