//contexto -> trabalhar com estados de maneira geral.
//Provider -> deixar os valores de forma global

import { createContext, useState, useContext } from 'react'

export const CounterContext = createContext()

export const CounterProvider = ( { children }) => {
	const [count, setCount] = useState(0)

	const increment = () => setCount ((prev) => prev +1)

	return (
		<CounterContext.Provider value={{ count, increment }}>
			{children}
		</CounterContext.Provider>
	)
}

//contador | children = App

export const useCounter = () => useContext(CounterContext)

//use um contexto, que é CounterContext
