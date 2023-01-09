import { Counter2Props } from "./Counter2.types"

const Counter2: React.FC<Counter2Props> = ({
  count,
  handleDecrement,
  handleIncrement,
}) => {
  console.log("This is 2==2", 2 === 2)
  return (
    <div>
      <h1>Counter 2</h1>
      <p data-testid="count">{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Incremnet</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}

export default Counter2
