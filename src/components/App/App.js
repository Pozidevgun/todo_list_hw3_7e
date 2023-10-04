import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import './App.css'

// show comments
export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
    newItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem ={
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id: uuidv4(),
      editItem: false,
      newItem: false,
    })
  }
  clearList = () => {
    this.setState({
      items: []
    }) 
  }
  handleDelete = id => {
    const filterItems = this.state.items.filter(item=> item.id !== id);
    this.setState({
      items: filterItems
    })
  }
  createItem = () =>{
    this.setState({
      newItem: true
    })
  }
  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item=> item.id === id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
      newItem: true,
    })
  }
  render() {
   
    return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
                <h3 className='text-capitalize text-center'>
                 Create Todo
                </h3>
            <div className={this.state.newItem ? "main__button  d-none" : "main__button"} onClick={this.createItem}>
                    <button className="button bg-primary text-white p-2 d-flex">+</button>
                </div>
                <TodoInput 
                newItem={this.state.newItem}
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
                />
                <TodoList items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                />
            </div>
          </div>
        </div>
    )
  }
}
