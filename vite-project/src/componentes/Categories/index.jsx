import { Category } from './Category';
import './style.css'
import IMGfeminino from '../../assets/img/feminino.jpg'

const categories = [
  {
    "id": 1,
    "title": "Feminino",
    "imageUrl": <img src= { IMGfeminino } />
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

export function Categories() {
  return (
    <div className='container-home'>
      {categories.map((category, index) => {
        return <Category key={index} category={category} />;
      })}
    </div>
	)
}
