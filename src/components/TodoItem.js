import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  testFunc = () => console.log('butt')


  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{ backgroundColor: '#fff000'}}>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delItem.bind(this, id)}>x</button>
        </p>

      </div>

    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  float: 'right',
  backgroundColor: '#ff0000',
  position: 'relative',
  borderRadius: '50%',
  border: 'none',
  padding: '3px 3x',
  marginTop: '2px',
  cursor: 'pointer'
}

export default TodoItem;