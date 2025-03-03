// as Style significa importar todos os arquivos CSS do style.js
// Style.CategoryContainer: dessa forma eu não preciso utilizar DIV, importo direto e demonstro que o arquivo é de estilo.
// url${ imageUrl } => utilizar uma template string dentro no style inline.

import * as Style from './style'

export function Category({ category }) {
	const { title, imageUrl } = category

	return (

		<Style.CategoryContainer>
			<Style.ImageBackground style={{ backgroundImage: `url(${ imageUrl })` }} />
			<Style.CategoryContent>
				<h2> {title} </h2>
				<p> Comprar agora </p>
			</Style.CategoryContent>

	</Style.CategoryContainer>
)
}

// props é para atribuir propriedades para meu componentes. Para o código ficar mais limpo, utiliza-se o nome da propriedade, conforme escrito acima.

