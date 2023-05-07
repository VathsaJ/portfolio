import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook, AiFillInstagram} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import consulting from '../../public/consulting.png'
import code from '../../public/code.png'
import Bus from '../../public/Bus.jpg'
import Store from '../../public/Store.jpg'
import Fin from '../../public/Fin.jpg'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>

      <main className='px-10 bg-white dark:bg-gray-900'>

        <section className='min-h-screen '>

          <nav className='p-6 mb-12 flex justify-between shadow-lg rounded-md'>
            <h1 className='text-2xl font-bold dark:text-white'>Joisa</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl hover:scale-110 duration-300' onClick={() => setDarkMode(!darkMode)}/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md ml-8' href=''>Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-20 '>
            <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-7xl mt-10'>Shrivathsa Joisa</h2>
            <h3 className='text-2xl py-2 font-medium md:text-3xl dark:text-slate-300'>Software Developer</h3>
            <p className='text-md py-5 leading-8 font-semibold text-cyan-800 max-w-7xl'>
              Hii.. Im Vathsa ..
              I'm a software developer based in Bangalore, India, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
            </p>
            <p className='text-md font-semibold text-cyan-800'>Please scroll down below to know more..</p>
          </div>

          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-15 mx-auto overflow-hidden'>
            <Image src={deved} alt='' layout='fill' objectFit='cover' className='hover:scale-110 duration-300' />
          </div>

          <div className='flex justify-center gap-16 text-5xl py-3 text-greay-500 mt-12 dark:text-slate-300'>
            <a href='https://www.instagram.com/shrivathsa_joisa/'><AiFillInstagram className='hover:scale-105 duration-300 mt-5'/></a>
            <a href='https://www.facebook.com/shrivathsa.joisa'><AiFillFacebook className='hover:scale-105 duration-300  mt-5' /></a>
            <a href='https://www.linkedin.com/in/vathsajoisa/'><AiFillLinkedin className='hover:scale-105 duration-300 mt-5'/></a>
            <a href='https://github.com/VathsaJ'><FaGithub className='hover:scale-105 duration-300 mt-5'/></a>
          </div>


        </section>


        <section className='mt-20 text-center'>

          <div className=''>
            <h3 className='text-4xl py-1 font-medium text-teal-600'>Services Offered</h3 >
            <p className='text-md py-2 text-gray-800 font-semibold dark:text-slate-300'>
              Below are some of the services I offer. I'm also open to consulting and freelance work.
              Scroll down to learn more about me and my work.
            </p>
          </div>

          <div className='lg:flex dark:text-slate-300'>
            <div className='text-center p-8 mx-auto shadow-lg mt-10 mb-10 rounded-lg hover:scale-105 duration-300 border' >
              <Image src={design} alt='' className='mx-auto' />
              <h3 className='text-2xl font-bold pt-2 pb-2 '> Web Development</h3>
              <h4 className='py-4 text-teal-600 font-medium text-xl'>Tools I use</h4>
              <p className='text-greay-800 py-1 font-medium'>Vs Code....</p>
              <p className='text-greay-800 py-1 font-medium'>NextJS, TailwindCSS</p>
              <p className='text-greay-800 py-1 font-medium'>NodeJS, ExpressJS & MongoDB</p>
              <p className='text-greay-800 py-1 font-medium'>Figma</p>
            </div>

            <div className='text-center p-8 mx-auto shadow-lg mt-10 mb-10 rounded-lg hover:scale-105 duration-300 border' >
              <Image src={code} alt='' className='mx-auto' />
              <h3 className='text-2xl font-bold pt-2 pb-2 '>Backend Development</h3>
              <h4 className='py-4 text-teal-600 font-medium text-xl'>Tools I use</h4>
              <p className='text-greay-800 py-1 font-medium'>Vs Code....</p>
              <p className='text-greay-800 py-1 font-medium'>Python&Django or Java&J2EE</p>
              <p className='text-greay-800 py-1 font-medium'>Apache Tomcat & MySQL</p>
              <p className='text-greay-800 py-1 font-medium'>Firebase</p>
            </div>

            <div className='text-center p-8 mx-auto shadow-lg mt-10 mb-10 rounded-lg hover:scale-105 duration-300 border' >
              <Image src={consulting} alt='' className='mx-auto' />
              <h3 className='text-2xl font-bold pt-2 pb-2 '>Financial Consulting</h3>
              <p className='py-4 text-teal-600 font-medium text-xl'>Investment advices on</p>
              <p className='text-greay-800 py-1 font-medium'>Stock market</p>
              <p className='text-greay-800 py-1 font-medium'>Real estate</p>
              <p className='text-greay-800 py-1 font-medium'>Cryptocurrencies</p>
              <p className='text-greay-800 py-1 font-medium'>Private business</p>
            </div>

          </div>

        </section>


        <section className='mt-10 text-center dark:text-slate-300'>

          <div>
            <h3 className='text-3xl py-1 font-medium text-teal-600'> Portfolio</h3>
            <p className='font-semibold'>
              Below are some of the projects I've worked on. I'm also open to consulting and freelance work.
            </p>
          </div>

          <div className="lg:flex mt-10  ">

            <div className='text-center mx-auto max-w-sm rounded-xl shadow-xl mb-10 p-2'>
              <Image src={Bus} alt='' className='mx-auto rounded-xl'/>
              <h1 className='font-bold text-xl p-2'>Bus Ticket system</h1>
              <p className='font-medium pb-5'>Bus Ticket system is a web application that allows users to book bus tickets online.</p>
              <h4 className='py-4 text-teal-400 font-medium text-xl'>Tools used</h4>
              <p className='text-greay-800 py-1 font-medium'>Java & J2EE</p>
              <p className='text-greay-800 py-1 font-medium'>Apache Tomcat</p>
              <p className='text-greay-800 py-1 font-medium'>MySQL</p>
            </div>

            <div className='text-center mx-auto max-w-sm rounded-xl shadow-xl mb-10 p-2'>
              <Image src={Fin} alt='' className='mx-auto rounded-xl'/>
              <h1 className='font-bold text-xl p-2'>Finance System</h1>
              <p className='font-medium pb-5'>Finance Software is a web applications that allows financial organizations to collect, manage, persist the customers financial data. </p>
              <h4 className='py-4 text-teal-400 font-medium text-xl'>Tools used</h4>
              <p className='text-greay-800 py-1 font-medium'>ReactJS</p>
              <p className='text-greay-800 py-1 font-medium'>NodeJS</p>
              <p className='text-greay-800 py-1 font-medium'>MongoDB</p>
            </div>

            <div className='text-center mx-auto max-w-sm rounded-xl shadow-xl mb-10 p-2'>
              <Image src={Store} alt='' className='mx-auto rounded-xl'/>
              <h1 className='font-bold text-xl p-2'>Store Management System</h1>
              <p className='font-medium pb-5'>Bus Ticket system is a web application that allows users to book bus tickets online.</p>
              <h4 className='py-4 text-teal-400 font-medium text-xl'>Tools used</h4>
              <p className='text-greay-800 py-1 font-medium'>Html CSS JS</p>
              <p className='text-greay-800 py-1 font-medium'>MyPHP</p>
              <p className='text-greay-800 py-1 font-medium'>MySQL</p>
            </div>
            
          </div>

        </section>

      </main>

    </div>
  )
}
