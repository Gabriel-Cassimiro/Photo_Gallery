import { useSearchContext } from "../../context/SearchContext"

export function Select() {
	const { setPerPage, perPage } = useSearchContext()

	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setPerPage(event.target.value as string)
	}

	return (
		<div className="w-auto ml-auto">
			<label
				className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				htmlFor="select-pages"
			>
				Photos per page
			</label>
			<select
				className=" w-full font-bold border border-gray-200 text-gray-700 py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="select-pages"
				onChange={handleChange}
				defaultValue={perPage}
			>
				<option value="5">5</option>
				<option value="15">15</option>
				<option value="30">30</option>
				<option value="60">60</option>
				<option value="80">80</option>
			</select>
		</div>
	)
}
