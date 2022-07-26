[1mdiff --git a/src/components/Cart/Cart.js b/src/components/Cart/Cart.js[m
[1mindex d0fb24c..a7078e0 100644[m
[1m--- a/src/components/Cart/Cart.js[m
[1m+++ b/src/components/Cart/Cart.js[m
[36m@@ -1,13 +1,16 @@[m
 // import classes from './Cart.module.css'[m
[32m+[m[32mimport { useContext } from 'react'[m
 import Modal from '../UI/Modal'[m
 import classes from './Cart.module.css'[m
[32m+[m[32mimport CartContext from '../../store/cart-context'[m
[32m+[m[32mimport CartItem from './CartItem'[m
 [m
 const Cart = props => {[m
 [m
[31m-    const cartItems = <ul className={classes.list}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }][m
[31m-        .map(item => <li>[m
[31m-            {item.name}[m
[31m-        </li>)}[m
[32m+[m[32m    const cartCtx = useContext(CartContext);[m
[32m+[m
[32m+[m[32m    const cartItems = <ul className={classes.list}>{cartCtx.items[m
[32m+[m[32m        .map(item => <CartItem item={item} />)}[m
     </ul>[m
     return <Modal onClose={props.onCloseCart}>[m
         {cartItems}[m
