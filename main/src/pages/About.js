import React from 'react'

const About = () => {
    const stacks = ["ReactJs Microfrontend","React Redux", "Redux Thunk", "Tilwind CSS","Dummy API"]
  return (
    <div className='w-full'>
        <div className='w-10/12 m-auto'>
            <p className='mt-10 text-gray-700 font-extrabold text-2xl'>REACTJS SIMPLE CRUD MICRO FRONTEND</p>
            <div className='mt-10'>
                {stacks.map((data,index)=>(
                    <p key={index} 
                    className='mt-2 text-gray-700 font-bold text-l'
                    >{data}</p>
                ))}
            </div>
        </div>

    </div>
  )
}

export default About