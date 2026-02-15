// src/lib/auth.js

const TOKEN_KEY = "access_token";

// Save mock token
export function saveToken(token) {
  if (typeof window !== "undefined") localStorage.setItem(TOKEN_KEY, token);
}

// Get token
export function getToken() {
  if (typeof window !== "undefined") return localStorage.getItem(TOKEN_KEY);
  return null;
}

// Check if user is logged in
export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(TOKEN_KEY);
}

// Logout user
export function logout() {
  if (typeof window !== "undefined") localStorage.removeItem(TOKEN_KEY);
}



