import React from 'react'
import pic from './assets/pic5.png'
import "./index.css"
import logo from './assets/logo.jpg'
import js from './assets/js.jpg'
import react from './assets/react.jpg'
import php from './assets/php.jpg'
import git from './assets/git.jpg'
import htmlp from './assets/html.jpg'
import css from './assets/css.jpg'

export default function App(){




  return (
    <>


<nav>
<header>
 
  <div className="menu">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href=".about">About</a></li>
      <li><a href="">Skills</a></li>
  
      <li><a href="">Contact</a></li>
    </ul>
  </div>
  <div className="dark-mode"><i className="ri-moon-fill"></i></div>
</header>

</nav>

<div className="home">
<div className="right"></div>

<div className="img">
<img src={pic} alt="" />

</div>
  <div className="left">
  
 <h2>Hello i'm</h2>
 <b>Eyob Betemariam</b>
 <span>Frontend Developer</span>
  <p>Im Currently software engineering student at aastu interested in working as freelance , parttime and full time frontend developer
  </p> 
  <button>Download CV</button>
  </div>
 
</div>



<div className="about">
  <div className="inner">
  <b>Who I am</b>
<p>

My name's Eyob. I'm a Software Developer based in Addis Ababa, Ethiopia.

Currently I'm Software Engineering student, future Software Engineer. My passion for technology and engineering brought me to the Addis Ababa Science and Technology University. I started computer programming when I was a high school student. Combining my talents with what I learned, I solve the problems in my environment in creative ways.
</p>

</div>
</div>

<div className="skills">
<div className="in">
<ul>
  <li> <span>Html</span> <img src={htmlp} alt="" /> </li>
  <li> <span>Css</span><img src={css} alt="" /></li>
  <li> <span>Javascript</span><img src={js} alt="" /></li>
  <li> <span>React</span><img src={react} alt="" /></li>
  <li> <span>Php</span><img src={php} alt="" /></li>
  <li> <span>Git / Github</span><img src={git} alt="" /></li>
</ul>
</div>
</div>

<div className="contact">

<div className="con">
<h2>Contact</h2>
<form action="#">
<label htmlFor="email">Email</label>
<input type="email" name='email' />
<label htmlFor="subject">Subject</label>
<input type="text" name='subject'/>
<label htmlFor="msg">Message</label>
<textarea name="msg" id="" cols="30" rows="10"></textarea>

<button type='submit' >Submit</button>


</form>

</div>

</div>
<div className="bar">
<ul>
  <li><a href=""></a><i className="ri-github-fill"></i></li>
  <li><a href=""></a><i className="ri-instagram-line"></i></li>
  <li><a href=""></a><i className="ri-telegram-line"></i></li>
  <li><a href=""></a><i className="ri-linkedin-fill"></i></li>
</ul>

</div>
    </>
  )
}

