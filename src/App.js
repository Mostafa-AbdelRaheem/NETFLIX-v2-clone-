import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Home from './pages/home'
import Signin from './pages/signin';
import Signup from './pages/signup';
import { auth } from './utils/firebase';


function App() {
  const user=useSelector(selectUser);
  const dispatch =useDispatch();

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }))
    }else{
      // logout
      dispatch(logout)
    }
  });
  return unsubscribe;
},[]);

  return (
    <div className="App">
      <Router>
        {!user?(
            <Signup/>
          ):(
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/" component={Home}/>
          </Switch>
        )}

      </Router>
    </div>
  );
}

export default App;
