import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';


interface IState {
   people: {
     name: string,
     age: number,
     url: string,
     note?: string//string type is optional
   }[]
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
    name: 'Lebron James',
    url: '',
    age: 36,
    note: 'Allergic to staying on the same team.'
  },
  {
    name: 'Kobe Bryant',
    url: '',
    age: 36,
   },

])
  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List/>
    </div>
  );
}

export default App;
