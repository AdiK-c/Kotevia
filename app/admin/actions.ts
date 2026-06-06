"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminPassword) {
    return { success: false, error: "ADMIN_PASSWORD environment variable is not set on the server." };
  }

  if (password === adminPassword) {
    cookies().set("admin_auth", password, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    return { success: true };
  }
  
  return { success: false, error: "Incorrect password" };
}

export async function logout() {
  cookies().delete("admin_auth");
  redirect("/admin");
}
