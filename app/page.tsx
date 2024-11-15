"use client";
import { useRouter } from "next/navigation";
import HomePage from "./components/home/Home";
import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { redirect } from "next/navigation";
import { useEffect } from "react";
interface userData {
  isLoaded?: boolean | undefined;
  isSignedIn?: boolean | undefined;
  user?: UserResource | undefined | null;
}
export default function Home() {
  const router = useRouter();
  const userDetails: userData | undefined = useUser();
  useEffect(()=>
  {
    if (!userDetails?.user?.id) {
      router.push("/sign-in");
    } else
      fetch(`/api/signup`, {
        method: "POST",
        body: JSON.stringify({ user: userDetails?.user }),
      });
  },[])
 

  return <HomePage />;
}
