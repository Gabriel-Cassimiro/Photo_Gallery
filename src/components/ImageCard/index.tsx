import Image from "next/image"

import React, { useState } from "react"
import { Photos } from "../../context/SearchContext"
import { SelectImageSize } from "../SelectImageSize"

interface ImageCardProps {
	image: Photos
}

export function ImageCard({ image }: ImageCardProps) {
	const [imageSrc, setImageSrc] = useState(image.src.original)

	return (
		<div className=" rounded  shadow-lg">
			<SelectImageSize image={image.src} setImageSrc={setImageSrc} />
			<Image
				src={imageSrc}
				height={450}
				width={450}
				alt={`Photo by ${image.photographer}`}
				title="Click Photo to open Gallery"
				className=" object-cover cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					<a href={image.photographer_url}>Photo by {image.photographer}</a>
				</div>
			</div>
		</div>
	)
}
