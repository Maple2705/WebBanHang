import React from 'react';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className = "app">
        <h2>Todos</h2>
        <div className="app-content">
          <form onSubmit={this.handleSubmit} className="app-content_form">
            <div className="form-header">
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
                placeholder ="What needs to be done?"
              />
              <button className= "btn-add-item">
                Add #{this.state.items.length + 1}
              </button>
            </div>
            <TodoList onClickItemHandler={this.onClickItemHandler.bind(this)} items={this.state.items} handleIscomplete ={ this.handleIscomplete.bind(this)} />
          </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      alert('pls write somthing todo');
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  onClickItemHandler(item) {
    const list = this.state.items;
    const index = list.findIndex(({ id }) => id === item.id);

    if (~index) {
      list.splice(index, 1);
      this.setState({
        items: list
      })
    }
  }

  handleIscomplete(item) {
    
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className='app-content__list'>
        <ul className='app-content__list-items'>
          {this.props.items.map(item => (
            <li key={item.id} className='item'>
              <input type="checkbox" id="myCheck" onClick={()=> this.props.handleIscomplete(item)}></input>
              <span>{item.text}</span>
              <button onClick={() => this.props.onClickItemHandler(item) }>x</button>  
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;