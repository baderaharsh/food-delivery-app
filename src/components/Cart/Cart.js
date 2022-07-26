// import classes from './Cart.module.css'
import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const cartItems = <ul className={classes.list}>{cartCtx.items
        .map(item => <CartItem item={item} />)}
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