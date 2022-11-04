import React from 'react'
import avatar from "../assets/profile__img.png";
import Atom from "../Atom/Atom";
import slack from "../assets/slack.png";
import github from "../assets/github.png";
import zuri from "../assets/zuri.png";
import ingressive from "../assets/ingressive.png";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='md:mx-20 mx-5'>
      <div className='flex flex-col items-center justify-center py-5'>
        <img className='w-20 h-20 rounded-full object-contain' src={avatar} id="profile__img" alt="" />
        <h1 className='text-[20px] font-semibold' id="slack">
          Adetomokun Israel
        </h1>
      </div>
      <div>
        <a href="https://twitter.com/Ilesanmiisrael0">
          <Atom id="twitter" linkName="Twitter Link" />
        </a>
        <a href="https://training.zuri.team/">
          <Atom id="btn__zuri" linkName="Zuri Team" />
        </a>
        <a id="books" href="http://books.zuri.team/">
          <Atom linkName="Zuri Books" />
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Adetomokun_Israel"
          id="book__python"
        >
          <Atom linkName="Python Books" />
        </a>

        <a href="https://background.zuri.team/" id="pitch">
          <Atom linkName="Background Check for Coders" />
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          <Atom linkName="Design Books" />
        </a>
        <Link to="/contact" id="contact">
        <Atom linkName="Contact Me"/>
        </Link>
      </div>
      <div className="flex gap-5 justify-center py-10">
        <a href="https://slack.com/Adetomokun_Israel">
          {" "}
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/Israel-sanmi">
          <img src={github} alt="github" />
        </a>
      </div>
      <hr />
      <div className='md:flex block justify-around py-2 md:py-5'>
        <img className='object-contain' src={zuri} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="" />
      </div>
    </div>
  );
}

export default Home