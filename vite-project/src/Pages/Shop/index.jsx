import { useEffect, useState } from 'react'
import { getCategories } from '../../utils/firebase'
import { Categories } from '../../Componentes/Categories'
import { getCategoriesCollections } from '../../utils/firebase'
import {categoriesPreview} from '../../Componentes/CategoriesPreview'


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
			{Object.keys(categories).map((title) => {
				return <categoriesPreview key={title} title={title} />
			})}
		</div>
		</>
	)

}
