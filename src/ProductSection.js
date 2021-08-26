import Section from "./Section"


function ProductSection(props) {
    return (
        <div className="container">
            <div className="row">
                {
                props.content.map(
                    (location) => {
                    return (
                        <div className="col-12 col-md-3 mb-3">
                        <Section 
                            img={location.img}
                            book={location.book}
                            author={location.author}
                            genre={location.genre}
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

export default ProductSection