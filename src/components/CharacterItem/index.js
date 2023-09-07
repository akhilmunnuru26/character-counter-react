import './index.css'

const CharacterItem = props => {
  const {chars, deleteItem} = props
  const {id, text, charLength} = chars
  const removeItem = () => {
    deleteItem(id)
  }
  return (
    <li className="char-item">
      <p className="result">
        {text}: {charLength}
      </p>
      <button onClick={removeItem} type="button" className="remove-button">
        X
      </button>
    </li>
  )
}

export default CharacterItem
