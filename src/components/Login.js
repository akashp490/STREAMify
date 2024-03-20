
import { useState } from 'react'
import Header from './Header'

const Login = () => {
   const [isSignInForm, setIsSignInForm] = useState(true);

   const toggleSignInForm = () => {
      setIsSignInForm( !isSignInForm);
   }
  return (
    <div>
      <Header />
      <div className='absolute'> 
         <img
         src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='bg-pic'
         />
      </div>

      <form className='absolute text-white z-10 rounded-lg p-10 pl-8 bg-black opacity-85 w-3/12 my-36 mx-auto left-0 right-0'>
         <h2 className='p-2 pt-0  text-2xl' > {isSignInForm ? "Sign In" : "Sign Up"}</h2>
         {!isSignInForm && <input type='text' placeholder='Name' className='p-2 m-2 opacity-100 rounded-md w-full'/>}         
         <input type='text'  placeholder='Email' className='p-2 m-2 opacity-100  rounded-md w-full left-0 right-0'  />
         <input  type='password' placeholder='Password' className='p-2 m-2 opacity-100 rounded-md w-full' />
         { !isSignInForm && <input  type='password' placeholder='Confirm Password' className='p-2 m-2 opacity-100 rounded-md w-full' />}
         <button className='bg-red-700 text-white font-medium p-2 m-2 w-full opacity-100 rounded-md hover:bg-red-800' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
         <p className='p-2 hover:cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ?  
            <p>Not a User? <span className=' font-semibold'>Sign Up</span></p> : 
            <p>Already a User? <span className=' font-semibold'>Sign In</span></p>}
         </p>
      </form>
         
    </div>
  )
}

export default Login