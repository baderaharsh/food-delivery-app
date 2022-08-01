import { useContext,useState,useEffect } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCartButton = props => {

    const [animate, setAnimate] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;
    
    const cartItemsTotal = items.reduce((current, item) => {
        return current + item.amount
    }, 0);

    const buttonClasses = `${classes.button} ${animate ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        
        setAnimate(true);
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [items])

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>{cartItemsTotal}</span>
    </button>
}

export default HeaderCartButton;