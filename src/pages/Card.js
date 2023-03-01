import React from 'react'

const Cards = ({item, handleAddProduct}) => {
  const { title, description, price, img} = item;
    return (
        <div className='cards'>
            <div className='image_box'>
                <img src={img} alt='' />
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{description}</p>
                <p>Price - {price}$</p>
                <button onClick={()=>handleAddProduct(item)}>Add to Cart</button>
            </div>
        </div>
  );
}

export default Cards