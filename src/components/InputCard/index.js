import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const InputCard = props => {
  const [text, setText] = useState()
  const {getCharacterList} = props
  // console.log(text)
  const onClickCountCharacters = event => {
    event.preventDefault()
    if (text !== '') {
      const charObj = {
        id: uuidv4(),
        text,
        charLength: text.length,
      }
      getCharacterList(charObj)
      setText('')
    }
  }

  return (
    <div className="input-card-bg-container">
      <h1 className="input-card-title">Character Counter</h1>
      <form className="input-text-container">
        <input
          placeholder="Enter the Characters here"
          type="text"
          className="input-element"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button
          onClick={onClickCountCharacters}
          type="submit"
          className="add-btn"
        >
          Add
        </button>
      </form>
    </div>
  )
}
export default InputCard
