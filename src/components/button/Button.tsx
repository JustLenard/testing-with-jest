import { Props } from './Button.types'

const Button: React.FC<Props> = ({ executeOnClick, displayText }) => {
  return <button onClick={executeOnClick}>{displayText}</button>
}

export default Button
