"use client";

import { useRouter } from "next/navigation";
import { logout, isAuthenticated } from "../../lib/auth";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="flex gap-4">
          <a href="/dashboard" className="hover:underline">Home</a>
          <a href="/dashboard/features" className="hover:underline">Features</a>
          <a href="/dashboard/pricing" className="hover:underline">Pricing</a>
          <a href="/dashboard/settings" className="hover:underline">Settings</a>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white"
          >
            Logout
          </button>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}

