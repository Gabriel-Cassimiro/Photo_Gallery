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
		<>
			{/* <SelectImageSize image={image.src} setImageSrc={setImageSrc} /> */}
			<Image
				src={imageSrc}
				height={450}
				width={450}
				alt={`Photo by ${image.photographer}`}
				title="Click Photo to open Gallery"
				className={`w-full object-cover cursor-pointer bg-[${image.avg_color}] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
			/>
		</>
	)
}
