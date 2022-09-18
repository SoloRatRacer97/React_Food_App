import React, { useContext } from 'react'

import classes from './HeaderCartButton.module.css'
// Getting the icon into the button comp.
import CartItem from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

export default function HeaderCartButton(props) {

      // This imports the context and will update every time the conext changes. 
            // Cool that you can pass context around like this.... helpful
      const cartCtx = useContext(CartContext);

      const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
            return currentNumber + item.amount
      }, 0)

  return (
      <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                  <CartItem></CartItem>
            </span>
            <span>Your Card</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
  )
}
