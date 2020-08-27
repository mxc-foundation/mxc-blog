import React from "react"
import { render } from "@testing-library/react"
import Footer from "../Footer"
import renderer from "react-test-renderer"

test("Footer renders with content", () => {
  const { getByText } = render(<Footer />)
  expect(getByText("YouTube")).toBeInTheDocument
})

it("renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
