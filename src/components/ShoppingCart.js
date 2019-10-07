import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

import { CartContext } from '../contextObjects/CartContext';

const ShoppingCart = () => {
	const cart  = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const removeItem = e => {
		console.log(e.target.id);
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} id={item.id} removeItem={removeItem} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
