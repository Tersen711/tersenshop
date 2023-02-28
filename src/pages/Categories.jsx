import React, {useState} from 'react'
import { Divider, Breadcrumb } from 'antd'
import LayoutComponents from '../components/LayoutComponents'
import list from '../product'
import Cards from './Card'
import './Cart.css'

const Categories = () => {
  const [cart, setCart] = useState([]);
  
  const handleClick = (item) =>{
    cart.push(item);
    console.log(cart)
  }
  return (
    <LayoutComponents>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Categories</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <h1 style={{ fontFamily: "Hanalei Fill", fontSize: "5em" }}>Catalog</h1>
      <Divider />
      <section>
      {
        list.map((item)=>(
        <Cards key={item.id} item={item} handleClick={handleClick}/>
        ))}
    </section>
      <Divider />
    </LayoutComponents>
  );
};

export default Categories;
