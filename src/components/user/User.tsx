import { useEffect, useState } from "react"

interface Props {}

interface IUser {
  name: string
}

const User: React.FC<Props> = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const obj: IUser[] = await res.json()
        setUsers(obj)
      } catch (err) {
        setError("Erorr happened")
      }
    }
    getData()
  }, [])

  return (
    <div>
      <div>{users && <h1>Users length{users.length}</h1>}</div>
      {error && <div data-testid="api-error">{error}</div>}
      <ul>
        {users.map((user, index) => (
          <li key={user.name}>{`${user.name}${index}`}</li>
        ))}
      </ul>
    </div>
  )
  // return <div>{users && <h1>{'f'}</h1>}</div>
}

export default User
