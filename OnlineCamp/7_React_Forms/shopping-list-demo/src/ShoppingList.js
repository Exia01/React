import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import uuid from 'uuid/v4';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Milk', qty: '2 gallons', id: uuid() },
        { name: 'Bread', qty: '2 loaves', id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    //item comes in as an obj, using spread operator, with id
    let newItem = { ...item, id: uuid() };
    this.setState(state => ({
      items: [...state.items, newItem] // take all the old items, put them in array and add new item
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
export default ShoppingList;
