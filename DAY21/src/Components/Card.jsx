import React from 'react';

const Card = (props) => {
    return (
        <div className="container">
            <div className="Card">
                <h1>{props.name}</h1>
                <h2>You have consumed {props.calorie} calories today</h2>
            </div>
            <div className="button">
                <button onClick={()=>props.setter(props.key)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;