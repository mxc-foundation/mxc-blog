import React from "react"
import { render } from "@testing-library/react"
// eslint-disable-next-line import/no-named-as-default
import { PureCategories } from "../Categories"

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
      {
        slug: "sampleSlug",
        category: "sampleCategory",
        zhtwCategory: "sampleTwCategory",
        zhtwSlug: "sampleTwSlug",
        koCategory: "sampleKoCategory",
        koSlug: "sampleKoSlug",
        zhchCategory: "sampleZhCategory",
        zhchSlug: "sampleZhSlug",
      },
    ],
  },
}

test("renders and maps english categories with dummy data", () => {
  const { getByText } = render(<PureCategories data={data} url={"/"} />)
  const enCheck = getByText("Events")
  const enCheck2 = getByText("sampleCategory")
  // eslint-disable-next-line no-unused-expressions
  expect(enCheck).toBeInTheDocument
  expect(enCheck2).toBeInTheDocument
})

test("Renders and maps Korean Categories with dummy data", () => {
  const { getByText } = render(<PureCategories data={data} url={"/ko"} />)
  const koCheck = getByText("행사")
  const koCheck2 = getByText("sampleKoCategory")

  expect(koCheck).toBeInTheDocument
  expect(koCheck2).toBeInTheDocument
})

test("Renders and maps zhCH Categories with dummy data", () => {
  const { getByText } = render(<PureCategories data={data} url={"/zh-hans"} />)
  const zhChCheck = getByText("活动")
  const zhChCheck2 = getByText("sampleZhCategory")

  expect(zhChCheck).toBeInTheDocument
  expect(zhChCheck2).toBeInTheDocument
})

test("Renders and maps zhCH Categories with dummy data", () => {
  const { getByText } = render(<PureCategories data={data} url={"/zh-hant"} />)
  const zhTwCheck = getByText("活動")
  const zhTwCheck2 = getByText("sampleTwCategory")

  expect(zhTwCheck).toBeInTheDocument
  expect(zhTwCheck2).toBeInTheDocument
})
