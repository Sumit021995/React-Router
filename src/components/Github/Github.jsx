import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='rounded-3xl text-center  bg-gray-600 text-white p-10 text-sm m-10 md:text-2xl'>{data.bio}
    <div className="md:shrink-0">
    <img  className='rounded-xl my-7 justify-center md:w-32 lg:w-48'  src={data.avatar_url} alt="Git picture" width={300} />
    <p className="flex-wrap text-justify mt-8 pl-4 text-sm md:text-2xl ">A diligent Software Developer with a PGDCA Certificate from All India Computer Education Mission (AICEM), accredited by Hwetech System Pvt. Ltd. Proficient in various scripting languages, particularly JavaScript, and committed to delivering high-quality software solutions.</p>
    </div>
    </div>
  )
}

export default Github

{/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={data.avatar_url} alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.name}</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data.bio}</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> */}

