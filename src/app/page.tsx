"use client";

import { useState } from "react";

// Components
import Header from "@/components/Header";
import Auth from "@/components/Auth";
import Card from "@/components/Card";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50 px-4 pb-4">
      <Header isAuthenticated={isAuthenticated} />
      <main className="overflow-hidden">
        {!isAuthenticated ? (
          <Auth setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <div className="my-16 flex flex-col gap-12 justify-center items-center">
            <Card cardTitle="Perception" cardLevel="1" isTitleCard />
            <Card cardTitle="Connection" cardLevel="2" isTitleCard />
            <Card cardTitle="Reflection" cardLevel="3" isTitleCard />
          </div>
        )}
      </main>
    </div>
  );
}
