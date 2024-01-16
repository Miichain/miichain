import logo from '../src/assets/images/textlogowhite1.png'
import coin from '../src/assets/images/main-coin.png'
import logoMain from '../src/assets/images/purple-logo.png'
import aboutImg from '../src/assets/images/about-logo.png'
import logowhite from '../src/assets/images/logowhite.png'
import './App.css'
import features from '../src/assets/images/phone.png'
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
     <section className="md:p-2 2xl:p-2 bg-[url('../src/assets/images/bg-2.jpg')] md:h-screen lg:h-fit h-fit bg-cover bg-no-repeat w-screen">
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
                <a href="#about"><li>About</li></a>
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
      <section className="p-2 bg-[url('../src/assets/images/bg-6.jpg')]  h-fit bg-cover bg-no-repeat w-screen" id='about'>
             <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
              <div data-aos="fade-up-right" data-aos-duration="2000">
                <img src={aboutImg} className='md:w-[500px] 2xl:w-[800px]'  alt="" />
              </div>
              <div className='' data-aos="fade-up-left" data-aos-duration="1500">
              <h1 className='font-head md:text-[40px] 2xl:text-[70px] text-center md:text-left text-3xl p-2 2xl:p-4'>About Us</h1>
              <div className='md:mr-12 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left'>
              <p className='font-text 2xl:text-[40px] p-4'>
              Mii Chain is a cutting-edge blockchain platform that innovatively integrates cryptocurrency with social media, transforming the way users engage with digital currencies. This platform simplifies cryptocurrency transactions by allowing direct linking of wallets to social media accounts
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
        <div className="flex flex-col md:flex-row justify-between items-center 2xl:justify-evenly  p-6 mx-8 2xl:mx-8" data-aos="fade-up" data-aos-duration="1000">
        {/* Mobile */}
        <div className="md:hidden flex justify-center gap-5 flex-col items-center text-white">
            <div>
            <h1 className='font-head md:text-[40px] md:text-'>Key Features</h1>
            </div>
            <div>
              <img src={features} className='w-[400px] floating' alt="" />
            </div>
            <p className='text-center font-text mb-12'>
            Mii Chain, along with the Mii Wallet, is revolutionizing the way we interact with cryptocurrencies. Our platform is designed to be accessible, secure, and user-friendly, catering to both seasoned crypto enthusiasts and newcomers. Join us as we pave the path towards a more inclusive and streamlined digital currency experience.
            </p>
          </div>         

            <div className="grid grid-row-1 md:grid-row-4 gap-16 md:space-x-2"  data-aos="fade-left"
     data-aos-duration="1500">
            <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center h-fit md:h-fit 2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6  2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Social Media Integration
                  </h3>
                  <p className='p-8 2xl:text-[22px] leading-8 text-white font-text text-sm tracking-wider text-center'>
                   Mii Chain enables users to send and receive funds through their social media accounts, streamlining the cryptocurrency transaction process.


                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Easy Sign-in and Wallet Generation
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  New users can create wallets when signing in, or link their existing wallets, making the platform accessible to a wide audience.
                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Influencer-Friendly Transactions
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  Influencers can benefit from Mii Chain by receiving payments directly through our network, avoiding the high fees and conversion rates of traditional social platforms.
                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Multiple Currency Support
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  Post-launch, Mii Chain will support major cryptocurrencies like USDC, USDT, Eth, and BSC, alongside our native gas token.
                
                  </p>
                
                  </div>
                  
            </div>
       
        {/* Row 2 */}
            <div className="grid grid-row-1 md:grid-row-4 gap-16 mt-4 md:mt-0 md:space-x-5"  data-aos="fade-right"
     data-aos-duration="2500">
             <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Low-Cost Token Bridging
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  Users can bridge tokens from Ethereum and other EVM chains to Mii Chain for low gas, fast, and fee-free transactions.

                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Mass Market Crypto Adoption
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  Our platform caters to users new to crypto, allowing them to receive funds by verifying their social media accounts. The Mii Chain app, available on Play Store and iOS, makes managing crypto effortless.
                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Mii Wallet
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  The official crypto wallet of Mii Chain, Mii Wallet, will soon be available on the App Store and Google Play. This wallet is designed to complement our platform's unique features, ensuring a seamless user experience.
                  </p>
                
                  </div> 
                  <div className="hvr-glow md:flex w-72 md:w-72 flex-col items-center hit-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6 2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Enhanced Security
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  We prioritize security with <span className='font-head'>256</span>-bit SHA encryption, ensuring that only verified social media account holders can access their keys.

                  </p>
                
                  </div> 

                  

                  
            </div>
              {/* Row 3 */}
              <div className="grid grid-row-1 md:grid-row-1 gap-5 mt-4 md:mt-0 md:space-x-5"  data-aos="fade-right"
     data-aos-duration="2500">
             <div className="hvr-glow  md:flex w-72 md:w-72 flex-col  items-center h-fit md:h-fit  2xl:w-[600px] 2xl:h-80 justify-center border-style">
                <h3 className='p-6  2xl:text-[40px] 2xl:leading-10 text-white font-head whitespace-normal text-sm tracking-wider text-center'>
                Compatibility with Existing Wallets
                  </h3>
                  <p className='p-8 text-white font-text text-sm tracking-wider text-center 2xl:text-[22px] leading-8'>
                  Users can continue using wallets like Metamask and authenticate their social media accounts without compromising key security.
                  </p>
                
                  </div> 
                  

                  

                  
            </div>
            <div className="hidden md:flex justify-center flex-col items-center text-white">
            <div>
            <h1 className='font-head md:text-[40px] 2xl:text-[70px] 2xl:text-center'>Key Features</h1>
            </div>
            <div>
              <img src={features} className='w-48 2xl:w-[800px] floating' alt="" />
            </div>
            <p className='text-center font-text 2xl:text-[25px]'>
            Mii Chain, along with the Mii Wallet, is revolutionizing the way we interact with cryptocurrencies. Our platform is designed to be accessible, secure, and user-friendly, catering to both seasoned crypto enthusiasts and newcomers. Join us as we pave the path towards a more inclusive and streamlined digital currency experience.
            </p>
          </div>
            

        </div>
      </section>
        {/* Roadmap */}
        <section className="p-2 2xl:p-12 bg-[url('../src/assets/images/bg-6.jpg')]  h-fit bg-cover bg-no-repeat w-screen" >
        <div className="flex justify-between flex-col  2xl:justify-evenly md:flex-row items-center p-8 mx-12 2xl:mx-16 lg:mx-6" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center flex-col items-center text-black ">
            <div>
            <h1 className='font-head md:text-[40px] 2xl:text-[70px]'>Roadmap</h1>
            </div>
            <div>
              <img src={logowhite} className='w-48 2xl:w-64' alt="" />
            </div>
          </div>

            <div className="grid grid-row-1 md:grid-row-2 gap-5 lg:gap-8">
            <div className="hvr-grow-shadow md:flex flex-col w-72 md:w-fit  2xl:w-[600px]  shadow-gray-600 shadow-2xl p-6 md:p-4 rounded-xl text-center">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black 2xl:text-[30px] mb-4 font-head tracking-wider text-center'>
                Phase 1: Development Kickoff (Current Stage)
                  </p>
              
                  <ul className='text-center font-text 2xl:text-[30px]'>
                    <li> Establish the core blockchain infrastructure.</li>
                    <li>Develop secure and seamless integration with major social media platforms.</li>
                    <li> Conduct initial user testing for functionality.</li>
                  
                  </ul>
                
                  </div> 
                  <div className="hvr-grow-shadow md:flex flex-col w-72  2xl:w-[600px] shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head 2xl:text-[30px] mb-4   tracking-wider text-center'>
                Phase 2: Beta Testing
                  </p>
                  <ul className='text-center font-text 2xl:text-[30px] '>
                  <li>Roll out a limited beta version for a select group of users.</li>
                    <li>Gather feedback on user experience and identify any potential issues.</li>
                    <li>Implement necessary adjustments based on beta testing results.</li>
                  
                  </ul>
                  </div> 
            </div>
            <div className="grid grid-row-1 md:grid-row-2 gap-5">
            <div className="hvr-grow-shadow md:flex flex-col w-72  2xl:w-[600px] shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head 2xl:text-[30px] mb-4  tracking-wider text-center'>
                Phase 3: Public Release
                  </p>
                  <ul className='text-center 2xl:text-[30px]  font-text'>
                  <li>Launch the fully developed MiiChain platform to the public.</li>
                    <li>Integrate additional social media platforms based on user demand.</li>
                    <li>Implement robust security measures for widespread use.
</li>
                  </ul>
                  </div>  
                  <div className="hvr-grow-shadow md:flex flex-col w-72  2xl:w-[600px]  shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head 2xl:text-[30px] mb-4  tracking-wider text-center'>
                Phase 4
                  </p>
                  <ul className='text-center font-text 2xl:text-[30px] '>
                   <li>Develop educational resources to guide users on MiiChain's features.</li>
                   <li>Collaborate with influencers and social media platforms for awareness.</li>
                   <li>Encourage user adoption through promotional campaigns.</li>
                  </ul>
                  </div> 
                  
            </div>
            <div className="grid grid-row-1 md:grid-row-2 gap-5">
            <div className="hvr-grow-shadow md:flex flex-col w-72  2xl:w-[600px] shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head 2xl:text-[30px] mb-4  tracking-wider text-center'>
                Phase 5: Continuous Improvement
                  </p>
                  <ul className='text-center 2xl:text-[30px]  font-text'>
                  <li>Regularly update and enhance MiiChain based on user feedback.</li>
                    <li>Explore partnerships with other blockchain projects and social media platforms.</li>
                    <li> Implement additional features to meet evolving user needs.
</li>
                  </ul>
                  </div>  
                  <div className="hvr-grow-shadow md:flex flex-col w-72  2xl:w-[600px]  shadow-gray-600 shadow-2xl p-6 md:p-6 rounded-xl text-center md:text-left">
                <img src={logoMain} className='w-8' alt="" />
                <p className=' text-black font-head 2xl:text-[30px] mb-4  tracking-wider text-center'>
                Phase 6:Global Expansion
                  </p>
                  <ul className='text-center font-text 2xl:text-[30px] '>
                   <li> Explore opportunities for international expansion.</li>
                   <li> Tailor MiiChain to accommodate diverse social media ecosystems globally.</li>
                   <li>Engage with communities worldwide to enhance inclusivity.</li>
                  </ul>
                  </div> 
                  
            </div>
            

        </div>
      </section>
      {/* Tokenomics */}
      <section className="md:p-2 2xl:p-2 bg-[url('../src/assets/images/bg-2.jpg')] md:h-fit lg:h-fit h-fit bg-cover bg-no-repeat w-screen">
        {/* Navigation bar */}
        {/* <nav className='mx-2 md:mx-6 2xl:p-6 flex justify-between items-center text-white' data-aos="fade-up">
            <div className="">
              <img src={logo} className='w-36 2xl:w-64' alt="" />
            </div>
           
            <div>
              <ul className='space-x-8 font-head text-sm 2xl:text-[30px] font-thin hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Tokenomics</li>
                <li>Roadmap</li>
                <li>Whitepaper</li>
              </ul>

            </div>
            
              <div className='font-head text-sm 2xl:text-4xl font-thin'>
              <a href="" className='neon border-btn-2 px-4 py-2 rounded-xl'>Join</a>
              </div>
        </nav> */}
        {/* Desktop Hero Section */}
        <div className="flex justify-center flex-col items-center m-auto place-content-center">
              <div className='flex '>
              <h1 className='md:text-[80px] text-3xl p-4 md:p-8 2xl:p-12 2xl:text-[100px] font-head text-white neon-text'
         data-aos="fade-up-left" data-aos-duration="1000">TOKENOMICS</h1> 
              </div>
        <div className="hidden md:flex justify-between items-center 2xl:items-center p-4 mx-12 w-fit 2xl:w-full">
        
               
          <div className="flex flex-col justify-between items-center 2xl:items-center md:gap-20 2xl:gap-72 2xl:p-24">
                <div className="">
                  <h1 className='md:text-[80px] 2xl:text-[200px] font-head text-white neon-text' data-aos="fade-up-left" data-aos-duration="1000">MII</h1>  
               
                </div>  
                <div className="hidden md:flex w-72 h-fit 2xl:w-[450px] 2xl:h-fit  justify-center  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                
                
                <span className='p-8 text-white font-head tracking-wider  2xl:text-[55px] 2xl:flex-col text-center 2xl:flex justify-center
                 items-center'>MiiChain<br/>
                <span className='font-text'>Token Name</span>
             
                </span>
                  
                  
                  </div>  
                  <div className="hidden md:flex w-72 h-fit justify-center 2xl:w-[450px] 2xl:h-fit  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                  <span className='p-8 text-white font-head 2xl:text-[55px] 2xl:flex-col tracking-wider text-center 2xl:flex justify-center
                 items-center'>$MIICHAIN<br/>
                <span className='font-text'>Symbol</span>
             
                </span>
                  </div>
         
          </div>  
          <div className="flex flex-col justify-between 2xl:justify-center items-center gap-10 "  data-aos="fade-up"
     data-aos-duration="3000">
                <img src={coin} className='md:w-[700px] 2xl:w-[650px] floating' /> 
             
          </div>  
          <div className="flex flex-col justify-between items-center gap-10   2xl:items-center md:gap-20 2xl:gap-60 2xl:p-24">
          <div className="hidden md:flex w-72 h-fit justify-center 2xl:w-[450px] 2xl:h-fit  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                  <span className='p-8 text-white font-head tracking-wider 2xl:text-[55px] 2xl:flex-col text-center 2xl:flex justify-center
                 items-center'>5%<br/>
                <span className='font-text'>Tax On Transaction</span>
             
                </span>
                  </div>
                  <div className="hidden md:flex w-72 h-fit justify-center 2xl:w-[450px] 2xl:h-fit  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                  <span className='p-8 text-white font-head tracking-wider 2xl:text-[55px] 2xl:flex-col text-center 2xl:flex justify-center
                 items-center'>2%<br/>
                <span className='font-text'>Max Transaction</span>
             
                </span>
                  </div> 
                  <div className="hidden md:flex w-72 h-fit justify-center 2xl:w-[450px] 2xl:h-fit  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                  <span className='p-8 text-white font-head tracking-wider 2xl:text-[55px] 2xl:flex-col text-center 2xl:flex justify-center
                 items-center'>1ETH<br/>
                <span className='font-text'>Initial LP</span>
             
                </span>
                  </div> 
                <div data-aos="fade-down-right" data-aos-duration="2000">
                <h1 className='md:text-[80px] 2xl:text-[200px]  font-head text-white neon-text'>CHAIN</h1>  
                  </div>  
                  <div className="hidden md:flex w-72 h-fit justify-center 2xl:w-[450px] 2xl:h-fit  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                  <span className='p-8 text-white font-head tracking-wider 2xl:text-[55px] 2xl:flex-col text-center 2xl:flex justify-center
                 items-center'>TBA<br/>
                <span className='font-text'>CA</span>
             
                </span>
                  </div>  
         
          </div>  
        </div> 
        </div>

        {/* Mobile Hero Section */}
        <section className='md:hidden flex justify-center flex-col items-center'>
        <div className="flex justify-center items-center flex-row gap-0 ">
          <div className="flex flex-col items-center">
          {/* <div className="" data-aos="fade-up-left" data-aos-duration="1000">
                  <h1 className='md:text-[90px] font-head text-white neon-text text-[50px]'>MII</h1>  
                </div>  */}
                <div className="">
                <img src={coin} className='md:w-[700px] floating' 
                 data-aos="fade-up"
                 data-aos-duration="3000"
                /> 
                </div> 
          </div>
          {/* <div className="flex flex-col  items-center">
          <div className=" mt-48" data-aos="fade-down-right" data-aos-duration="2000">
                  <h1 className='md:text-[80px] font-head text-white neon-text text-[50px] relative right-2'>CHAIN</h1>  
                </div> 
                
              
          </div> */}
        </div>
        <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-up"
     data-aos-duration="3000">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-left" data-aos-duration="2000">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>MiiChain<br/>
                <span className='font-text'>Token Name</span>
             
                </span>
                  
                  
                  </div>  
                </div>  

              
                <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-right"
     data-aos-duration="3000">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-left" data-aos-duration="1500">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>$MiiChain<br/>
                <span className='font-text'>Sybmol</span>
             
                </span>
                  
                  
                  </div>  
                </div>  
                <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-right"
     data-aos-duration="3000">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-right" data-aos-duration="2500">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>5%<br/>
                <span className='font-text'>Tax On Transaction</span>
             
                </span>
                  
                  
                  </div>  
                </div>  
                <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-right"
     data-aos-duration="3000">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-left" data-aos-duration="3000">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>2%<br/>
                <span className='font-text'>Max Transaction</span>
             
                </span>
                  
                  
                  </div>  
                </div>  

                <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-left"
     data-aos-duration="3500">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-left" data-aos-duration="3000">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>1 ETH<br/>
                <span className='font-text'>Initial LP</span>
             
                </span>
                  
                  
                  </div>  
                </div> 
                <div className="flex flex-col justify-between items-center p-4 gap-2"  data-aos="fade-right"
     data-aos-duration="4000">
               <div className="flex md:hidden w-72 h-fit 2xl:w-[450px] 2xl:h-[450px] justify-center  border-style" data-aos="fade-down-left" data-aos-duration="3000">
                
                
                <span className='p-4 text-white font-head tracking-wider text-center 2xl:flex justify-center
                 items-center'>TBA<br/>
                <span className='font-text'>CA</span>
             
                </span>
                  
                  
                  </div>  
                </div> 
      </section>
        

     </section>
      {/* Footer */}
      <section className="p-2 2xl:p-4 bg-[url('../src/assets/images/bg-5.jpg')] h-fit bg-cover bg-no-repeat w-screen " >
        <div className="flex justify-between items-center font-head md:mx-6">
          <div className='text-white'>
            <img src={logo} className='w-24 md:w-56 2xl:w-80 object-contain' alt="" />
            <p className='font-text p-2 text-[12px] md:text-[20px]  2xl:text-[40px] '> Revolutionizing Crypto with Social Media<br/> Integration and the Mii Wallet.</p>
          </div>
          <div className="hidden md:grid grid-cols-3 md:text-[15px]  2xl:text-[30px]  font-text text-white place-items-center gap-20">
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
          <div className='flex-row flex items-center justify-center md:space-y-3 space-x-5 text-white ' >
                  <PiTelegramLogoFill  className='md:text-3xl 2xl:text-[60px]' data-aos="zoom-in-up"  data-aos-duration="1500" />
                  <FaMedium className='2xl:text-[60px] md:text-3xl' data-aos="zoom-in-up" data-aos-duration="2000" />
                  <FaXTwitter className='2xl:text-[60px] md:text-3xl' data-aos="zoom-in-up" data-aos-duration="2500"  />

                  </div>  
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className='text-center font-head text-white md:text-[10px] text-[8px]  2xl:text-[30px] tracking-widest'>All rights reserved 2024 Miichain</p>
        </div>
      </section>

    </>
  )
}

export default App
