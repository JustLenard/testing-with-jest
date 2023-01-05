import { useEffect, useState } from 'react'

interface Props {}

const User: React.FC<Props> = () => {
	const [users, setUsers] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => setUsers(json))
	}, [])
	console.log('This is users', users)

	return <div>{users && <h1>{users.title}</h1>}</div>
}

export default User
