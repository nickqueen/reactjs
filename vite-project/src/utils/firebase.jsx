
//toLowerCase() -> para deixar as letras maiúsculas.
//SnapShot -> copia os documentos

import { initializeApp } from 'firebase/app'
import {
	collection,
	doc,
	getDoc,
	getFirestore,
	query,
	writeBatch} from 'firebase/firestore'
import { createAuthUserWithEmailPassword, getAuth } from 'firebase/auth'

	const firebaseConfig = {
		apiKey: import.meta.env.VITE_API_KEY,
		authDomain: import.meta.env.VITE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_MENSSAGING_SENDER_ID,
		appId: import.meta.env.VITE_APP_ID
	}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()

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

export const createAuthUserWithEmailPassword = async (email, password) => {
	if (!email || !password) return

	return await createAuthUserWithEmailPassword(auth, email, password)
}
