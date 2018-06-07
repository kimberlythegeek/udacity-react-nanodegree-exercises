import React from 'react';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ItemList from './ItemList';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem
          value={this.state.value}
          onAddItem={this.addItem}
        />
        <DeleteItem
          deleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound}
        />

        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
