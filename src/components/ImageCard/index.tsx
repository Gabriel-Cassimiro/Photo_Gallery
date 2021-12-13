import Image from "next/image"

import React, { useState } from "react"
import { Photos } from "../../context/SearchContext"

export interface ImageCardProps {
	image: Photos
}

export function ImageCard({ image }: ImageCardProps) {
	const [imageSrc, setImageSrc] = useState(image.src.original)

	return (
		<a href={image.photographer_url}>
			<Image
				src={imageSrc}
				height={image.height}
				width={image.width}
				alt={`Photo by ${image.photographer}`}
				title="Click Photo to open Gallery"
				layout="intrinsic"
				className="w-full cursor-pointer bg-teal-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
			/>
		</a>
	)
}
