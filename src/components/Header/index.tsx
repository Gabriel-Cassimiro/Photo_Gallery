import React from "react"
import { useSearchContext } from "../../context/SearchContext"
import { ImageSearch } from "../ImageSearch"

export function Header() {
	const { images, searchTitle } = useSearchContext()
	return (
		<nav className="flex  items-center justify-around  bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
			<div className="flex lg:w-auto w-full lg:border-b-0  pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
				<div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
					<span className="font-semibold text-xl tracking-tight">
						Photo Gallery
					</span>

					{images.photos?.length > 0 && searchTitle && (
						<span className="text-3xl ml-12 capitalize">
							{searchTitle} Images
						</span>
					)}
				</div>
			</div>
			<ImageSearch />
		</nav>
	)
}
