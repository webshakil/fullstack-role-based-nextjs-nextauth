"use client";

import { AuthProvider } from "@/context/AuthContext";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from 'react-hot-toast';


export function GlobalProvider({ children }) {
  return (
    <>
   
      <AuthProvider>
      <Toaster />
    <SessionProvider> {children}</SessionProvider>
     
      </AuthProvider>
    </>
  );
}