import cartIcon from '../../assets/img/basket.svg'
import React, { useState } from 'react';

export function Cart() {
	const [cartCount, setCartCount] = useState(0)

const updateCart = () => {
  setCartCount((prevCount) => prevCount + 1)
}

	return (
		<div>
			<img src= {cartIcon} />
			<span> {cartCount} </span>

			<button onClick={updateCart}> Adicionar Item </button>
		</div>
	)
}
