import React from 'react'

export const Video = () => {
  return (
    <div className='w-full flex p-10 justify-center'>
      <video className='w-full sm:w-[900px] rounded-md shadow-md' autoPlay controls>
        <source src='/COLA.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
