import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const cartItemsTotal = cartCtx.items.reduce((current, item) => {
        return current + item.amount
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>{cartItemsTotal}</span>
    </button>
}

export default HeaderCartButton;