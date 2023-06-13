"use client";

import { AuthProvider } from "@/context/AuthContext";





export function GlobalProvider({ children }) {
  return (
    <>
   
      <AuthProvider>
    
      {children}
      </AuthProvider>
    </>
  );
}