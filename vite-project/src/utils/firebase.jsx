
//toLowerCase() -> para deixar as letras maiúsculas.
//SnapShot -> copia os documentos

import { initializeApp } from 'firebase/app'
import {
	collection,
	doc,
	getDoc,
	getFirestore,
	query,
	setDoc,
	writeBatch} from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth'

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

//fazer login com o Gmail

const googleProvider = new GoogleAuthProvider
googleProvider.setCustomParameters({
	prompt: 'select_account'
})

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

	return await createUserWithEmailAndPassword (auth, email, password)
}

export const createUserDocumentFromAuth = async (userAuth, info = {}) => {
	if (!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapShot = await getDoc(userDocRef)

	if (!userSnapShot.exists()) {
		const { email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				email,
				createdAt,
				...info
			})
		} catch (e) {
			console.error(e.message)
		}
	}

	return userDocRef
}

export const signInAuthUserWithEmailPassword = async (email, password) => {
	if (!email || !password) return

	return await signInWithEmailAndPassword(auth, email, password)
}

//login pelo gmail

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const singOutAuthUser = async () => {
	await signOut(auth)
}

export const onAuthStateChangeListener = (callback) =>
	onAuthStateChanged(auth, callback)
