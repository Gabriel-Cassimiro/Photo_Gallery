import React from "react"
import Image from "next/image"

import { Photos } from "../../context/SearchContext"

interface ImageCardProps {
	image: Photos
}

export const ImageCard = ({ image }: ImageCardProps) => {
	return (
		<div className="max-w-sm rounded  shadow-lg">
			<Image
				src={image.src.original}
				height={image.height}
				width={image.width}
				alt={"Photos take from Pexels api"}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by {image.photographer}
				</div>
			</div>
		</div>
	)
}
