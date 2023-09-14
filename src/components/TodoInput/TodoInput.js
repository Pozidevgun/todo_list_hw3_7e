import React, { Component } from "react";
import "./Todoinput.css";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              value={item}
              placeholder="add some task"
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn d-block btn-success mt-3  w-100"
                : "btn d-block btn-primary mt-3 text-uppercase w-100"
            }
          >
            {editItem ? "Edit item" : "Add task"}
          </button>
        </form>
      </div>
    );
  }
}
