import React from "react"
import Image from "next/image"

import { Photos } from "../../context/SearchContext"

interface ImageCardProps {
	image: Photos
}

export const ImageCard = ({ image }: ImageCardProps) => {
	return (
		<div className="max-w-sm  rounded  shadow-lg">
			<Image
				src={image.src.original}
				height={450}
				width={450}
				alt={`Photo by ${image.photographer}`}
				className=" object-cover"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					<a href={image.photographer_url}>Photo by {image.photographer}</a>
				</div>
			</div>
		</div>
	)
}
