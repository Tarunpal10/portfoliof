import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from 'react-hot-toast'
import {addDoc,collection} from "firebase/firestore"
import { db } from '../firebase'
const Contact = () => {


   

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMessage]=useState("")
  const [disableBtn,setDisableBtn]= useState(false)



  const submitHandler = async(e)=>{
    e.preventDefault()
    setDisableBtn(true)

    try{
    await addDoc(collection(db,"contacts"),{name, email, message});
    setName("")
    setEmail("")
    setMessage("")
    toast.success("Message Sent")
    setDisableBtn(false)
     
    }
    catch (error){
   toast.error("error")
   console.log(error)
    }

  }
  return (
    <div id='contact'>
<section>
    <form onSubmit={submitHandler}>
        <h2>Contact Me</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required />
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Meesage' required />

        <button type='submit' disabled={disableBtn} className={disableBtn?"disableBtn":""}>Send</button>
    </form>
</section>
<aside>
    <img src={vg} alt="" />
</aside>
    </div>
  )
}

export default Contact
