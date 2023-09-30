import React from 'react'
import { TbMessages  } from 'react-icons/tb';
import { VscGithub  } from 'react-icons/vsc';
import { AiFillLinkedin  } from 'react-icons/ai';
import { AiOutlineInstagram  } from 'react-icons/ai';
import { GrSpotify  } from 'react-icons/gr';


function Nav() {
  // const handlClick = () => {

  // }
  return (
    <>
    <nav className=' bg-black flex p-5 relative'>
        <div className=' flex gap-9 text-white ml-5'>
        <TbMessages className=' cursor-pointer' />
        <a href="https://github.com/arjun149133"><VscGithub className=' cursor-pointer'/></a>
        <a href="https://www.linkedin.com/in/arjun-yadav-4aa978261/"><AiFillLinkedin className=' cursor-pointer' /></a>
        <a href="https://www.instagram.com/arjun_.017/"><AiOutlineInstagram className=' cursor-pointer' /></a>
        <a href="https://www.spotify.com/in-en/account/overview/"><GrSpotify className=' cursor-pointer'/></a>
        </div>
        <aside className='absolute right-0 top-0 text-white m-auto p-1 mt-2 '>
            <a href="#skills" className=' p-4 mr-5'>Skills</a>
            <a href="#projects" className=' p-4 mr-5'>Projects</a>
            <a href="#contactMe" className=' p-4 mr-5'>Contact Me</a>
        </aside>
    </nav>
    </>
  )
}

export default Nav