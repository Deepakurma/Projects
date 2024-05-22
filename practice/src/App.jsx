import react from "react";
import Header from "../src/Header";
import Footerabove from "./Footer-above";
import Footer from "../src/Footer";
import Matter from "./matter";
import Products from "./products";
import Navbar from "./Navbar";

function App() {
  function productmatter(product) {
    return (
      <Products
        key={product.key}
        name={product.name}
        price={product.price}
        url={product.image}
        href={product.href}
      />
    );
  }

  

  /*-------------------------------------------------------------------------------------*/
  return (
    <div className="container">
      <div className="head">
        <Header />
      </div>

      <div className="menu">
         <Navbar />
      </div>

      <div className="mimg">
        <div class="mimg-container">
          <div class="background-image"></div>
          <h1>Get our latest products!</h1>

          <a href="https://clascxy.in/"><button>Shop now!</button></a>
        </div>
      </div>

      <div className="fp">
        <p>Featured products</p>
        <div className="fp-img">{Matter.map(productmatter)}</div>
      </div>

      <div className="footer-above">
        <Footerabove />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
