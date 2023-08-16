import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [items, setItems] = useState([{text: 'Call a function', id: 1}, {text: 'Call a function', id: 2}, {text: 'Call a function', id: 3}])
  const [inputtext, setInputtext] = useState('')
  function RemoveFromList(id: number) {
    setItems(items.filter((i) => i.id !== id))
  }
  
  function AddToList(item: string) {
    if (item.trim()) {
      setItems([...items, {text: item, id: items.length+1}])
    }
  }
  
  return (
    <>
      <header>
        <h1>To do App</h1>
      </header>
      <main>
        <form className='submit'>
          <label>
            <input type='text' className='textin' placeholder='Buy a milk...' onChange={(e) => {setInputtext(e.target.value)}} onSubmit={(e) => {e.preventDefault(), AddToList(inputtext)}}/>
            <input type='submit' value='Add task...' onClick={(e) => {e.preventDefault(), AddToList(inputtext)}}/>
          </label>
        </form>
        <div>
          {items.map((item) => {
            return (
              <div className='item'>
                <form>
                  <label className='checkboxlabel'>
                    <input type='checkbox'/>
                    <span className='checkmark'></span>
                  </label>
                </form>
                <p><i>{item.id}. </i>{item.text}</p>
                <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => RemoveFromList(item.id)}/>
              </div>
            )
          })}
        </div>
      </main>
      <footer>
        <h2>Github Projects</h2>
      </footer>
    </>
  )
}

export default App
