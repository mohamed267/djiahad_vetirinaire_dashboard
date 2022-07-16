import firebase from  "firebase/compat/app"
import "firebase/compat/auth"
import {  RecaptchaVerifier  ,signInWithPhoneNumber  } from "firebase/auth";
import   { authentication  , messaging} from "./config/firebase-config"
import {useState ,  useEffect} from  'react'


function App() {
  const [number ,  setNumber] = useState("")
  const [expandForm ,  setExpandForm] = useState(false)
  const [otp , setOtp] = useState("")
  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('recapcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response)
      }
    }, authentication);
  }
  const requestOtp = () =>{
    setExpandForm(true)
    generateRecaptcha();

    signInWithPhoneNumber(authentication, number, window.recaptchaVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult
      console.log(confirmationResult)
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error)
      // ...
    });
  }
  const verifyOtp = ()=>{
    console.log(otp)
    const confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then(result=>{

      console.log(result._tokenResponse.idToken);
      console.log(result.user.uid)
    })
    // firebase.auth().signInWithPopUp(new firebase.auth.googleAuthProvider()).then(res=>{
    //   console.log("res is ",res)
    // })
  }
  

  return (
    <div className="App">
      
       <input type="text" palceholder="+213****" value={number} onChange={(e)=>setNumber(e.target.value)} />
      {
        expandForm && 
        <input type="text" palceholder="Otp"  
          value={otp} 
          onChange={(e)=>setOtp(e.target.value)}
        />
      }
        <button onClick={expandForm ?  verifyOtp : requestOtp }>login with google</button>
        <div id="recapcha">

        </div>

    </div>
  );
}

export default App;
