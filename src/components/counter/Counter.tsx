interface Props {
  count: number
}

const Counter: React.FC<Props> = ({ count }) => {
  return <h1>{count}</h1>
}

export default Counter
