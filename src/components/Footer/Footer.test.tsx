/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { Footer } from "./index"

describe("Test Footer component", () => {
	it("Should render correctly", () => {
		const { container } = render(<Footer />)
		expect(container).toMatchSnapshot()
	})
})
