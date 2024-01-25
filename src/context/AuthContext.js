import { createContext , useContext , useEffect , useState  } from "react";
import {auth , db} from '../firebase/config'
import {createUserWithEmailAndPassword ,
     signInWithEmailAndPassword ,
      signOut , onAuthStateChanged} from 'firebase/auth'
import 'firebase/firestore'
import { collection, addDoc } from "firebase/firestore";
const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user , setUser] = useState({})
    
    function signUp(email , password ,phone ,username){
        return createUserWithEmailAndPassword(auth , email , password).then((result)=>{
            
                addDoc(collection(db,'users'),{
                    id:result.user.uid,
                    phone:phone,
                    username:username,
                    email:email,
                })
            
            
        })
    }

    
    function logIn(email ,password){
        return signInWithEmailAndPassword(auth, email , password).then((result)=>{
            console.log(result)
        })
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    })

    return(
        <AuthContext.Provider value={{signUp ,logIn , logOut , user}}>
            {children}
        </AuthContext.Provider>

    )
}

export function UserAuth() {
    return useContext(AuthContext)
}