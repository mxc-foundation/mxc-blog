import React from "react"
import { render } from "@testing-library/react"
// eslint-disable-next-line import/no-named-as-default
import { PureCategories } from "../Categories"

test("renders categories with dummy data", () => {
  const data = {
    categories: {
      nodes: [
        {
          slug: "events",
          category: "Events",
          zhtwCategory: "活動",
          zhtwSlug: "活動",
          koCategory: "행사",
          koSlug: "행사",
          zhchCategory: "活动",
          zhchSlug: "活动",
        },
      ],
    },
  }
  const { getByText } = render(<PureCategories data={data} />)
  const check = getByText("Events")
  // eslint-disable-next-line no-unused-expressions
  expect(check).toBeInTheDocument
})
