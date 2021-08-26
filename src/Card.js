function Card(props) {
    return (
        <div className="card" style={ {"max-width": "50rem", "width": "100%"} }>
            <img src={props.image} className="card-img-bot" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <h4 className="card-text">{props.category}</h4>
                <a href={props.price} className="btn btn-secondary">{props.soldBy}</a>
            </div>
        </div>
    )
};

export default Card;