/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { ImageSearch } from "./index"

describe("Test Search Box component", () => {
	it("Should render correctly", () => {
		const { container } = render(<ImageSearch />)
		expect(container).toMatchSnapshot()
	})
})
