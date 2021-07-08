import './App.css';
import Card from './Components/Card';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <div className="main">
        <Card Calorie="56" Food="Pizza" />
        <Card Calorie="69" Food="Burger" />
        <Card Calorie="500" Food="Coke" />
        <Card Calorie="180" Food="Brownie" />
        <Card Calorie="90" Food="Fried Rice" />
        <Card Calorie="200" Food="Lassania" />
        <Card Calorie="10" Food="Pani Puri" />
      </div>
    </div>
  );
}

export default App;
