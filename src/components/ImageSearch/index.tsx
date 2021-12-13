import React, { useState } from "react"
import { useSearchContext } from "../../context/SearchContext"

export function ImageSearch() {
	const { setCurrentUrl, setSearchTitle } = useSearchContext()
	const [text, setText] = useState("")

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setCurrentUrl(`https://api.pexels.com/v1/search?query=${text}&page=1`)
		setSearchTitle(text)
		setText("")
	}

	return (
		<div className="max-w-xs rounded overflow-hidden  ">
			<form onSubmit={handleSubmit} className="w-full max-w-sm">
				<div className="flex items-center border-b-2 border-teal-500 py-1">
					<input
						value={text}
						onChange={e => setText(e.target.value)}
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Search Photo Term..."
					/>
					<button
						className="shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	)
}
