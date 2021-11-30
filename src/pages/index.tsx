import axios from "axios"
import React, { useState, useEffect } from "react"

import { ImageCard } from "../components/ImageCard"
import { useSearchContext } from "../context/SearchContext"
import { Pagination } from "../components/Pagination"

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
	prev_page: string
	page: number
	per_page: number
	photos: Photos[]
	total_results: number
}

export default function Home() {
	const { setPrevious, setNext, currentUrl } = useSearchContext()
	const [images, setImages] = useState<Photos[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		async function fetchPhotos() {
			await axios
				.get<Data>(currentUrl, {
					headers: {
						Authorization: process.env.PEXELS_API_KEY as string
					}
				})
				.then(response => {
					setImages(response.data.photos)
					setPrevious(response.data.prev_page)
					setNext(response.data.next_page)
					setIsLoading(false)
				})
				.catch(err =>
					console.log(err, "There was a problem loading the images")
				)
		}
		fetchPhotos()
		controller.abort()
	}, [setNext, setPrevious, currentUrl])

	return (
		<div className="container mx-auto">
			{!isLoading && images.length === 0 && (
				<h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
			)}

			<Pagination />

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
