//useEffect => trabalha para um efeito colateral. Ele executa a função quando o Array é acionado.

import cartIcon from '../../assets/img/basket.svg'

export function Cart() {
	return (
		<div>
			<img src= {cartIcon} />
			<span> {0} </span>

			<button> Comprar </button>
		</div>
	)
}
