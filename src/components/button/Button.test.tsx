import { render, screen } from "@testing-library/react"
import Button from "./Button"

test("Button renders corectly", () => {
  render(
    <Button displayText="FooBar" executeOnClick={() => console.log("f")} />
  )
  const textElement = screen.getByText(/foobar/i)

  expect(textElement).toBeInTheDocument()

  // const linkElement = screen.getByText(/learn react/i)
  // console.log('This is linkElement', linkElement)
  // expect(linkElement).toBeInTheDocument()
})
