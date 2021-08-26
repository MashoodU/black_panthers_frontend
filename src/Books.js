import React, {useEffect, useState} from "react";

function Books(){
    const [books, setbooks] = useState([{
        bookName: '',
        genre:'',
        author: '',
        description: '',
        price: '',
        productImage: ''
    }])
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/products/`).then(res => {
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes => setbooks(jsonRes));
})


return <div className="background">
    <h1 className="bookstart">Shop for books</h1>
    {books.map(book =>
    <div>
        <div className="box"><img className="product-holder" src={book.productImage}/>
        <div className="box-content">
            <h3 className="title">{book.bookName}</h3>
            <span className="post">
                {book.description}<br/>
                ${book.price}<br/>
                author: {book.author}<br/>
                genre: {book.genre}
            </span>
            </div>
            </div>            
        </div>
    )}

</div>

}

export default Books;