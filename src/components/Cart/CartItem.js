import { Fragment } from 'react';
import classes from './CartItem.module.css';

const CartItem = props => {

    const addToCart = () => {
        props.addCart({ ...props.item, amount: props.item.amount + 1 });
    }

    const removeFromCart = () => {
        const amount = props.item.amount - 1;

        if (amount > 0) {
            props.addCart({ ...props.item, amount: amount });
        } else {
            props.removeItem(props.item.id);
        }
    }

    return <Fragment>
     <li className={classes.list}>
        <div>
            <h3>
                {props.item.name}
            </h3>
            <div>
                <span className={classes.price}>
                    {props.item.price.toFixed(2)}
                </span>
                <span className={classes.amount}>
                    x {props.item.amount}
                </span>
            </div>
        </div>
        <div className={classes.buttons}>
            <button className={`${classes.button} ${classes.negative}`} onClick={removeFromCart} >-</button>
            <button className={classes.button} onClick={addToCart} >+</button>
        </div>
        </li>
        <hr className={classes.bottom} />
        </Fragment>
}

export default CartItem;