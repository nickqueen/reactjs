//para estilizar componente: styled(Link)
//Link não é tag, é componente.


import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content:space-between;
  margin-top: 25px
	padding: 35px;
	align-items: center;
`

export const LogoContainer = styled(Link) `
	display: flex;
	align-items: center;
	gap: 12px
`

export const LinksNav = styled.div`
  width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 32px;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
