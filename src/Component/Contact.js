import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'
import Footer from './Footer';
import toast from 'react-hot-toast'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleClick = () => {
    // try {
    //  const resp = await fetch('http://localhost:444/demo',{
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       "name": name,
    //       "email": email,
    //       "msg": msg
    //     })
    //   })
    //   const parsedResp = await resp.json()
    //   if(parsedResp.status === 'error'){
    //     toast.error(parsedResp.msg)
    //   }else{
    //     toast.success(parsedResp.msg)
    //   }
    //   setName("");
    //   setEmail("");
    //   setMsg("");
    // } catch (error) {
    //   console.log("ERR: "+error);
    //   // toast.error("There was an error connecting Database.")
    // } }else{
    //   toast.error("Details can't be empty")
    if (validate()) {
      toast.success("Message Sent")
    }
    else {
      toast.error("Details Can't be Empty")
    }
  }

  function validate() {
    // console.log(name,email,msg);
    if (name === "" || name === null || email === "" || email === null || msg === null || msg === "") {
      return false;
    }
    else {
      return true;
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_esrxbl7', 'template_aa0tl8i', form.current, {
        publicKey: 'ylkizIYTuHLWidzD2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.location.reload();
        },
      );
  };

  return (
    <>
      <Navbar />
      <form className='bg-black p-3' ref={form} onSubmit={sendEmail}>
        <div className=" contact flex flex-col gap-4 h-auto w-3/4 m-auto items-center bg-slate-800 p-8 rounded-3xl">
          <h1 className="text-3xl font-serif text-white font-bold">Contact Us</h1>
          <input required name='user_name' id='user_name' value={name} onChange={(e) => { setName(e.target.value) }} className="border-4 w-96 h-12 text-xl font-medium px-2 rounded-2xl border-black" type="text" placeholder='Write Your Name Here' />
          <input required name='user_email' id='user_email' value={email} onChange={(e) => { setEmail(e.target.value) }} className="border-4 w-96 h-12 text-xl font-medium px-2 rounded-2xl border-black" type="email" placeholder='Write Your Email Here' />
          <textarea required value={msg} onChange={(e) => { setMsg(e.target.value) }} className="border-4 w-3/4 text-xl font-medium p-2 rounded-2xl border-black" placeholder='Write Your Feedback here' name="message" id="" cols="70" rows="7"></textarea>
          <button type='submit' value="Send" onClick={handleClick} className=" w-40 h-10 bg-black text-slate-300 font-medium rounded-3xl hover:bg-slate-100 hover:text-black">Submit</button>
        </div>
      </form>
      <Footer/>
    </>
  )
}
