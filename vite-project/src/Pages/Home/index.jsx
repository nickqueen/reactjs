import { Categories } from '../../Componentes/Categories'
import { useCounter } from '../../Context/CounterContex'

export function Home() {
	const {count, increment} = useCounter()

	return (
		<>
		<Categories />

		<button onClick={increment}> Contador {count} </button>
		</>
	)
}
