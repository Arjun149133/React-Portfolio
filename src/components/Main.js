import React from 'react'
import logo2 from './logo2.webp'

function Main() {
  return (
    <>
     <main className=' flex place-content-center justify-center content-center items-center h-screen bg-sky-900 m-auto p-6'>
      <div>
      <img src={logo2} alt="Logo" className=' h-48 rounded-full m-auto' />
      <div className=' flex font-bold text-white justify-center m-auto p-3 '>Hello,I am Arjun!</div>
      <article className=' font-extrabold text-white text-2xl'>
        A Front End Developer Specialised In React!
      </article>
      </div>
     </main>
    </>
  )
}

export default Main