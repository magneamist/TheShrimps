'use server';
import { auth } from "@clerk/nextjs/server";

export async function getItems() {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()
    
}