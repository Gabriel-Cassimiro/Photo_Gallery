import React, { useState, useEffect } from "react"
import { SRLWrapper } from "simple-react-lightbox"

import { ImageCard } from "../components/ImageCard"
import { useSearchContext, Data } from "../context/SearchContext"
import { Pagination } from "../components/Pagination"
import { useFetch } from "../hooks/useGet"
import { Options } from "../utils/lightboxOptions"
import { LoaderIcon } from "../components/LoaderIcon"

export default function Home() {
	const { currentUrl, setImages, images } = useSearchContext()
	const { data, error } = useFetch<Data>(currentUrl)

	useEffect(() => {
		if (data) {
			setImages(data)
		}
	}, [data, setImages])

	if (error) {
		return (
			<div className="container mx-auto">
				<h2 className="text-5xl text-center mx-auto mt-32">
					Failed to load images
				</h2>
			</div>
		)
	}

	return (
		<div className=" py-2 px-12 ">
			{images.photos?.length === 0 && (
				<h2 className="text-5xl text-center mx-auto ">No Images Found</h2>
			)}

			{!data ? (
				<LoaderIcon />
			) : (
				<SRLWrapper options={Options}>
					<Pagination />
					<div className="columns-3xs gap-4 ">
						{console.log(currentUrl)}
						{images.photos?.map(image => (
							<ImageCard key={image.id} image={image} />
						))}
					</div>
				</SRLWrapper>
			)}
		</div>
	)
}
