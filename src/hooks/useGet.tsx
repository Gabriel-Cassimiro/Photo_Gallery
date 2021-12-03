import useSWR from "swr"
import axios from "axios"

export function useFetch<Data>(url: string) {
	const { data, error } = useSWR<Data>(url, async url => {
		const response = await axios.get(url, {
			headers: {
				Authorization: process.env.PEXELS_API_KEY as string
			}
		})
		return response.data
	})

	return { data, error }
}
