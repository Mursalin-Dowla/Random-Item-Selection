import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const {handleAddCart} = props;
    const {name,img ,color, price}=props.item
    return (
        <div className='each-item'>
            <img src={img} alt="" />
            <div className="item-details">
              <p className="item-name">{name}</p>
              <p className="item-color">Color: {color}</p>
              <p className="item-price">Price: ${price}</p>
            </div>
            <button className='btn' onClick={()=>handleAddCart(props.item)}>
                <p>Add Item</p> 
                <FontAwesomeIcon icon={faCartShopping}/>
                </button>
        </div>
    );
};

export default Item;