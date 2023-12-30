import React from 'react'
import {MdEmail} from "react-icons/md"


const Header = () => {
  return <nav>

    <NavContent />
  </nav>
}

const NavContent =()=>(
<>

<h2>TARUN PAL</h2>
<div>
  <a href="#home">Home</a>
  <a href="#work">Project</a>
  <a href="#services">Skills</a>
  <a href="#testimonial">About Me</a>
  <a href="#contact">Contact</a>
</div>
<a href="mailto:tpal59200@gmail.com">
  <button><MdEmail size={"35px"}/></button>
</a>

</>

)


export default Header
