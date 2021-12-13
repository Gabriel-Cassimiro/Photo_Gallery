/**
 * @jest-environment jsdom
 */
import React from "react"
import { render } from "@testing-library/react"
import { Select } from "./index"
import { TestProvider } from "../../tests/utils"

describe("Test Select component", () => {
	function Element() {
		return (
			<TestProvider>
				<Select />
			</TestProvider>
		)
	}

	it("Should render correctly", () => {
		const { container } = render(<Element />)
		expect(container).toMatchSnapshot()
	})
})
