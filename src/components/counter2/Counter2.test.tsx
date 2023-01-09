import { render, screen } from '@testing-library/react'
import Counter2 from './Counter2'
import user from '@testing-library/user-event'

describe('Counter2', () => {
  it('is rendering corectly', () => {
    render(<Counter2 count={5} />)
    const count = screen.getByTestId('count')
    expect(count).toHaveTextContent('5')
  })

  it('has buttons', () => {
    const handleDecrement = jest.fn()
    const handleIncrement = jest.fn()

    render(
      <Counter2
        count={5}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    )
    const count = screen.getByTestId('count')
    expect(count).toHaveTextContent('5')

    const incrementButton = screen.queryByRole('button', {
      name: 'Incremnet',
    })
    expect(incrementButton).toBeInTheDocument()

    const decrementButton = screen.queryByRole('button', {
      name: 'Decrement',
    })
    expect(decrementButton).toBeInTheDocument()
  })

  it('buttons are clickable', async () => {
    const handleDecrement = jest.fn()
    const handleIncrement = jest.fn()

    render(
      <Counter2
        count={5}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    )
    const count = screen.getByTestId('count')
    expect(count).toHaveTextContent('5')

    const incrementButton = screen.getByRole('button', {
      name: 'Incremnet',
    })
    user.click(incrementButton)

    const decrementButton = screen.getByRole('button', {
      name: 'Decrement',
    })
    user.click(decrementButton)

    expect(decrementButton).toBeDisabled()

    expect(handleDecrement).toHaveBeenCalledTimes(1)
    expect(handleIncrement).toHaveBeenCalledTimes(1)
  })
})
