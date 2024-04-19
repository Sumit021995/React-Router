import React from 'react'
import { useParams  } from 'react-router-dom'

function User() {
  // const id = useLoaderData()
    const {userId} = useParams()
  return (
    <div className='bg-gray-400 text-white text-3xl text-center py-2'>
      User : {userId}
      {/* <img  className='rounded-xl my-7 justify-center'  src={id.avatar_url} alt="Git picture" width={300} />
      <h1>Github User : {id.name}</h1> */}
    
    </div>
  )
}

export default User
