import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom"

const Notify = () => {
    const history = useNavigate()

  return (
    <div className='flex justify-center bg-gray-100 items-center'>
        <div className='max-w-[620px] mx-4 my-6  md:m-12'>
            <div className="flex items-center gap-4">
                <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-[50%]" onClick={()=> history(-1)}><FaArrowLeft/></button>
                <h1 className=' text-black text-2xl'> Notifications</h1>
            </div>
            <div className='rounded-xl bg-white p-6 mt-4 shadow '>
                <p  className='text-md text-gray-500'>
                    Dear Voter, <br/>
                    You can easily checkout different parties candidates and elections. You can check for election dates, see candidates qualifications and view live results
                  </p>
            </div>
        </div>
    </div>
  )
}

export default Notify