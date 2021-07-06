import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './styles.css';

function App() {
    return (
        <div className="App">
            <div className="card">
                <Card />
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
