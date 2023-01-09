import { render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Render Counter', () => {
  test('Counter renders corectly', () => {
    render(<Counter count={5} />)
    const textElement = screen.getByText(/5/i)

    expect(textElement).toBeInTheDocument()
  })
})
