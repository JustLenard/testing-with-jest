import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounterHook"

describe("checking custom hooks", () => {
  it("should render the initial count", () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  it("should accpet and render the same initial values", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  it("should increment the counter", () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  it("should decrement the counter", () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
