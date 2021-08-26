import CardSection from './CardSection.js';
import NavBar from './NavBar.js';
import Hero from './Hero.js';
import MediaSection from './MediaSection.js';
import Card from './Card.js';
import ProductSection from './ProductSection.js';
import Header from './Header';
import Section from './Section.js';
import Button from './Button.js';
import Footer from './Footer.js';
import Books from './Books.js';


const products = [
  {
    img: "Eat.jpg",
    book: "Eat a Peach: A Memoir",
    genre: "Biography, Cookbook",
    link: "",
  },
  
  {
    img: "Spider.jpg",
    book: "The Girl in the Spider's Web",
    genre: " Novel, Thriller, Crime novel, Mystery",
    link: "",
  },
  
  {
    img: "Everyone.jpg",
    book: "Everyone Knows Your Mother Is a Witch",
    genre: " Historical Fiction, War story",
    link: "Some Link",
  },
  
  {
    img: "Fake.jpg",
    book: "Fake Accounts",
    genre: "Satire, Political fiction, Urban fiction",
    link: "Some Link",
  },
  {
    img: "Longings.jpg",
    book: "The Book of Longings",
    genre: "Historical Fiction",
    link: "Some Link",
  },
  
  {
    img: "Klara.jpg",
    book: "Klara and the Sun",
    genre: "Science fiction",
    link: "Some Link",
  },
  
  {
    img: "TMFT.jpg",
    book: "The Faraway Tree",
    genre: "Fantasy",
    link: "Some Link",
  },
  
  {
    img: "ToKill.jpg",
    book: "To Kill a Mockingbird",
    genre: "Coming-of-age story, Historical Fiction",
    link: "Some Link",
  },
]
  




function MainScreen() {
  return (
    <div>
      <NavBar log/>
      <Hero title="Ameoba Books"
        description="Shop, Sell and Trade for all kinds of books with members of the community who have come together with their love of book reading in the Middle East."
        buttonLabel1="Shop"
        buttonLabel2="Learn More"/>
      <Header title='Featured Books' description=""/>
      <ProductSection content={products}/>
      <Footer/>
      

        
    </div>
  );
}

export default MainScreen;
