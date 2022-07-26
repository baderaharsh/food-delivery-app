import { Fragment } from 'react';
import classes from './CartItem.module.css'

const CartItem = props => {
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
            <button className={`${classes.button} ${classes.negative}`}>-</button>
            <button className={classes.button}>+</button>
        </div>
        </li>
        <hr className={classes.bottom} />
        </Fragment>
}

export default CartItem;