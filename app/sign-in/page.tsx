"use client";
import React from 'react'
import { SignIn } from '@clerk/nextjs'
// import Login from '../components/login/Login'
const Page = () => {
  return (
   <div className='flex items-center justify-center min-h-screen'>
    <SignIn routing="hash"/>
   </div>
  )
}

export default Page