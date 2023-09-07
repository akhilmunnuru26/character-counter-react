import {useState} from 'react'
import InputCard from './components/InputCard'
import OutputCard from './components/OutputCard'
import './App.css'

// Replace your code here
const App = () => {
  const [charactersList, setCharactersList] = useState([])

  const getCharacterList = obj => {
    setCharactersList(prevState => [...prevState, obj])
  }

  const deleteItem = id => {
    const updatedList = charactersList.filter(eachItem => eachItem.id !== id)
    setCharactersList(updatedList)
  }

  return (
    <div className="bg-container">
      <OutputCard deleteItem={deleteItem} charactersList={charactersList} />
      <InputCard getCharacterList={getCharacterList} />
    </div>
  )
}
export default App
