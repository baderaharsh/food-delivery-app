import Input from '../../UI/Input'
import classes from './MealForm.module.css'
import { useRef } from 'react'
// import CartContext from '../../store/cart-context';


const MealForm = props => {
    
    const inputRef = useRef()


    const addToCartHandler = (event) => {
        event.preventDefault();
        const amount = inputRef.current.value;
        props.addToCart(amount);
    };

    return <form className={classes.form} onSubmit={addToCartHandler}>
        <Input label="Amount" ref={inputRef} input={{
            id: props.id,
            type: 'number',
            min: 1,
            max: 5,
            defaultValue: 1,
            step: 1,
        }} />
        <button>+ Add</button>
    </form>
}

export default MealForm;