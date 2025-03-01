import { Category } from './Category';

const categories = [
  {
    "id": 1,
    "title": "Feminino",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },

  {
    "id": 2,
    "title": "Masculino",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },

  {
    "id": 3,
    "title": "Ambiente Social",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },

  {
    "id": 4,
    "title": "Ambiente Empresarial",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  }

]

export function Categories () {
	return (
		<div>
			{
				categories.map((category) => {
					return <Category category={category} />
			})}

		</div>
	)
}
