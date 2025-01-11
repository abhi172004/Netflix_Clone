// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDGNlDMU5-JZoynfociCYzzRgK_Gt9yYJM",
  authDomain: "netflix-clone-a93a4.firebaseapp.com",
  projectId: "netflix-clone-a93a4",
  storageBucket: "netflix-clone-a93a4.firebasestorage.app",
  messagingSenderId: "56566845076",
  appId: "1:56566845076:web:ba7e9a8411df216acbee81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout= ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};