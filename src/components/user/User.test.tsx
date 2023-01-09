import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { testUserArr } from "../../mocks/handlers"
import { server } from "../../mocks/server"
import User from "./User"

describe("Api", () => {
  test("User exists", () => {
    render(<User />)
    const userHeading = screen.getByRole("heading")
    expect(userHeading).toBeInTheDocument()
  })

  test("renders a list of users", async () => {
    render(<User />)
    const users = await screen.findAllByRole("listitem")
    expect(users).toHaveLength(testUserArr.length)
  })

  test("displays error", async () => {
    render(<User />)
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )

    const error = await screen.findByTestId("api-error")
    expect(error).toBeInTheDocument()
  })
})
