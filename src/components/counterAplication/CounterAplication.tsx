import { Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import Button from '../button/Button'
import Counter from '../counter/Counter'

interface Props {}

const CounterAplication: React.FC<Props> = () => {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  const theme = useTheme()

  const incrementByOne = () => {
    return setCounter((count) => count + 1)
  }

  const setCounterValue = () => {
    setCounter(inputValue)
    setInputValue(0)
  }

  return (
    <>
      <Counter count={counter} />
      <Button executeOnClick={incrementByOne} displayText="Click me" />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
        type="number"
        name="amount"
      />
      <button onClick={setCounterValue}>set</button>
      <Typography
        component="div"
        data-testid="themed-text"
      >{`${theme.palette.mode} text`}</Typography>
    </>
  )
}

export default CounterAplication
