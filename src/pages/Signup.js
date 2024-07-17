import React from 'react'
import Left from '../components/Left'
import Right_Signup from '../components/Right_Signup'
function Signup() {
  return (
    <>
      <main>
    <div className='h-screen p-0 m-0 w-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12'>
            <div id='left' className='col-span-1 lg:col-span-6'>
                <Left />
            </div>
            <div id='right' className='col-span-1 lg:col-span-6 text-center'>
               <h1 className='text-4xl mt-1 text-gray-500'>Register Here!</h1>
               <Right_Signup/>
            </div>
        </div>
    </div>
</main>
    </>
  )
}

export default Signup
