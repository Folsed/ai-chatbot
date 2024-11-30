import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getApp, getApps, initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAwLwyvf76wKbb1WdqbJFiBe28K30iVeMA',
    authDomain: 'ask-luna-f5fe8.firebaseapp.com',
    projectId: 'ask-luna-f5fe8',
    storageBucket: 'ask-luna-f5fe8.firebasestorage.app',
    messagingSenderId: '1071417222998',
    appId: '1:1071417222998:web:c82dc03a1fd167b7ea58f7',
    measurementId: 'G-YJE1C6TESX',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
