import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import Item from './Item';

class App extends Component {
  render() {
    const { invoice } = this.props;
    return (
      <div className="App">
        <h1>{invoice.status()}</h1>
        {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
        <form
          onSubmit={e => {
            e.preventDefault();
            invoice.itemList.add({
              name: this.nameInput.value,
              quantity: parseInt(this.quantityInput.value),
              price: parseFloat(this.priceInput.value)
            });
            e.target.reset();
            this.nameInput.focus();
          }}
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              ref={input => {
                this.nameInput = input;
              }}
              id="name"
            />
          </label>
          <label htmlFor="quantity">
            Quantity
            <input
              type="number"
              ref={input => {
                this.quantityInput = input;
              }}
              id="quantity"
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="text"
              ref={input => {
                this.priceInput = input;
              }}
              id="name"
            />
          </label>
          <button type="submit">Add</button>
        </form>

        <ul>
          {invoice.itemList.items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(App);
