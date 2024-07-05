import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    const response = redirect("/login?message=You are not logged in");
    response.body = true; // It's silly, but it works
    return response;
  }
  return null;
}
