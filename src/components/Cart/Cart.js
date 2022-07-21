// import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props => {

    const cartItems = <ul>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
        .map(item => <li>
            {item.name}
        </li>)}
    </ul>
    return <Modal>
        {cartItems}
        <div>
            <span>
                Total
            </span>
            <span>
                35.99
            </span>
        </div>
        <div>
            <button>Close</button>
            <button>Order</button>
        </div>
    </Modal>
}

export default Cart;