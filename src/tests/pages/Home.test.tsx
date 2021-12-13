/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import Home from "../../pages/index"
import { TestProvider } from "../../tests/utils"

describe("Test Home component", () => {
	function Element() {
		return (
			<TestProvider>
				<Home />
			</TestProvider>
		)
	}

	it("Should render correctly", () => {
		const { container } = render(<Element />)
		expect(container).toMatchSnapshot()
	})
})
