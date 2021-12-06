import React from "react"
import { useSearchContext } from "../../context/SearchContext"
import { ImageSearch } from "../ImageSearch"
import Image from "next/image"

export function Header() {
	const { images, searchTitle } = useSearchContext()
	return (
		<nav className="flex  items-end justify-around  bg-white py-2 px-12 shadow border-solid border-t-2 border-blue-700">
			<div className="flex lg:w-auto w-full lg:border-b-0  border-solid border-b-2 border-gray-300">
				<div className="flex items-end flex-shrink-0 text-gray-800 mr-16 gap-4">
					<Image
						src="/images/logo.svg"
						height="40"
						width="40"
						alt="Photo gallery logo"
					/>
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
