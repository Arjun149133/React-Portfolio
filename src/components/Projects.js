import React from 'react'
import data from './data'

function Projects() {
  //const [projects, setProjects] = useState(data);
  return (
    <>
     <main className='  bg-sky-700 h-max' id='projects'>
     <h1 className=' flex text-2xl font-bold text-white m-auto top-0 left-0 px-5 py-3 underline underline-offset-8 decoration-slate-700'>My Projects</h1>
     <article className=' flex justify-center gap-72 p-3'>
     {data.map((project) => {
      const {id, image} = project;
      return(
        <article key={id} className=' rounded-xl'>
        <img className=' h-64 w-auto p-3 m-2 rounded-xl' src={image} alt={id} key={id} />
        </article>
      )
     })}
     </article>
     </main>

    </>
  )
}

export default Projects