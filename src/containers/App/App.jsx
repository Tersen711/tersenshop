import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "../../Routers";
import LayoutComponents from "../../components/LayoutComponents";
import Categories from "../../pages/Categories";
import Cart from "../../pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (item) => {
    cart.push(item);
    console.log(cart);
  };

  useEffect(() => {
    
  }, []);

  // const handleAddProduct = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item])
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart=([...arr]);
  // }

  return (
    <div className="App page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <LayoutComponents size={cart.length}>
            <Routers handleAddProduct={handleAddProduct} />
            {/* {
              show ? (
              <Categories handleAddProduct={handleAddProduct} />
              ) : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
              )} */}
          </LayoutComponents>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
