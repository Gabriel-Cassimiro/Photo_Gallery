/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { LoaderIcon } from "./index"

describe("Test Loading component", () => {
	it("Should render correctly", () => {
		const { container } = render(<LoaderIcon />)
		expect(container).toMatchSnapshot()
	})
})
