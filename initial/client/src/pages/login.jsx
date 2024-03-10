import {firebaseAuth} from "@/utils/FirebaseConfig";
import React from "react";
import Image from "next/image";
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import axios from "axios";
import {useRouter} from "next/router";
import { CHECK_USER_ROUTE } from '../utils/ApiRoutes.js'

function login() {
  const handleLogin = async ()=>{
    const provider = new GoogleAuthProvider();
    const {user:{displayName : name,email,photoUrl: profileImage},
  } = await signInWithPopup(firebaseAuth,provider);
  try{
    if(email){
      const {data} =await axios.post(CHECK_USER_ROUTE,{email});
      console.log({data});
    }
  }catch(err){
    console.log(err)
  }
    
  };
  return <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6"><div className="flex items-center justify-center gap-2 text-white"><Image
  src="/chatlogo.png" alt="Dialogify" height={300} width={300}
  />
  <span className="text-7xl">Dialogify</span></div>
  <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin}>
    <FcGoogle className="text-5xl"/>
    <span className="text-white text-2xl">login with google</span> 
    </button></div>;
}

export default login;
