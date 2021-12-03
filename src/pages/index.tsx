import axios from "axios"
import React, { useState, useEffect } from "react"

import { ImageCard } from "../components/ImageCard"
import { useSearchContext, Data } from "../context/SearchContext"
import { Pagination } from "../components/Pagination"
import { useFetch } from "../hooks/useGet"

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

	/* useEffect(() => {
		const controller = new AbortController()
		async function fetchPhotos() {
			await axios
				.get<Data>(currentUrl, {
					headers: {
						Authorization: process.env.PEXELS_API_KEY as string
					}
				})
				.then(response => {
					setImages(response.data)
					setIsLoading(false)
				})
				.catch(err =>
					console.log(err, "There was a problem loading the images")
				)
		}
		fetchPhotos()
		controller.abort()
	}, [currentUrl, setImages])
 */
	return (
		<div className="container mx-auto">
			<Pagination />

			{!data && images.photos?.length === 0 && (
				<h2 className="text-5xl text-center mx-auto mt-32">No Images Found</h2>
			)}

			{!data ? (
				<h2 className="text-5xl text-center mx-auto mt-32">Loading...</h2>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{images.photos?.map(image => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	)
}
