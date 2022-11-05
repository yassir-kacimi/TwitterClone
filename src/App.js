import React, {useEffect} from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import {useDispatch ,useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./Login";
import { auth } from './firebase';
import {login, logout} from "./features/userSlice";



function App() {
    const dispatch= useDispatch();
    const user =useSelector(selectUser); // had user hazo m3aya f slice bach nhto finma bghit 
    
    useEffect(()=>{ // it's like an event listener
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(
            login({
              uid:authUser.uid,
              photo:authUser.photoURL,
              email:authUser.email,
              displayName:authUser.displayName 
            }) // state.user fiha had les 4 infos 
          )
        }else{
          dispatch(logout());
        }
      })
    },[dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Feed />
        <Widgets />
        </>
      ) : <Login />}

    </div>
  );
}
export default App;
