import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {handleSelectedCartItem} = props
    const {name,img ,color,id}=props.item
    return (
        <div className='each-cart-item'>
            <div className="cart-img">
               <img src={img} alt="" />
            </div>
            <div >
            <p className="cart-item-name">{name}</p>
            <p>Color: {color}</p>
            </div>
            <div className="each-delete" onClick={()=>handleSelectedCartItem(id)}>
            <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
    );
};

export default Cart;