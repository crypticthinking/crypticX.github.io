import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./components/Cart/Cart";
import products from "./components/Data/Data";


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit, Eaque reiciendis",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit, Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {

  const [cartItems, setCartItems] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0
  })
  const totalCount = Object.values(cartItems).reduce((acc, val) => acc + val, 0);
  
  const addToCart = (id) => {
    setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] + 1}))
  }

  const subFromCart = (id) => {
    setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] - 1}))
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] = 0}))
  }

  const totalAmount = () => {
    let amount = 0;
    for(const key in cartItems) {
      if(cartItems[key] > 0) {
        let productInfo = products.find(product => product.id ===
          Number(key));
          amount += Math.floor(cartItems[key] *
            productInfo.price
          )
      }
    }
    return amount
  }
  console.log(cartItems)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showCart);
    
  };
  // console.log(showCart)
  

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden"
    >
      <h1>{cartItems.length}</h1>
      <Navbar handleClick={handleClick} totalCount={totalCount}/>
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products addToCart={addToCart} handleClick={handleClick} />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Cart showCart={showCart} setShowCart={setShowCart}
      handleClick={handleClick} cartItems={cartItems}
      subFromCart={subFromCart} addToCart={addToCart}
      totalAmount={totalAmount}
       removeFromCart={removeFromCart}/>
    </div>
  );
};

export default App;
