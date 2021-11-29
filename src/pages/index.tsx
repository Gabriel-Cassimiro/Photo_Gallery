import axios from "axios"
import React, { useState, useEffect } from "react"
import { ImageCard } from "../components/ImageCard"

import { useSearchContext } from "../context/SearchContext"

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

interface Data {
	next_page: string
	page: number
	per_page: number
	photos: Photos[]
	total_results: number
}

export default function Home() {
	const { term } = useSearchContext()
	const [images, setImages] = useState<Photos[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		const url = "https://api.pexels.com/v1/curated?&page=1&per_page=5"
		//const url = currentUrl + "&page=" + search + "&per_page=" + perPage
		async function fetchPhotos() {
			await axios
				.get<Data>(url, {
					headers: {
						Authorization: process.env.PEXELS_API_KEY as string
					}
				})
				.then(response => {
					setImages(response.data.photos)
					setIsLoading(false)
				})
				.catch(err =>
					console.log(err, "There was a problem loading the images")
				)
		}
		fetchPhotos()
		controller.abort()
	}, [term])

	return (
		<div className="container mx-auto">
			{!isLoading && images.length === 0 && (
				<h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
			)}

			{isLoading ? (
				<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{images.map(image => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	)
}
