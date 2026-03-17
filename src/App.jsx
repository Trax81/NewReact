

 import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';
import Counter from "./components/Counter.jsx"


function App() {

 
 const [showModal, setShowModal] = useState(false)

 function onTodoDelete() {
  setShowModal(true)
  console.log('onTodoDelete()')
 }

  return (
      <div>
      <Counter />
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
     <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
     <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
     <Todo onTodoDelete={onTodoDelete} title="Land a $100k job"/>
      </div>
   {showModal && <Modal title="Confirm Delete?"/>}
     </div>
    
  )
}

export default App








