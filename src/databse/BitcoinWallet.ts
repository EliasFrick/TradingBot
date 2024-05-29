import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfigBitcoinWallet = {
    apiKey: "AIzaSyDxgl1SqrCyImmyDnqjI7bIv79zndZ7BHs",
    authDomain: "tradingbot-9573f.firebaseapp.com",
    projectId: "tradingbot-9573f",
    storageBucket: "tradingbot-9573f.appspot.com",
    messagingSenderId: "837564095127",
    appId: "1:837564095127:web:1ad65d9f0848d3ca2de7d2"
};

const firebaseBitcoinWallet = initializeApp(firebaseConfigBitcoinWallet);

const appBitcoinWallet = initializeApp(firebaseConfigBitcoinWallet);

const firestoreBitcoinWallet = getFirestore(firebaseBitcoinWallet);


export {firebaseBitcoinWallet, appBitcoinWallet, firestoreBitcoinWallet};
