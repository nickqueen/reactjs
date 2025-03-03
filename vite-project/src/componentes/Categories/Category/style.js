//vamos colocar o CSS para o componente category nessa página

import styled from 'styled-components';

export const CategoryContainer = styled.div`
	background-color: ${ (props) => props.theme.colors['gray'] };
	width: 350px;
	height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	borde: 1px solid black;
	margin: 0 7.5px 15p;

	&:hover {
	cursor: pointer;
}
`

export const ImageBackground = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;

	&hover {
	transform:
	transition: 0.6
	}
`
export const CategoryContent = styled.div`
	height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.7;
  position: absolute;

h2 {
	font-weight: bold;
	margin: 0 6px 0;
	color: ${(props) => props.theme.colors.white};
	font-size: 22px;
}

p {
	font-size: 16px;
	color: ${(props) => props.theme.colors.white};
}
`

