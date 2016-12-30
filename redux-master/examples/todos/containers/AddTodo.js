import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { setSearchFilter } from '../actions'
let AddTodo = ({ dispatch }) => {
  let input
  let search
 
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div>
        <input ref={node => {
          input = node
        }} />
      
        <button type="submit">
          Add Todo
        </button>
        </div>
        <div>
         <input ref={node => {
          search = node
        }} />
       <button onClick={ ()=>{dispatch(setSearchFilter(search.value))} } type="button">
         Search
        </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
