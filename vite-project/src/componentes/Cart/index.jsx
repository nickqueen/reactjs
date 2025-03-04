//useEffect => trabalha para um efeito colateral. Ele executa a função quando o Array é acionado.

import cartIcon from '../../assets/img/basket.svg'
import { useEffect, useState } from 'react';

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
