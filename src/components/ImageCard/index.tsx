import React from "react"
import Image from "next/image"

import { Photos } from "../../pages/index"

interface ImageCardProps {
	image: Photos
}

export const ImageCard = ({ image }: ImageCardProps) => {
	const propertyValues = Object.values(image.src)

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<Image
				src={image.src.original}
				height={image.height}
				width={image.width}
				alt={""}
				className="w-full"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">
					Photo by {image.photographer}
				</div>
			</div>
			<div className="px-6 py-4"></div>
		</div>
	)
}
