'use client'
import { Nunito } from "next/font/google";
import {  useUser } from '@clerk/nextjs'
import NavbarPage from "./components/navbar/Navbar";
import HomePage from './components/home/Home';
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
    <div>
      <HomePage/>
    </div>
  );
}
