import React from "react";
// import img from '../assets/ppp.jpg'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
       

        <h2>Tarun pal</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/CodeWithTarun" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/aesthetic_tarun1" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/tarunpal10" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;