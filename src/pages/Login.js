import React from 'react'
import Left from '../components/Left'
import Right from '../components/Right'
function Login() {
  return (
    <> 
    <main>
    <div className='h-screen p-0 m-0 w-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12'>
            <div id='left' className='col-span-1 lg:col-span-6'>
                <Left />
            </div>
            <div id='right' className='col-span-1 lg:col-span-6'>
                <Right />
            </div>
        </div>
    </div>
</main>
    </>
  )
}

export default Login
