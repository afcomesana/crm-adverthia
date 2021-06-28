import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import EmailDomainError from '../error/email-domain-error';

const config = {
    apiKey: "AIzaSyDqBVltCqmubBEMyQz2IJAebKyl_hFrlRA",
    authDomain: "crm-adverthia.firebaseapp.com",
    projectId: "crm-adverthia",
    storageBucket: "crm-adverthia.appspot.com",
    messagingSenderId: "969091238454",
    appId: "1:969091238454:web:0177808a8c8408271be697"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        if (email.split("@")[1] !== "adverthia.com") throw new EmailDomainError("Email domain is not valid. Your email must belong to Adverthia Digital Marketing.");
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

// export const getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = auth.onAuthStateChanged(userAuth => {
//             unsubscribe();
//             resolve(userAuth);
//         }, reject)
//     })
// }

export const getCurrentUser = () => {
    return auth.currentUser;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;