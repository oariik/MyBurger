import React from 'react';
import classes from './NavigationItem.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (

    <ul className={classes.navigationItems}>
        <li>
            <NavigationItem link="/" active >Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>

        </li>
    </ul>
);

export default navigationItems;