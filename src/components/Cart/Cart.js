// import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = props => {

    const cartItems = <ul className={classes.list}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
        .map(item => <li>
            {item.name}
        </li>)}
    </ul>
    return <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>
                Total
            </span>
            <span>
                35.99
            </span>
        </div>
        <div className={classes.buttons}>
            <button className={classes.close} onClick={props.onCloseCart}>Close</button>
            <button className={classes.order}>Order</button>
        </div>
    </Modal>
}

export default Cart;