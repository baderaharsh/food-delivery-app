// import classes from './Cart.module.css'
import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const addToCart = (item) => {
        cartCtx.addItem(item);
    }

    const removeFromCart = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={classes.list}>{cartCtx.items
        .map(item => {
            return <CartItem key={item.id} item={item} addCart={addToCart} removeItem={removeFromCart} />
        } )}
    </ul>
    return <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>
                Total
            </span>
            <span>
                {cartCtx.totalAmount.toFixed(2)}
            </span>
        </div>
        <div className={classes.buttons}>
            <button className={classes.close} onClick={props.onCloseCart}>Close</button>
            <button className={classes.order}>Order</button>
        </div>
    </Modal>
}

export default Cart;