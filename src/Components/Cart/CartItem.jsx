import classes from './CartItem.module.css';

import React from 'react'

const CartItem = (props) => {
    const price =`$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
                <span className={classes.price}>{price}</span>
                <span className={classes.amount}>{props.amount}</span>
            </div>
        </div>
        <div className={classes.action}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  )
}

export default CartItem