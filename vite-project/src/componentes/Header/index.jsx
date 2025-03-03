import * as Style from './style'
import IMGclock from '../../assets/img/clock.png'

export function Header() {
	return (
		<>
			<Style.Header>
				<div>
					<img src= { IMGclock } width={40} />
				</div>
				<Style.linksNav>
				<div>
					<h1> Loja de Relógio </h1>
				</div>

				<div>
					<a> Comprar </a>
					<a> Login </a>
				</div>

				<div> Carrinho </div>

				</Style.linksNav>
			</Style.Header>
		</>
	)

}
