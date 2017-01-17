import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { setSearchFilter } from '../actions'
let AddTodo = ({ dispatch }) => {
  let input
  let search

  return (
    <div>
      <form  onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      } }>
        <div className='row'>
          <div className="form-group col-sm-10">
            <input className="form-control" ref={node => {
              input = node
            } } />
          </div>
          <button className="btn btn-primary col-sm-2" type="submit">
            Add Todo
      </button>
        </div>
        <div className='row'>
          <div className="form-group col-sm-10">
            <input className="form-control" ref={node => {
              search = node
            } } />
          </div>
          <button className="btn btn-primary col-sm-2" onClick={() => { dispatch(setSearchFilter(search.value)) } } type="button">
            Search
        </button>
        </div>

      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
