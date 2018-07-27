import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i}
                    type={igKey} />;
            });
        })
    reduce((Array, el) => {
        return arr.concat(el);
    }, []);




    // If burger is empty 
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;