//useEffect => trabalha para um efeito colateral. Ele executa a função quando o Array é acionado.

import cartIcon from '../../assets/img/basket.svg'
import { useCounter } from '../../Context/CounterContex';

export function Cart() {

		const { count } = useCounter()

	return (
		<div>
			<img src= {cartIcon} />
			<span> {count} </span>

			<button> Comprar </button>
		</div>
	)
}
