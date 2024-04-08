"use client";

import { useState } from "react";

// Components
import Header from "@/components/Header";
import Auth from "@/components/Auth";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <Header isAuthenticated={isAuthenticated} />
      <main className="overflow-hidden">
        {!isAuthenticated ? (
          <Auth setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}
