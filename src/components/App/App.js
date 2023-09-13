import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'

// show comments
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div class="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}
