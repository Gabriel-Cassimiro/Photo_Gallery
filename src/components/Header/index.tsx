import React from "react"
import { useSearchContext } from "../../context/SearchContext"
import { ImageSearch } from "../ImageSearch"
import Image from "next/image"
import { Select } from "../../components/Select"

export function Header() {
	const { images, searchTitle, setCurrentUrl, setSearchTitle } =
		useSearchContext()

	function resetPhotos() {
		setCurrentUrl(`https://api.pexels.com/v1/curated?&page=1`)
		setSearchTitle("Curated")
	}

	return (
		<nav className="flex  items-end justify-around bg-white py-4 px-12 shadow border-solid border-t-2 border-blue-700">
			<div className=" hidden sm:flex w-2/3 items-center shrink-0 gap-4  border-b-0 ">
				<Image
					src="/images/logo.svg"
					height="40"
					width="40"
					alt="Photo gallery logo"
				/>
				<button onClick={resetPhotos}>
					<span className="font-semibold text-xl ">Photo Gallery</span>
				</button>

				{images.photos?.length > 0 && searchTitle && (
					<span className="text-3xl ml-12 capitalize">
						{searchTitle} Photos
					</span>
				)}
				<Select />
			</div>
			<ImageSearch />
		</nav>
	)
}
