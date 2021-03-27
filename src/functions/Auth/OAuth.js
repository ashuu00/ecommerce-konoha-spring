import   firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebaseConfig'


firebase.initializeApp(config);
export const auth=firebase.auth(); 

export default function Register(){

    
   
  // // //auth for authorize using emails
   
   const provider=new firebase.auth.GoogleAuthProvider();
   // //google oauth

    firebase.auth()
   .signInWithPopup(provider)
   .then((result) => {
   
     var credential = result.credential;
 
     // This gives you a Google Access Token. You can use it to access the Google API.
     var token = credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     
     return user;
     // ...
   }).catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;
     // ...
    
   });
   
}

