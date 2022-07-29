import classes from './MealItem.module.css'
import MealForm from './MealForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.meal.price.toFixed(2)}`

    const addToCart = amount => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: +amount,
            price: props.meal.price
        });
    }
    
    return <li className={classes.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealForm id={props.meal.id} addToCart={addToCart} />
    </li>
}

export default MealItem;