/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"
import { TestProvider } from "../../tests/utils"

import { ImageCard, ImageCardProps } from "./index"
import { photo } from "../../tests/mocks/image.mock"

describe("Test ImageCard component", () => {
	function Element({ image }: ImageCardProps) {
		return (
			<TestProvider>
				<ImageCard image={image} />
			</TestProvider>
		)
	}

	it("Should render correctly", () => {
		const { container } = render(<Element image={photo} />)
		expect(container).toMatchSnapshot()
	})
})
