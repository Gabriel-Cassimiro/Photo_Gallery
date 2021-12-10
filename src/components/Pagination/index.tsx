import { useSearchContext } from "../../context/SearchContext"
import { Select } from "../Select"

export function Pagination() {
	const { setCurrentUrl, images } = useSearchContext()
	const { prev_page, next_page } = images

	return (
		<div className="flex justify-center my-2 gap-2">
			{prev_page ? (
				<button
					className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					onClick={() => setCurrentUrl(prev_page)}
				>
					Prev
				</button>
			) : (
				""
			)}
			{next_page ? (
				<button
					className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					onClick={() => setCurrentUrl(next_page)}
				>
					Next
				</button>
			) : (
				""
			)}
		</div>
	)
}
