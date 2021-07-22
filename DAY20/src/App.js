import React, { useState } from "react";
import "./App.css";
import Card from './Components/Card';

const App = () => {
	const [state, setstate] = useState([{ name: "Pizza", calorie: "56" }, { name: "Burger", calorie: "64" }, { name: "Coke", calorie: "200" }, { name:"Brownie", calorie : "353" }, { name: "Fried Rice", calorie: "35" }, { name: "Dumplings", calorie: "34" }])
	
	const setter = (key) => {
		console.log("state  deleted");
		const tmpState = state;
		tmpState.splice(key, 1);
		setstate([...tmpState]);
	}

	return (
		<div className="App">
			<h1>Calorie Read Only</h1>
			<div className="main">
				{state.map((item, index) => <Card key={index} name={item.name} calorie={item.calorie} setter={setter}/>)}
			</div>
		</div>
	);
};

export default App;