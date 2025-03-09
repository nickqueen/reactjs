import { useEffect, useState } from 'react'
import { Categories } from '../../Componentes/Categories'

export function Shop () {
	const [getCategories, setCategories] = useState({})

	useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await getCategoriesCollections()
        setCategories(fetchedCategories) // Armazena as categorias no estado
      } catch (error) {
        console.error("Erro ao obter categorias:", error)
      }
    }

    getCategories()
  }, [])

	return (
		<div>
		<div>
			<h1> Compras </h1>
		</div>

		<div>
			{Object.keys(Categories).map((title) => {
				return <categoriesPreview key={title} title={title} />
			})}
		</div>
		</div>
	)
}
