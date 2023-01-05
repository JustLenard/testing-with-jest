import { screen } from '@testing-library/react'
import CounterAplication from './CounterAplication'
import user from '@testing-library/user-event'
import { render } from '../../test-utils'

describe('Counter Aplication', () => {
	it('exists', () => {
		render(<CounterAplication />)

		const heading = screen.getByRole('heading')
		expect(heading).toBeInTheDocument()

		const incrementButton = screen.getByRole('button', {
			name: 'Click me',
		})
		expect(incrementButton).toBeInTheDocument()
	})

	it('has initial state is 0', () => {
		render(<CounterAplication />)
		const heading = screen.getByRole('heading')
		expect(heading).toHaveTextContent('0')
	})

	it('render 1 after clicking the increment button', async () => {
		// user.setup()
		render(<CounterAplication />)
		const incrementButton = screen.getByRole('button', {
			name: 'Click me',
		})
		await user.click(incrementButton)

		const heading = screen.getByRole('heading')
		expect(heading).toHaveTextContent('1')
	})

	it('renders 100 after clicking the increment button', async () => {
		// user.setup()
		render(<CounterAplication />)
		const incrementButton = screen.getByRole('button', {
			name: 'Click me',
		})

		for (let i = 0; i < 5; i++) {
			await user.dblClick(incrementButton)
		}

		const heading = screen.getByRole('heading')
		expect(heading).toHaveTextContent('10')
	})

	it('renders 10 after clicking the set button', async () => {
		render(<CounterAplication />)

		const amountInput = screen.getByRole('spinbutton')
		await user.type(amountInput, '10')
		expect(amountInput).toHaveValue(10)

		const button = screen.getByRole('button', {
			name: 'set',
		})
		await user.click(button)

		const heading = screen.getByRole('heading')
		expect(heading).toHaveTextContent('10')
	})

	it('finds the corect themed text', () => {
		render(<CounterAplication />)

		const darkText = screen.getByTestId('themed-text')
		expect(darkText).toBeInTheDocument()
		expect(darkText).toHaveTextContent(/dark text/i)
	})
})
