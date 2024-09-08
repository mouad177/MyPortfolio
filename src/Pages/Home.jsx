import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Mouad from '/MyLandingPageProjects/MyPortfolio/src/assets/img/Mouad.png'
import Mouad2 from '/MyLandingPageProjects/MyPortfolio/src/assets/img/Mouad2.png'
import Programming from '/MyLandingPageProjects/MyPortfolio/src/assets/Programming.json'
import arrow from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/up-arrow.png'
import facebook from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/facebook.png'
import Github from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/Github.png'
import instagram from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/instagram.png'
import linkdin from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/linkdin.png'
import programmingicon from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/programming.png'
import html from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/html-5.png'
import css from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/css-3.png'
import js from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/js.png'
import reacrLogo from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/reactLogo.png'
import Tailwind from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/Tailwind.png'
import framerMotion from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/framer-motion-seeklogo.svg'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import Programming2 from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/programming (1).png'
import code from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/code.png'
import codeReview from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/code-review.png'
import landingPage from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/landing-page.png'
import webProgramming from '/MyLandingPageProjects/MyPortfolio/src/assets/icons/web-programming.png'
import pizzaproject from '/MyLandingPageProjects/MyPortfolio/src/assets/img/pizzaproject.png'
import pizzaprojectmobile from '/MyLandingPageProjects/MyPortfolio/src/assets/img/pizzaprojectmobile.png'
import { Link } from 'react-router-dom'
import CarsRentalproject from '/MyLandingPageProjects/MyPortfolio/src/assets/img/CarsRentalproject.png'
import CarsRentalprojectmobile from '/MyLandingPageProjects/MyPortfolio/src/assets/img/CarsRentalprojectmobile.png'
import Clothingproject from '/MyLandingPageProjects/MyPortfolio/src/assets/img/Clothingproject.png'
import Clothingprojectmobile from '/MyLandingPageProjects/MyPortfolio/src/assets/img/Clothingprojectmobile.png'
import SmartPhonesProject from '/MyLandingPageProjects/MyPortfolio/src/assets/img/SmartPhonesProject.png'
import SmartPhonesProjectmobile from '/MyLandingPageProjects/MyPortfolio/src/assets/img/SmartPhonesProjectmobile.png'
import LaptopsProject from '/MyLandingPageProjects/MyPortfolio/src/assets/img/LaptopsProject.png'
import LaptopsProjectmobile from '/MyLandingPageProjects/MyPortfolio/src/assets/img/LaptopsProjectmobile.png'
import Email from '/MyLandingPageProjects/MyPortfolio/src/assets/email.json'
import CV from '/MyLandingPageProjects/MyPortfolio/src/assets/wepik-simple-high-school-student-joan-resume-20240908003759I8x5.pdf'
function Home() {

  return (

<>
<Header/>

<section id="Home">
  <div className=" flex flex-col md:flex-row-reverse items-center justify-between">
<img  className='md:translate-x-10 lg:translate-x-10 mt-4 z-20 w-[360px] md:w-[500px]' src={Mouad} width={500} />

<div className="md:-translate-y-20 md:translate-x-28 md:space-y-10">
  <div className='flex flex-row space-x-3 relative mt-4 md:mt-0 left-[10%] md:left-[44%] lg:left-[25%] '>
    <motion.p initial={{opacity:0,x:-90}} transition={{duration:1}} whileInView={{x:0,opacity:1}}  className='font-extrabold text-black dark:text-white text-4xl'>Hello,It's</motion.p> <motion.h2  initial={{opacity:0,x:-90}} transition={{duration:1}} whileInView={{x:0,opacity:1}}   className='font-extrabold text-green-400 text-4xl '>Mouad</motion.h2> 
  </div>

  <motion.div  initial={{opacity:0,x:-90}} transition={{duration:1}} whileInView={{x:0,opacity:1}}   className='text-xl md:text-3xl text-center lg:text-4xl font-extrabold w-[600px]  text-cyan-400 leading-snug relative md:left-[30%] lg:left-[16%]'>
  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm Developer",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm Coder",
        3000,
        "I'm Designer",
        3000,
 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />

  </motion.div>
<div className='flex flex-col items-center space-y-5'>
<a className='bg-orange-400   text-white font-extrabold p-2 rounded-2xl  flex items-center justify-center space-x-4 md:translate-x-24 self-center text-center mx-auto w-[52%] md:w-[30%] hover:bg-orange-500' download='Mouad-Agzennai-CV' href={CV} >Download CV</a>

<a className='bg-green-400 hover:bg-green-600 p-2 rounded-2xl  flex items-center justify-center space-x-4 md:translate-x-24 self-center text-center mx-auto w-[52%] md:w-[30%]' href="#AboutMe">
  <p className='font-bold text-white text-xl'>About Me</p>
  <img id='arrow' src={arrow} width={30}  />
</a>
<motion.div  initial={{opacity:0,x:-90}} transition={{duration:1}} whileInView={{x:0,opacity:1}} viewport={{amount:0.5,once:false}}  id="SocialMedia" className=' flex items-center justify-center space-x-4 md:translate-x-24 self-center text-center mx-auto w-[52%] md:w-[30%]'>
  <a href="https://www.facebook.com/profile.php?id=61565346160623" target='_blank'><img src={facebook} width={40} /></a>
  <a href="https://www.instagram.com/mouad37270/" target='_blank'><img src={instagram} width={40} /></a>
  <a className='bg-purple-400 p-1 rounded-2xl' href="https://github.com/mouad177" target='_blank'><img src={Github} width={60} /></a>
  <a href="https://www.linkedin.com/in/mouad-agzennai-bakhouch-35706a296/" target='_blank'><img src={linkdin} width={60} /></a>

</motion.div>
</div>

</div>


  </div>
  <motion.div initial={{opacity:0,rotate:74}} transition={{duration:1}} animate={{opacity:1,rotate:80}} id='bg' className='z-10 rotate-[80deg] left-[-60%] absolute top-[-14%]  md:top-[10%] lg:left-[60%]  md:left-[40%] w-[400px] h-[680px] duration-1000  lg:w-[750px] lg:h-[470px]  bg-cyan-500 dark:bg-cyan-500  md:w-[760px] md:h-[300px] '></motion.div>

</section>


<section id='AboutMe' className='mt-20'>
<div className="flex flex-col md:flex-row-reverse items-center justify-around">
  <motion.div viewport={{once:false,amount:0.5}} initial={{x:100,opacity:0}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
  <Lottie animationData={Programming} style={{width:500}} />

  </motion.div>
<div className='flex flex-col items-center space-y-4'>
  <motion.h2 className='text-4xl text-center font-extrabold dark:text-blue-400 text-blue-400' viewport={{once:false,amount:0.5}} initial={{y:50,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.3}}>Who is Mouad Agzennai?</motion.h2>
  <motion.p className='text-lg p-2 text-black dark:text-white text-center font-bold leading-relaxed md:max-w-[500px]' viewport={{once:false,amount:0.5}} initial={{y:60,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.4}}>Hello, I'm Mouad Agzennai, a seasoned front-end developer. I have extensive skills in developing and designing front-end interfaces using HTML, CSS, and JavaScript, as well as libraries and frameworks such as Tailwind CSS, React.js, and Framer Motion. I work on transforming creative ideas into interactive and appealing websites, always aiming to deliver an excellent user experience through meticulous designs and high performance.

</motion.p>
</div>

</div>


<div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:ml-10 ">
<div className='flex flex-col px-10 items-center space-y-4'>
<motion.div initial={{opacity:0,x:-50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,x:0}} id='My-info'>
<h2   className='mt-10 text-5xl font-extrabold text-orange-400 text-center mb-9'>My info</h2>

</motion.div>
<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Birthday" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Birthday:</span><p className='font-bold text-black text-xl dark:text-white'>21 april 2006</p>

</motion.div>
<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Age" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Age:</span><p className='font-bold text-black text-xl dark:text-white'>18</p>

</motion.div>

<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Country" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Country:</span><p className='font-bold text-black text-xl dark:text-white'>Morocco</p>

</motion.div >
<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="City" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>City:</span><p className='font-bold text-black text-xl dark:text-white'>Tangier</p>

</motion.div>

<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Email" className='flex flex-col items-center text-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Email:</span>
<p className=' font-bold text-black md:text-lg  dark:text-white'>mouadagzennaibakhouch@gmail.com</p>

</motion.div>
<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Phone" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Phone:</span><p className='font-bold text-black text-xl dark:text-white'>+212 772-282549</p>









</motion.div>
<motion.div initial={{opacity:0,y:50}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.2}} whileInView={{opacity:1,y:0}} id="Freelancer" className='flex items-center space-x-3'>
<span className='font-extrabold text-black text-xl dark:text-white'>Freelancer:</span><p className='font-bold text-black text-xl dark:text-white'>Availabel</p>






</motion.div>
</div>
<div className='relative'>
<img className='z-20' src={Mouad2} width= {530} />


<motion.div initial={{opacity:0,rotate:-60}} viewport={{amount:0.5,once:true}} transition={{duration:1,delay:0.1}} whileInView={{opacity:1,rotate:-80}}  id='bg2' className='-z-20 w-[700px] h-[600px] bg-orange-300 absolute left-[-50%] md:left-[40%] lg:left-[20%] top-[-12%] md:top-[-10%] lg:top-[25%] rotate-[-80deg]'></motion.div>
</div>

</div>

<div id="Skils" >
  <div className='flex flex-col items-center'>
  <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} id="titleSkils" className='flex items-center justify-center space-x-3'>

<div id='TitleSkilsText' className='flex items-cente space-x-3'>
<p className='text-black dark:text-white font-extrabold text-4xl'>My</p><h2 className='text-green-500 font-extrabold text-4xl'>Skils</h2>
</div>


<img src={programmingicon} width={50} alt="" />
  </motion.div>

  <div id='SkilsIcons'>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={html} width={70}/>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={css} width={70}/>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='rounded-xl' src={js} width={60}/>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={reacrLogo} width={70}/>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={Tailwind} width={70}/>
<motion.img initial={{opacity:0,y:40,rotate:10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={framerMotion} width={55}/>

  </div>

  </div>


  {/* TailwindFlex مكتبة */}
  <div className=" flex justify-center p-2 items-center dark:bg-gray-800">
  <div className="max-w-xl mx-auto w-full">
    {/* To achieve the desired progress, you can update the 'stroke-dasharray' property. */}

    <motion.div initial={{opacity:0,x:-40,rotate:10}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          HTML
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          80%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#FF6464"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "79.2px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </motion.div>
    <motion.div initial={{opacity:0,x:-40,rotate:10}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          CSS{" "}
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          95%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#9272D4"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "94.05px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </motion.div>
    <motion.div initial={{opacity:0,x:-40,rotate:10}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          React Js
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          65%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#5185D4"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "64.35px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </motion.div>
    <motion.div initial={{opacity:0,x:-40,rotate:10}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          JavaScript
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          75%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#CA56F2"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "74.25px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </motion.div>
    <motion.div initial={{opacity:0,x:-40,rotate:10}} whileInView={{opacity:1,x:0,rotate:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
          Tailwind
        </span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
          80%
        </span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#D9D9D9"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
   L 99.5,0.5"
          strokeLinecap="round"
          stroke="#FF6464"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: "79.2px, 100px",
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
          }}
        ></path>
      </svg>
    </motion.div>
  </div>
</div>

</div>
</section>
<section id="Services">
<motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} id="titleServices" className='flex items-center justify-center space-x-3'>

<div id='TitleServicesText' className='flex items-cente space-x-3'>
<p className='text-black dark:text-white font-extrabold text-4xl'>My</p><h2 className='text-cyan-500 font-extrabold text-4xl'>Services</h2>
</div>


<img src={code} width={50} alt="" />
  </motion.div>

<div id='my-services' className='mt-10'>
<div id="LandingPage" className='flex flex-col items-center gap-3'>
<motion.img initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={landingPage} width={150} alt="" />
<motion.h3 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-extrabold text-3xl text-black dark:text-white'>Landing Page</motion.h3>
<motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-bold leading-relaxed max-w-[400px] text-lg text-black dark:text-white'>I design professional landing pages that combine aesthetics and functionality, featuring modern and attractive designs to captivate your audience and achieve your business goals.







</motion.p>
</div>
<div id="Responsive" className='flex flex-col items-center gap-3'>
<motion.img initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={codeReview} width={150} alt="" />
<motion.h3 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-extrabold text-3xl text-black dark:text-white'>Responsive Web Design</motion.h3>
<motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-bold leading-relaxed max-w-[400px] text-lg text-black dark:text-white'>I specialize in responsive web design, ensuring excellent performance and an attractive appearance on all devices, delivering an exceptional user experience regardless of screen size.


















</motion.p>
</div>
<div id="WebDev" className='flex flex-col items-center gap-3'>
<motion.img initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} src={Programming2} width={150} alt="" />
<motion.h3 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-extrabold text-3xl text-black dark:text-white'>Web Development</motion.h3>
<motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} className='font-bold leading-relaxed max-w-[400px] text-lg text-black dark:text-white'>I specialize in web development, creating high-quality websites that are fast, secure, and user-friendly.


























</motion.p>
</div>

</div>
</section>

<section id='Portfolio'>
  
<motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.5}} transition={{duration:1}} id="titleProjects" className='flex items-center justify-center space-x-3'>

<div id='TitleProjectsText' className='flex items-center space-x-3'>
<p className='text-black dark:text-white font-extrabold text-4xl'>My</p><h2 className='text-blue-400 font-extrabold text-4xl'>Projects</h2>
</div>


<img src={webProgramming} width={50} alt="" />
  </motion.div>


<div id="Projects" >
<motion.div initial={{opacity:0,x:-20,rotate:6}} whileHover={{scale:1.03}} whileInView={{opacity:1,x:0,rotate:0}} transition={{duration:1}} viewport={{amount:0.5,once:false}}  className='flex flex-col mx-auto  items-center gap-4 bg-gradient-to-tr from-red-600 to-red-400 w-fit p-2 rounded-2xl m-2'>
<a href='https://mouad177.github.io/PizzaProject/' target='_blank' className='text-center'>
<div id="box-image" className='flex items-center '>
<img className='w-[260px] md:w-[300px]' src={pizzaproject} width={300} alt="" />
<img className='w-[70px] md:w-[100px]' src={pizzaprojectmobile} width={100} alt="" />
</div>
<h3 className='text-white font-extrabold text-3xl'>Pizza Restaurant
</h3>
</a>
<div className='flex flex-col items-center space-x-4'>
<a className='bg-red-300 rounded-xl p-2 text-black font-extrabold hover:bg-red-500' href='https://mouad177.github.io/PizzaProject/' target='_blank'>View Project</a>
<p className='text-white leading-relaxed font-bold'>
A simple landing page project for a pizza restaurant featuring four sections. The following technologies were used: HTML, CSS, JavaScript, Tailwind, React.js, and Framer Motion. The website is also fully responsive across all screen sizes.

</p>
</div>
  </motion.div>
  <motion.div initial={{opacity:0,x:-20,rotate:6}} whileHover={{scale:1.03}} whileInView={{opacity:1,x:0,rotate:0}} transition={{duration:1}} viewport={{amount:0.5,once:false}}  className='flex flex-col mx-auto  items-center gap-4 bg-gradient-to-tr from-orange-600 to-orange-400 w-fit p-2 rounded-2xl m-2'>
<a href='https://mouad177.github.io/CarsRental/' target='_blank' className='text-center'>
<div id="box-image" className='flex items-center '>
<img className='w-[260px] md:w-[300px]' src={CarsRentalproject} width={300} alt="" />
<img className='w-[70px] md:w-[100px]' src={CarsRentalprojectmobile} width={100} alt="" />
</div>
<h3 className='text-white font-extrabold text-3xl'>Car Sales And Rentals

</h3>
</a>
<div className='flex flex-col items-center space-x-4'>
<a className='bg-orange-300 rounded-xl p-2 text-black font-extrabold hover:bg-orange-500' href='https://mouad177.github.io/CarsRental/' target='_blank'>View Project</a>
<p className='text-white font-bold leading-relaxed'>
A simple landing page project for a car rental and sales store, featuring multiple pages for each car using React Router. The following technologies were used: HTML, CSS, JavaScript, Tailwind, React.js. Lottie animation library and Framer Motion were also utilized.The website is fully responsive

</p>
</div>
  </motion.div>



  <motion.div initial={{opacity:0,x:-20,rotate:6}} whileHover={{scale:1.03}} whileInView={{opacity:1,x:0,rotate:0}} transition={{duration:1}} viewport={{amount:0.5,once:false}}  className='flex flex-col mx-auto  items-center gap-4 bg-gradient-to-tr from-purple-600 to-purple-400 w-fit p-2 rounded-2xl m-2'>
<a href='https://mouad177.github.io/SmartPhones/dist/' target='_blank' className='text-center'>
<div id="box-image" className='flex items-center '>
<img className='w-[260px] md:w-[300px]' src={SmartPhonesProject} width={300} alt="" />
<img className='w-[70px] md:w-[100px]' src={SmartPhonesProjectmobile} width={100} alt="" />
</div>
<h3 className='text-white font-extrabold text-3xl'>SmartPhones Store

</h3>
</a>
<div className='flex flex-col items-center space-x-4'>
<a className='bg-purple-300 rounded-xl p-2 text-black font-extrabold hover:bg-purple-500' href='https://mouad177.github.io/SmartPhones/dist/' target='_blank'>View Project</a>
<p className='text-white font-bold leading-relaxed'>
A landing page design for a smartphone store. The following technologies were used: HTML, CSS, JavaScript, Tailwind CSS, along with Componentland,Preline. The website is fully responsive.</p>


</div>
  </motion.div>

  <motion.div initial={{opacity:0,x:-20,rotate:6}} whileHover={{scale:1.03}} whileInView={{opacity:1,x:0,rotate:0}} transition={{duration:1,delay:0.2}} viewport={{amount:0.5,once:false}}  className='flex flex-col mx-auto  items-center gap-4 bg-gradient-to-tr from-green-600 to-green-400 w-fit p-2 rounded-2xl m-2'>
<a href='https://mouad177.github.io/LaptopsStore/dist/' target='_blank' className='text-center'>
<div id="box-image" className='flex items-center '>
<img className='w-[260px] md:w-[300px]' src={LaptopsProject} width={300} alt="" />
<img className='w-[70px] md:w-[100px]' src={LaptopsProjectmobile} width={100} alt="" />
</div>
<h3 className='text-white font-extrabold text-3xl'>Computer Store
</h3>
</a>
<div className='flex flex-col items-center space-x-4'>
<a className='bg-green-300 rounded-xl p-2 text-black font-extrabold hover:bg-green-500' href='https://mouad177.github.io/LaptopsStore/dist/' target='_blank'>View Project</a>
<p className='text-white leading-relaxed font-bold'>A simple design for a landing page for a computer sales website. The following technologies were used: HTML, CSS, JavaScript, Tailwind, along with some libraries: TailwindFlex and ComponentLand. The website is fully responsive.
</p>
</div>
  </motion.div>

</div>
</section>

<section id='Contact'>
<motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='text-black  dark:text-white font-extrabold text-center p-2 text-5xl mt-14'>Contact Us</motion.h2>

  <div className='flex  flex-col-reverse md:flex-row items-center justify-center gap-2'>
<motion.div initial={{opacity:0,x:-100,rotate:30}} whileInView={{opacity:1,rotate:0,x:0}} viewport={{amount:0.5,once:false}} transition={{duration:1}}>  <Lottie  animationData={Email} style={{height:400,width:400}} />
</motion.div>
<form action="https://formsubmit.co/mouadagzennaibakhouch@gmail.com" method="POST">
<div id="box-input" className='flex mt-9 flex-col gap-4 items-center justify-start '>
<motion.div  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.3}} className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="name">Name</label>
<input required type="text" id='name' className='rounded-xl p-[3px]' name='name' />
</motion.div>


<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="phone">Phone</label>
<input required type='number' id='phone' className='rounded-xl p-[3px]' name='Phone' />
</motion.div>
<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.5}}  className='flex'>
<label className='text-black dark:text-white mr-2' htmlFor="em">Email</label>
<input required type="text" id='em' className='rounded-xl p-[3px]' name='Email'/>
</motion.div>

<motion.textarea name='message' initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.6}}  className='rounded-xl dark:bg-[#3d3b3b] dark:text-white text-black' required dir='ltr' placeholder='Message' id='msg'></motion.textarea>
<motion.input initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{amount:0.5,once:false}} transition={{duration:1,delay:0.4}}  required type="submit" value='Send' className='p-2 rounded-2xl bg-yellow-400 text-white font-bold  hover:bg-yellow-500'/>
</div>

</form>

  </div>
</section>
    
</>)
}

export default Home
