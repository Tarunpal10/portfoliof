import React, { useRef } from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/logo.png"

const Home = () => {

    const clientCount= useRef(null);
    const projectCount= useRef(null);


    const animationClientsCount =()=>{
        animate(0,1000,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectsCount =()=>{
        animate(0,10,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent = v.toFixed())
        })
    }

   const animations={
    h1:{
        initial:{
            x: "-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    },

    button:{
        initial:{
            y: "-100%",
            opacity:0,
        },
        whileInView:{
            y:0,
            opacity:1,
        }
    }
   }


  return <div id='home'>
   <section>
    
   <div>
<motion.h1 {...animations.h1}>
    Hii, I Am <br/> Tarun Pal
</motion.h1>
 <Typewriter options={{strings:["A Devloper","A Designer","A Creator"],
 autoStart:true,
 loop:true,
 wrapperClassName:"typewriter",
}}/>

<div>
<a href="mailto:tpal59200@gmail.com"> Hire Me </a>
<a href="#work"> projects <BsArrowUpRight/> </a>
</div>



    <article>
        <p>
          + <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
        </p>
        <span>Connections</span>
    </article>
<aside>
<article>
        <p>
          + <motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
        </p>
        <span>Projects Done</span>
    </article>  

    <article deta-apecial>
        <p>
          Contact
        </p>
        <span> tpal59200@gmail.com</span>
    </article>  

    
</aside>

   </div>
   </section>
   <section>
     <img src={me} alt="Tarun" />
   </section>
       <BsChevronDown/>
  </div>
}

export default Home