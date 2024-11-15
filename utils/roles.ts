'use server'
import { Roles } from '../globals'
import { auth } from '@clerk/nextjs/server'

export default async function checkRole(role: Roles) {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata.role === role
}