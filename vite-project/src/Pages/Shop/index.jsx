import { useEffect, useState } from 'react'
import { Categories } from '../../Componentes/Categories'

export function Shop () {
	const [getCategories, setCategories] = useState({})

	useEffect(() => {
		const getCategories = async () => {
			const category = await getCategoriesCollections ()
		}

  getCategories()
	}, [])

	console.log (Categories)

	return (
		<>
		<div>
			<h1> Compras </h1>
		</div>

		<div>
			{Object.keys(Categories).map((title) => {
				return <categoriesPreview key={title} title={title} />
			})}
		</div>
		</>
	)
}
