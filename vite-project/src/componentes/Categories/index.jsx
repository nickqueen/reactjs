import { Category } from '../Category';
import './style.css'

const categories = [
  {
    "id": 1,
    "title": "Feminino",
    "imageUrl": 'https://i.ibb.co/mVLND4XC/feminino.jpg'
  },

	{
    "id": 2,
    "title": "Masculino",
    "imageUrl": "https://i.ibb.co/0VvNbH2y/masculino.jpg"
  },

  {
    "id": 3,
    "title": "Ambiente Social",
    "imageUrl": "https://i.ibb.co/5hqHygL0/social.jpg"
  },

  {
    "id": 4,
    "title": "Ambiente Empresarial",
    "imageUrl": "https://i.ibb.co/YTRLc3J5/empresa.jpg"
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
