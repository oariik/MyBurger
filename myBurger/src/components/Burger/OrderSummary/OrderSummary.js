import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {

    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return < li key={igKey} > {igKey}  : {this.props.ingredients[igKey]</li>
            });
        return (<Aux>

                        <h3> Your order! </h3>
                        <p> Delicious burger with the following ingredients :</p>
                        <ul>
                            {ingredientSummary}
                        </ul>
                        <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
                        <p>Continue ..</p>
                        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                        <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
                    </Aux>);
                }
            }
export default OrderSummary;