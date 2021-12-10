import Image from "next/image"

import React, { useState } from "react"
import { Photos } from "../../context/SearchContext"
import { SelectImageSize } from "../SelectImageSize"

interface ImageCardProps {
	image: Photos
}

export function ImageCard({ image }: ImageCardProps) {
	const [imageSrc, setImageSrc] = useState(image.src.original)
	const imageHeight = image.height / 3
	const imageWidth = image.width / 3

	const imageLink = () => {
		return <a href={image.photographer_url}>{image.photographer}</a>
	}

	return (
		<div>
			<Image
				src={imageSrc}
				height={imageHeight}
				width={imageWidth}
				alt={`Photo by ${image.photographer}`}
				title="Click Photo to open Gallery"
				className="w-full cursor-pointer bg-teal-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
			/>
		</div>
	)
}
