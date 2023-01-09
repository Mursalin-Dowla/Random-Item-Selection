import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import "./MainBody.css"

const MainBody = () => {
    const [items , setItems] = useState([]);
    const [cart ,setCart] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);

    const handleAddCart = (item)=>{
    let newCart =[...cart,item];
    setCart(newCart)
    }

    const handleChosen =(cart)=>{
     const randomIndex = Math.floor(Math.random() * cart.length);
     const item = cart[randomIndex];
     document.getElementById("chosed").innerHTML = 
     `<article style="background:aqua; padding:5px; border:2px solid white">You can chose:<p style="color:red">
     ${item.name}</p>The color of the flower is <p style="color:${item.color}">${item.color}<p/></article>`;
    }
    const handleClear= ()=>{
        setCart([]);
        document.getElementById("chosed").innerHTML = `Choose Items Again`
    }
    const handleSelectedCartItem=(id)=>{
        const updatedItem= cart.filter((curElem)=>{
            return curElem.id !== id;
          });
          setCart(updatedItem);
    }
    return (
        <div className='main-body'>
             <div className="item-holder">
                {
                    items.map(item=><Item key={item.id}
                     item = {item}
                     handleAddCart = {handleAddCart}
                    />)
                }
            </div> 
            <div className="cart-holder">
                <div className="cart-details">
                <p className="cart-title">Added Items:</p>
                {
                  cart.map(item=><Cart key={item.id}
                    item = {item}
                    handleSelectedCartItem = {handleSelectedCartItem}
                   />)
                }
                <p id="chosed"></p>
                <button className="cart-btn" onClick={()=>handleChosen(cart)}>Choose one between above</button>
                <button className="cart-btn" onClick={handleClear}>Clear Chosen Items</button>
                </div>
                
            </div>
        </div>
    );
};

export default MainBody;