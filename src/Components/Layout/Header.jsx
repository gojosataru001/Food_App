import React from 'react'
import { Fragment } from 'react'
import mealsImage from "../../assets/meals.png"
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Cart</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt=" A table full of delicious meal" />
        </div>

    </Fragment>
  )
}

export default Header