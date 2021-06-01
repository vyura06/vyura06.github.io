import React, { useState, useEffect} from "react";
import './index';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fire from './components/Fire';
import Login from './components/Login'
import Hero from './components/Hero'

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  const handleLogin = () => {
    clearErrors();
    Fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () =>{
    clearErrors();
    Fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  }

  const handleLogout = () => {
    Fire.auth().signOut();
  }

  const authListener = () => {
    Fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <>
      <div className="background">
        {user ? (
          <Hero handleLogout={handleLogout}/>
        ):(
          <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          ></Login>
        )}
      </div>
    </>
  );
}

export default App;
