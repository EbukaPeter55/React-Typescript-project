import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState {
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
    url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    age: 36,
    note: 'Allergic to staying on the same team.'
  },
  {
    name: 'Kobe Bryant',
    url: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    age: 36,
   },

])
  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people}/>
      <AddToList
      people={people}
      setPeople={setPeople}/> 
    </div>
  );
}

export default App;
