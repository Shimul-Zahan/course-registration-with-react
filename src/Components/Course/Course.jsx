import React from 'react'
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({ course, handleCourseName }) => {

  const { id, image, courseName, courseCredit, courseDetails, coursePrice } = course;

  return (
    <div>
      <div className="w-80 p-3 bg-base-100 shadow-xl space-y-2 rounded-lg">
        <figure>
          <img src={image} alt="Shoes" className='w-full h-[200px] rounded-lg' />
        </figure>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{ courseName }</h2>
          <p className='text-lg font-regular text-[#1c1b1b99]'>{courseDetails? courseDetails.slice(0, 60) : "Upcoming soon!!!"}</p>
          
          <div className='flex justify-between items-center'>
            <div className='flex items-center justify-center gap-2'>
              <FiDollarSign className='text-2xl' />
              <p className='text-xl text-[#1c1b1b99]'>Price: {coursePrice ? coursePrice : "Upcoming soon!!!"}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <BsBook className='text-xl text-black' />
              <p className='text-xl text-[#1c1b1b99]'>Credit: {courseCredit ? courseCredit : "Upcoming soon!!!"}hr</p>
            </div>
          </div>

          <div className="mt-2">
            <button onClick={() => handleCourseName(course)} className="btn btn-primary w-full text-white mt-2 capitalize font-regular">Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course