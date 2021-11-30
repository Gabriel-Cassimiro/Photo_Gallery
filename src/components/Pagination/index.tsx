import { useSearchContext } from "../../context/SearchContext"

export function Pagination() {
	const { nextPage, prevPage, setCurrentUrl } = useSearchContext()

	return (
		<div className="flex justify-center">
			{prevPage ? (
				<button
					className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					onClick={() => setCurrentUrl(prevPage)}
				>
					Previous
				</button>
			) : (
				""
			)}
			{nextPage ? (
				<button
					className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					onClick={() => setCurrentUrl(nextPage)}
				>
					Next
				</button>
			) : (
				""
			)}
		</div>
	)
}
