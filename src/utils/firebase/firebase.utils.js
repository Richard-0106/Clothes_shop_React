//just for using firebase......

import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDllvZ6UiYPAco9Qclpp-cVaK01U7qenaU",
    authDomain: "crwn-clothing-6274b.firebaseapp.com",
    projectId: "crwn-clothing-6274b",
    storageBucket: "crwn-clothing-6274b.appspot.com",
    messagingSenderId: "750917972837",
    appId: "1:750917972837:web:f797f9b0135c9ca215e78c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

if(!userSnapshot.exists()){
    const { displayName,email}=userAuth
    const createdAt = new Date()

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt})
    }catch(error){
        console.log('error fearing the user',error.message)


    }
}

    //if user does not exits
    //create/set the document with the data from userAuth in my collection


    //check if user data exists
    //return userDocref
    return userDocRef;
}

