import useSWR from "swr"
import axios from "axios"
import { useSearchContext } from "../context/SearchContext"

async function fetch(url: string) {
	const response = await axios.get(url, {
		headers: {
			Authorization: process.env.PEXELS_API_KEY as string
		}
	})
	return response.data
}

export function useFetch<Data>(url: string) {
	const { perPage } = useSearchContext()

	const { data, error } = useSWR<Data>(url + `&per_page=${perPage}`, fetch)

	return { data, error }
}
