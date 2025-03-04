
//toLowerCase() -> para deixar as letras maiúsculas.
//SnapShot -> copia os documentos

import { initializeApp } from 'firebase/app'
import { collection, doc, DocumentSnapshot, getDoc, getFirestore, query, writeBatch} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9VHDgrXchQ4VKjDU5swD0ZNUTiac1Hh0",
  authDomain: "loja-relogio.firebaseapp.com",
  projectId: "loja-relogio",
  storageBucket: "loja-relogio.firebasestorage.app",
  messagingSenderId: "89460718611",
  appId: "1:89460718611:web:32b9abf3e9a3d56a1013e6"
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objects) => {
	const collectionRef = collection(db, collectionKey)
	const batch = writeBatch(db)

	objects.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit()
	console.log('done')
}

export const getCategories = async () => {
	const collectionRef = collection (db, 'categories')
	const q = query(collectionRef)

	const querySnapShot = await getDoc(q)
	const categoryMap = querySnapShot.docs.reduce((acc, DocumentSnapshot) => {
		const { title, items } = DocumentSnapshot.data()
		acc[title] = items
		return acc
	}, {})
	return categoryMap
}

//reduce cria um novo array para cada categoria.
