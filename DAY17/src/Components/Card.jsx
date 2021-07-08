const Card = (props) => {
    return (
        <div className="container">
            <div className="Card">
                <h1>{props.Food}</h1>
                <h2>You have consumed {props.Calorie} calories today</h2>
            </div>
        </div>
    );
};

export default Card;