import CharacterItem from '../CharacterItem'
import './index.css'

const OutputCard = props => {
  const {charactersList} = props

  return (
    <div className="output-bg-card-container">
      <div className="output-headline-container">
        <h1 className="output-card-title">Count the characters like a Boss</h1>
      </div>

      {charactersList.length === 0 ? (
        <div className="no-user-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-input-image"
          />
        </div>
      ) : (
        <ul className="character-list-counter">
          {charactersList.map(eachItem => (
            <CharacterItem key={eachItem.id} chars={eachItem} />
          ))}
        </ul>
      )}
    </div>
  )
}
export default OutputCard
