import React from 'react'
import Form from './Form'
function Student() {
  return (
    <div className=' flex flex-row-reverse  my-24 space-x-5  justify-center  -z-10'>
        <img className= "md:block hidden w-1/2 object-contain" src = "imgs/std-typing.png"/>
        <Form/>
    </div>
  )
}

export default Student