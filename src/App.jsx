import logo from '../src/assets/images/textlogowhite1.png'
import coin from '../src/assets/images/main-coin.png'
import logoMain from '../src/assets/images/purple-logo.png'
import aboutImg from '../src/assets/images/about-logo.png'
import logowhite from '../src/assets/images/logowhite.png'
import './App.css'
import { PiTelegramLogoFill } from "react-icons/pi";
import { TbChevronDownRight } from "react-icons/tb";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
 
  return (
    <>
     {/* Hero Section */}
     <section className="md:p-2 2xl:p-2 bg-[url('../src/assets/images/bg-2.jpg')] md:h-screen h-fit bg-cover bg-no-repeat w-screen">
        {/* Navigation bar */}
        <nav className='mx-2 md:mx-6 2xl:p-6 flex justify-between items-center text-white' data-aos="fade-up">
          {/* Site Logo */}
            <div className="">
              <img src={logo} className='w-36 2xl:w-64' alt="" />
            </div>
            {/* Nav Links */}
            <div>
              <ul className='space-x-8 font-head text-sm 2xl:text-[30px] font-thin hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Tokenomics</li>
                <li>Roadmap</li>
                <li>Whitepaper</li>
              </ul>

            </div>
              {/* Button */}
              <div className='font-head text-sm 2xl:text-4xl font-thin'>
              <a href="" className='neon border-btn-2 px-4 py-2 rounded-xl'>Join</a>
              </div>
        </nav>
        {/* Desktop Hero Section */}
        <div className="flex justify-center items-center m-auto place-content-center">
        <div className="hidden md:flex justify-between items-center 2xl:items-center p-4 mx-12 w-fit 2xl:w-full">
          <div className="flex flex-col justify-between items-center 2xl:items-center md:gap-20 2xl:gap-72 2xl:p-24">
                <div className="">
                  <h1 className='md:text-[80px] 2xl:text-[100px] font-head text-white neon-text' data-aos="fade-up-left" data-aos-duration="1000">MII</h1>  
                </div>  
                <div className="hidden md:flex w-72 h-72 2xl:w-[450px] 2xl:h-[450px]  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                <p className='p-8 text-white font-text tracking-wider text-center 2xl:flex justify-center items-center'>
                Mii Chain is a cutting-edge blockchain platform that innovatively integrates cryptocurrency with social media, transforming the way users engage with digital currencies.
                  </p>
                  </div>  
         
          </div>  
          <div className="flex flex-col justify-between 2xl:justify-center items-center gap-10 "  data-aos="fade-up"
     data-aos-duration="3000">
                <img src={logoMain} className='md:w-[700px] 2xl:w-[650px] floating' /> 
             
          </div>  
          <div className="flex flex-col justify-between items-center gap-10   2xl:items-center md:gap-20 2xl:gap-60 2xl:p-24">
                <div className=" border-style w-72 h-72 hidden md:flex 2xl:w-[450px] 2xl:h-[450px] "  data-aos="fade-up-right" data-aos-duration="1000">
                  <p className='p-8  text-white font-text tracking-wider text-center 2xl:flex justify-center items-center'>
                  This platform simplifies cryptocurrency transactions by allowing direct linking of wallets to social media accounts
                  </p>
                  </div>  
                <div data-aos="fade-down-right" data-aos-duration="2000">
                <h1 className='md:text-[80px] 2xl:text-[100px]  font-head text-white neon-text '>CHAIN</h1>  
                  </div>  
                  <div className='flex-col flex md:flex-row space-x-10 text-white ' >
                  <PiTelegramLogoFill  data-aos="zoom-in-up" className='2xl:text-[60px]' data-aos-duration="1500" />
                  <FaMedium className='2xl:text-[60px]' data-aos="zoom-in-up" data-aos-duration="2000" />
                  <FaXTwitter className='2xl:text-[60px]' data-aos="zoom-in-up" data-aos-duration="2500"  />

                  </div>  
         
          </div>  
        </div> 
        </div>

        {/* Mobile Hero Section */}
        <section className='md:hidden flex justify-center flex-col items-center'>
        <div className="flex justify-between items-center flex-row gap-0 ">
          <div className="flex flex-col items-center">
          <div className="" data-aos="fade-up-left" data-aos-duration="1000">
                  <h1 className='md:text-[90px] font-head text-white neon-text text-[50px]'>MII</h1>  
                </div> 
                <div className="">
                <img src={logoMain} className='md:w-[700px] floating' 
                 data-aos="fade-up"
                 data-aos-duration="3000"
                /> 
                </div> 
          </div>
          <div className="flex flex-col  items-center">
          <div className=" mt-48" data-aos="fade-down-right" data-aos-duration="2000">
                  <h1 className='md:text-[80px] font-head text-white neon-text text-[50px] relative right-2'>CHAIN</h1>  
                </div> 
                
                <div className='flex-col flex md:flex-row space-y-3 mt-10 text-white relative right-16'>
                <div className='bg-purple-800/60 p-2 rounded-2xl'  data-aos="zoom-in-up" data-aos-duration="1500">
                  <PiTelegramLogoFill size={30} />
                  </div>
                  <div  className='bg-purple-800/60 p-2 rounded-2xl'  data-aos="zoom-in-up" data-aos-duration="2000">
                  <FaMedium size={30} />
                  </div>
                  <div  className='bg-purple-800/60 p-2 rounded-2xl'  data-aos="zoom-in-up" data-aos-duration="2500">

                  <FaXTwitter size={30} />
                
                  </div>
                  
                </div> 
          </div>
        </div>
        <div className="flex flex-col justify-between items-center p-16 gap-10"  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="border-style w-80 h-fit flex">
                  <p className='p-8  text-white flex justify-center items-center font-text tracking-wider text-center'>
                  Mii Chain is a cutting-edge blockchain platform that innovatively integrates cryptocurrency with social media, transforming the way users engage with digital currencies. This platform simplifies cryptocurrency transactions by allowing direct linking of wallets to social media accounts
                  </p>
                  </div>  
                </div>  
      </section>
        

     </section>

      {/* About Section */}
      <section className="p-2 bg-[url('../src/assets/images/bg-6.jpg')]  h-fit bg-cover bg-no-repeat w-screen">
             <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
              <div data-aos="fade-up-right" data-aos-duration="2000">
                <img src={aboutImg} className='md:w-[500px] 2xl:w-[800px]'  alt="" />
              </div>
              <div className='' data-aos="fade-up-left" data-aos-duration="1500">
              <h1 className='font-head md:text-[40px] 2xl:text-[70px] text-center md:text-left text-3xl p-2 2xl:p-4'>About Us</h1>
              <div className='md:mr-12 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left'>
              <p className='font-text 2xl:text-[40px] p-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptas repellendus nihil saepe ullam. Rem enim facere quod. Aut!
              </p>
              <div className='md:mt-8 mt-6 mb-2 p-4'>
              <a class="bg-white text-black px-12 whitespace-nowrap py-2 rounded-2xl font-head border-btn 2xl:text-4xl">Read More <TbChevronDownRight className='inline' size={20} /> </a>
              </div>
              </div>
              </div>
            </div>
      </section>
      {/* Features */}
      <section className="p-2 2xl:p-12 bg-[url('../src/assets/images/bg-7.jpg')]  h-fit bg-cover bg-no-repeat w-screen" >
        <div className="flex flex-col md:flex-row justify-between items-center 2xl:justify-evenly   p-8 mx-12 2xl:mx-16" data-aos="fade-up" data-aos-duration="1000">
        {/* Mobile */}
        <div className="md:hidden flex justify-center gap-10 flex-col items-center text-white">
            <div>
            <h1 className='font-head md:text-[40px] md:text-'>Features</h1>
            </div>
            <div>
              <img src={logowhite} className='w-48' alt="" />
            </div>
          </div>         

            <div className="grid grid-row-1 md:grid-row-2 gap-10"  data-aos="fade-left"
     data-aos-duration="1500">
            <div className="hvr-glow md:flex w-72 h-32 md:h-60 2xl:w-96 2xl:h-80 justify-center border-style">
                <p className='p-8 text-white font-text tracking-wider text-center'>
                  Lorem, ipsum.
                  </p>
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:h-60  h-32 2xl:w-96 2xl:h-80 justify-center border-style">
                <p className='p-8 text-white font-text tracking-wider text-center'>
                  Lorem, ipsum.
                  </p>
                  </div> 
            </div>
            <div className="grid grid-row-1 md:grid-row-2 gap-5 mt-4 md:mt-0"  data-aos="fade-right"
     data-aos-duration="2500">
            <div className="hvr-glow md:flex w-72  h-32 md:h-60 2xl:w-96 2xl:h-80 justify-center border-style">
                <p className='p-8 text-white font-text tracking-wider text-center'>
                  Lorem, ipsum.
                  </p>
                  </div> 
                  <div className="hvr-glow md:flex w-72  h-32 md:h-60 2xl:w-96 2xl:h-80 justify-center border-style">
                <p className='p-8 text-white font-text tracking-wider text-center'>
                  Lorem, ipsum.
                  </p>
                  </div> 
                  
            </div>
            <div className="hidden md:flex justify-center flex-col items-center text-white">
            <div>
            <h1 className='font-head md:text-[40px] 2xl:text-[70px]'>Features</h1>
            </div>
            <div>
              <img src={logowhite} className='w-48 2xl:w-64' alt="" />
            </div>
          </div>
            

        </div>
      </section>
        {/* Roadmap */}
        <section className="p-2 2xl:p-12 bg-[url('../src/assets/images/bg-6.jpg')]  h-fit bg-cover bg-no-repeat w-screen" >
        <div className="flex justify-between flex-col  2xl:justify-evenly md:flex-row items-center p-8 mx-12 2xl:mx-16" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center flex-col items-center text-black">
            <div>
            <h1 className='font-head md:text-[40px] 2xl:text-[70px]'>Roadmap</h1>
            </div>
            <div>
              <img src={logowhite} className='w-48 2xl:w-64' alt="" />
            </div>
          </div>

            <div className="grid grid-row-1 md:grid-row-2 gap-5">
            <div className="hvr-grow-shadow md:flex flex-col w-72 h-60 2xl:w-96 2xl:h-80 shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head tracking-wider text-center'>
                Phase 1
                  </p>
                  <ul className='text-center font-text'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  </div> 
                  <div className="hvr-grow-shadow md:flex flex-col w-72 h-60 2xl:w-96 2xl:h-80 shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head tracking-wider text-center'>
                Phase 2
                  </p>
                  <ul className='text-center font-text'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  </div> 
            </div>
            <div className="grid grid-row-1 md:grid-row-2 gap-5">
            <div className="hvr-grow-shadow md:flex flex-col w-72 h-60 2xl:w-96 2xl:h-80 shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head tracking-wider text-center'>
                Phase 3
                  </p>
                  <ul className='text-center font-text'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  </div>  
                  <div className="hvr-grow-shadow md:flex flex-col w-72 h-60 2xl:w-96 2xl:h-80 shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head tracking-wider text-center'>
                Phase 4
                  </p>
                  <ul className='text-center font-text'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                  </div> 
                  
            </div>
         
            

        </div>
      </section>
      {/* Footer */}
      <section className="p-2 2xl:p-4 bg-[url('../src/assets/images/bg-5.jpg')] h-fit bg-cover bg-no-repeat w-screen " >
        <div className="flex justify-between items-center 2xl:text-[20px] font-head md:mx-6">
          <div className='text-white'>
            <img src={logo} className='w-12 2xl:w-56' alt="" />
            <p className='font-text p-2'>Lorem ipsum dolor sit.</p>
          </div>
          <div className="grid grid-cols-3 text-white place-items-center gap-20">
              <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Tokenomics</li>
            </ul>
            </div>
            <div>
            <ul>
              <li>Roadmap</li>
              <li>Whitepaper</li>
              <li>Contact</li>
            </ul>
            </div>
          </div>
          <div className="">
          <div className='flex-col flex md:flex-row space-x-10 text-white ' >
                  <PiTelegramLogoFill  data-aos="zoom-in-up" className='2xl:text-[60px]' data-aos-duration="1500" />
                  <FaMedium className='2xl:text-[60px]' data-aos="zoom-in-up" data-aos-duration="2000" />
                  <FaXTwitter className='2xl:text-[60px]' data-aos="zoom-in-up" data-aos-duration="2500"  />

                  </div>  
          </div>
        </div>
      </section>

    </>
  )
}

export default App
