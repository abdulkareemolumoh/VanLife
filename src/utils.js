import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true; // It's silly, but it works
    return response;
  }
  return null;
}
