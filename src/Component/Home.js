import React from 'react'
import { Link } from 'react-router-dom'
import pdf from "../Assets/Resume.pdf"
import pawan from "../Assets/pawan_.jpg"
import bcet from "../Assets/bcet.jpg"
import ars from "../Assets/ars.jpg"
import c from "../Assets/c.jpg"
import cpp from "../Assets/cpp.png"
import python from "../Assets/python.png"
import html from "../Assets/html.png"
import css from "../Assets/css.png"
import js from "../Assets/javascript.png"
import tech from "../Assets/tech.png"
import boot from "../Assets/bootstrap.png"
import react from "../Assets/react.png"
import tail from "../Assets/tailwind.webp"
import fire from "../Assets/firebase.png"
import Navbar from './Navbar'
import Footer from './Footer'


export default function Home() {
    return (
        <>
            <Navbar />
            <div className=" main back w-screen justify-evenly h-96 flex gap-20 px-10 items-center">
                <img className=" w-60 rounded-3xl photo" src={pawan} alt="" />
                <img className="main_img w-72" src={tech} alt="" />
                <div className=" main_body flex-col items-center justify-center">
                    <div className=" main_text text-5xl text-slate-300 font-bold">Hi There,<br />I Am <span className=" text-blue-700"> Pawan Raj Singh </span></div>
                    <div className="main_head text-3xl font-semibold text-gray-300 mt-3">Developer</div>
                    <button className=" main_btn front border-4 border-green-800 bg-green-800 text-yellow-100 w-32 h-12 rounded-full ml-20 mt-6 hover:scale-105 ">
                        <Link target='_blank' to={pdf}>Resume</Link>
                    </button>
                </div>
            </div>

            <div className="education w-screen flex-col p-4">
                <h1 className="flex w-screen h-24 text-4xl text-white font-bold justify-center font-serif items-center">Educational Details</h1>
                <div className=" education_out p-4 flex justify-evenly">
                    <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800 
            hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-110 bg-gray-900">
                        <h1 className="text-3xl text-neutral-300 font-bold">Graduation</h1>
                        <img className=" w-24 rounded-3xl" src={bcet} alt="" />
                        <p className="text-xl text-neutral-400 font-semibold">Currently I am Pursuing BTech Degree in Computer Science and Engineering from Bengal College of Engineering and Technology which is affiliated from Maulana Abul Kalam Azad University of Technology, West Bengal formerly WBUT.</p>
                    </div>
                    <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800
            hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-110 bg-gray-900">
                        <h1 className="text-3xl text-neutral-300 font-bold">Senior Secondary</h1>
                        <img className="w-24 rounded-3xl" src={ars} alt="" />
                        <p className="text-xl text-neutral-400 font-semibold">I have completed my Senior Secondary Education from ARS Public School , Bokaro Steel City , Jharkhand - 827001 , which is affiliated to Central Board of Secondary Education.</p>
                    </div>
                    <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800
            hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-110 bg-gray-900">
                        <h1 className="text-3xl text-neutral-300 font-bold">Secondary</h1>
                        <img className="w-24 rounded-3xl" src={ars} alt="" />
                        <p className="text-xl text-neutral-400 font-semibold">I have completed my Secondary Education from ARS Public School , Bokaro Steel City , Jharkhand - 827001 , which is affiliated to Central Board of Secondary Education .</p>
                    </div>
                </div>
            </div>

            <div className="skills flex flex-col w-screen justify-between items-center bg-gray-900 pb-8">
                <h1 className="flex w-screen p-2 text-4xl text-white font-bold font-serif justify-center items-center">Skills</h1>
                <div className=" skills_img flex justify-evenly w-screen">
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={c} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={cpp} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={python} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={html} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={css} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={js} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={react} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={tail} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={boot} alt="" />
                    <img className="h-20 rounded-3xl hover:scale-110 hover:rotate-180 hover:duration-1000" src={fire} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )

}
