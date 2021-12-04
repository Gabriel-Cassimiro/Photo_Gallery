import React, { useState, useEffect } from "react"
import { SRLWrapper } from "simple-react-lightbox"

import { ImageCard } from "../components/ImageCard"
import { useSearchContext, Data } from "../context/SearchContext"
import { Pagination } from "../components/Pagination"
import { useFetch } from "../hooks/useGet"
import { Options } from "../utils/lightboxOptions"

export default function Home() {
	const { currentUrl, setImages, images } = useSearchContext()
	const { data, error } = useFetch<Data>(currentUrl)

	if (data) {
		setImages(data)
	}

	if (error) {
		return (
			<div className="container mx-auto">
				<h2 className="text-5xl text-center mx-auto mt-32">
					Falha ao carregar as imagens
				</h2>
			</div>
		)
	}

	return (
		<div className="container mx-auto">
			{images.photos?.length === 0 && (
				<h2 className="text-5xl text-center mx-auto ">No Images Found</h2>
			)}

			{!data ? (
				<h2 className="text-2xl text-center mx-auto mt-12">Loading...</h2>
			) : (
				<SRLWrapper options={Options}>
					<Pagination />
					<div className="grid grid-cols-4 gap-4">
						{images.photos?.map(image => (
							<ImageCard key={image.id} image={image} />
						))}
					</div>
				</SRLWrapper>
			)}
		</div>
	)
}
