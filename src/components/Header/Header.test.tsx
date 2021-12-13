/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { Header } from "./index"
import { TestProvider } from "../../tests/utils"

describe("Test Header component", () => {
	function Element() {
		return (
			<TestProvider>
				<Header />
			</TestProvider>
		)
	}

	it("Should render correctly", () => {
		const { container } = render(<Element />)
		expect(container).toMatchSnapshot()
	})
})
