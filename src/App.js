import React from 'react'
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: "000",
        title: 'somebody',
        completed: false
      },
      {
        id: "001",
        title: 'nobody',
        completed:true
      },
      {
        id: "002",
        title: 'everybody',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delItem = (id) => {
    console.log(id, this.state.todos)
    this.setState({ todos: [...this.state.todos.filter(item => item.id !== id)]})
  }

  render() {

    return (
      <div className="App">
        < Todos todos={ this.state.todos } markComplete={this.markComplete} delItem={this.delItem}/>
      </div>
    );
  }
}

export default App;
