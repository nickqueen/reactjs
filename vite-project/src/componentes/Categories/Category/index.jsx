import { CategoryContainer } from './style'

export function Category({ category }) {
	const { title } = category

	return (

		<CategoryContainer>

			<div className='imagem-background' />
			<div className='category-body-container'>
				<h2> {title} </h2>
				<p> Comprar agora </p>
			</div>

	</CategoryContainer>
)
}

// props é para atribuir propriedades para meu componentes. Para o código ficar mais limpo, utiliza-se o nome da propriedade, conforme escrito acima.

