import React from 'react';
import Cart from './Cart';
import './App.css';

const items = [
  { id: 1, name: 'Maasikad', price: 2.25, qty: 2},
  { id: 2, name: 'Mustikad', price: 1.99, qty: 3},
  { id: 3, name: 'Vaarikad', price: 3.50, qty: 1},
]

function App() {
  return (
   <div>
     <Cart initialItems={items} />
   </div>
  );
}

export default App;
