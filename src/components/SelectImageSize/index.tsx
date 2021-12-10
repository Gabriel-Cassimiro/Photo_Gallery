import React from "react"
import { Photos } from "../../context/SearchContext"

interface SelectImageSizeProps {
	image: Photos["src"]
	setImageSrc: React.Dispatch<React.SetStateAction<string>>
}

export function SelectImageSize({ image, setImageSrc }: SelectImageSizeProps) {
	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setImageSrc(event.target.value as string)
	}
	return (
		<div>
			<select
				className=" w-full font-bold border border-gray-200 text-gray-700 py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="change-size"
				onChange={handleChange}
				defaultValue={image.original}
			>
				<option value={image.original}>Original</option>
				<option value={image.landscape}>Landscape</option>
				<option value={image.large2x}>Large</option>
				<option value={image.medium}>Medium</option>
				<option value={image.portrait}>Portrait</option>
				<option value={image.small}>Small</option>
			</select>
		</div>
	)
}
