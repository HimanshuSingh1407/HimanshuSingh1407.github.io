

import React from 'react'


import '../styles/heading.css'

const Heading = ({heading , subHeading}) => {
  return (
   <>
   <div className='headingContainer' >

   <h1  className='headingMain' >{heading}</h1>
   <h3  className='headingMain' >---{subHeading}---</h3>
   </div>
   </>
  )
}

export default Heading

