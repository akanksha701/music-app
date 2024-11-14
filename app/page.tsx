'use client'
import { Nunito } from "next/font/google";
import {  useUser } from '@clerk/nextjs'
import NavbarPage from "./components/navbar/Navbar";
const font = Nunito({
  subsets: ["latin"],
});
export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser()
console.log(user)
  if (!isLoaded || !isSignedIn) {
    return null
  }

  
  return (
         <NavbarPage /> 
  );
}
