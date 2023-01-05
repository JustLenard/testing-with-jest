import { useState } from 'react'

interface CounterProps {
	initialCount?: number
}

export const useCounter = ({ initialCount = 0 }: CounterProps = {}) => {
	const [count, setCount] = useState(initialCount)
	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)

	return { count, increment, decrement }
}
