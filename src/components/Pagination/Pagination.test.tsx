/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { TestProvider } from "../../tests/utils"

import { Pagination } from "./index"

describe("Test Pagination component", () => {
	function Element() {
		return (
			<TestProvider>
				<Pagination />
			</TestProvider>
		)
	}

	it("Should render correctly", () => {
		const { container } = render(<Element />)
		expect(container).toMatchSnapshot()
	})
})
