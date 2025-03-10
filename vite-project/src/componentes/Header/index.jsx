//<Outlet /> -> serve para guiar a rota do site.

import * as Style from './style'
import IMGclock from '../../assets/img/clock.png'
import { Link, Outlet } from 'react-router-dom'
import { Cart } from '../Cart'
import { useContext } from 'react'
import { UserContext } from '../../Componentes/Context/UserContext'
import { signOutAuthUser } from '../../utils/firebase'

export function Header() {
	const { currentUser } = useContext(UserContext)

	return (
	<>
		<Style.Header>
			<Style.LogoContainer to='/'>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256">
				<path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.08,16.08,0,0,0-6.35-12.76L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM178.23,176H77.33L128,138ZM72,216V192H184v24ZM184,75.64,128,118,72,76V40H184Z"></path>
				</svg>
				<h1> Loja de Relógio </h1>
			</Style.LogoContainer>
			<Style.LinksNav>
				<Link to='shop'> Comprar </Link>

				{/*login e Logout | técnica de renderização do componente*/}

				{	currentUser ? <Link onClick={signOutAuthUser}> Logout </Link>: <Link to='auth'> Login </Link> }
				</Style.LinksNav>

				<div>
					<Cart />
				</div>
		</Style.Header>
		<Outlet />
	</>
	)
}
