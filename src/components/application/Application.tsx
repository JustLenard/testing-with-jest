import { useState } from 'react'

interface Props {}

const Application: React.FC<Props> = () => {
	const [submitted, setSubmitted] = useState(false)
	return (
		<div>
			<h1>Job application form</h1>
			<h2>Section one</h2>

			{submitted ? <div>submitted</div> : <div>Not submited</div>}

			<div data-testid="custom-element">Custom Fancy component</div>
			<form>
				<div>
					<label htmlFor="firstName">first name</label>
					<input id="firstName" />
				</div>
				<div>
					<label htmlFor="lastName">last name</label>
					<input id="lastName" />
				</div>

				<div>
					<label htmlFor="job-location">Job Location</label>
					<select id="job-location">
						<option value="">Select a counr</option>
						<option value="US">US</option>
						<option value="Germany">Germany</option>
						<option value="Netherlands">Netherlands</option>
					</select>
				</div>
				<div>
					<label>
						<input type="checkbox" id="terms" />I agree to the terms and conditions
					</label>
				</div>

				<button>submit</button>
			</form>
			<button onClick={() => setSubmitted((submitted) => !submitted)}>Click me</button>
		</div>
	)
}

export default Application
