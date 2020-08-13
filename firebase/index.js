import fb from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBN_huw_86z7vB1FvvnPwqWZ3KlgaYMr8k',
  authDomain: 'spick-n-span.firebaseapp.com',
  databaseURL: 'https://spick-n-span.firebaseio.com',
  projectId: 'spick-n-span',
  storageBucket: 'spick-n-span.appspot.com',
  messagingSenderId: '493373194436',
  appId: '1:493373194436:web:f7389b571a9d37ce17c991',
  measurementId: 'G-JTH3YBP4GL',
}

!fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

export const firestore = fb.firestore()

export default fb
