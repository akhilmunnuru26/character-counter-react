import './index.css'

const CharacterItem = props => {
  const {chars} = props
  const {text, charLength} = chars
  return (
    <li className="char-item">
      <p className="result">
        {text}: {charLength}
      </p>
    </li>
  )
}

export default CharacterItem
