import React, { useState } from 'react'
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const mytodo = () => {
    setTodo([...todo, input])
    setInput("")

  }


  const deleteitems = (id) => {
    console.log(id);
    const deleteitems = todo.filter((elm, index) => {
      return index !== id
    })
    setTodo(deleteitems)
  }



  return (
    <div>
      <h1 style={{ textAlign: 'center', width: '40%', margin: 'auto', marginTop: '15px' }}>Todo Application</h1>
      <div className='container'>
        <div className='one'>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Name!' value={input} onChange={(e) => setInput(e.target.value)}

            />

            <button onClick={mytodo}>Add Todo</button>
          </form>
        </div>
      </div>
      <div className="left">
        <h2>Todo Items! {todo.length > 0 ? todo.length : null}</h2>
        {todo.length > 0 ? <>
          <ol className='leftol'>
            {todo.map((elm, i) => {
              return (
                <div className='myli' key={i}>
                  <li>{elm}</li>
                  <button type='submit' onClick={() => deleteitems(i)}>Delete</button>
                </div>
              )
            })}
          </ol>
        </> : <><h3 style={{ textAlign: "center" }}>Not Item Yet</h3></>}
      </div>
    </div>
  )
}

export default App
