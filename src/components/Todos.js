import React from 'react';
import TodoItem from './TodoItem.js'
class Todos extends React.Component {

  render() {
    // console.log(this.props.todos);
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delItem={this.props.delItem}/>
    ));
  }
}

export default Todos;
