import { render, screen } from '@testing-library/react'
import Application from './Application'

describe('Applicatoin', () => {
	test('exists', () => {
		render(<Application />)

		const customElement = screen.getByTestId('custom-element')
		expect(customElement).toBeInTheDocument()

		const pageHeading = screen.getByRole('heading', { level: 1 })
		expect(pageHeading).toBeInTheDocument()

		const sectionHeading = screen.getByRole('heading', { level: 2 })
		expect(sectionHeading).toBeInTheDocument()

		const firstName = screen.getByRole('textbox', { name: 'first name' })
		expect(firstName).toBeInTheDocument()

		const lastName = screen.getByRole('textbox', { name: 'last name' })
		expect(lastName).toBeInTheDocument()

		const combobox = screen.getByRole('combobox')
		expect(combobox).toBeInTheDocument()

		const termsElement = screen.getByRole('checkbox')
		expect(termsElement).toBeInTheDocument()

		const submitButtonElement = screen.getByRole('button', {
			name: 'submit',
		})
		expect(submitButtonElement).toBeInTheDocument()
	})

	test('button', () => {
		render(<Application />)
		const clickMeButtonExists = screen.getByRole('button', {
			name: 'Click me',
		})
		expect(clickMeButtonExists).toBeInTheDocument()
	})

	test('not submited', () => {
		render(<Application />)
		const clickMeButtonExists = screen.getByText('Not submited')
		expect(clickMeButtonExists).toBeInTheDocument()
	})

	test('submited', () => {
		render(<Application />)
		const clickMeButtonExists = screen.queryByText('submitted')
		expect(clickMeButtonExists).not.toBeInTheDocument()
	})
})
