import Card from "./Card"

function CardSection(props) {
    return (
        <div className="container">
            <div className="row">
                {
                props.content.map(
                    (location) => {
                    return (
                        <div className="col-12 col-lg-3 mb-3">
                        <Card 
                            image={location.image}
                            productName={location.productName}
                            category={location.category}
                            soldBy={location.soldBy}
                            price={location.price}
                        />
                        </div>
                    )
                    }
                )
                }
            </div>
        </div>
    )
}

export default CardSection;