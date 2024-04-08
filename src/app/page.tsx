"use client";

import { useState } from "react";

// Components
import Header from "@/components/Header";
import Auth from "@/components/Auth";
import Card from "@/components/Card";
import ModeCard from "@/components/ModeCard";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mode, setMode] = useState("");

  const handleOnClick = (selectedMode: string) => {
    setMode(selectedMode);
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 pb-4">
      <Header isAuthenticated={isAuthenticated} />
      <main className="overflow-hidden">
        {!isAuthenticated ? (
          <Auth setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <div className="my-12">
            {mode ? (
              <div className="font-semibold cursor-pointer" onClick={() => handleOnClick("")}>{"<"} Back</div>
            ) : (
              <>
                <h1 className="mb-8 font-semibold text-center">✨ Select Mode ✨</h1>
                <div className="flex justify-between items-center gap-8 my-4">
                  <ModeCard
                    color="green"
                    title="Normal"
                    handleClick={handleOnClick}
                  />
                  <ModeCard
                    color="blue"
                    title="Dating"
                    handleClick={handleOnClick}
                  />
                </div>
              </>
            )}

            {mode && (
              <>
              <div className="font-semibold text-center py-4">{mode}</div>
              <div className="flex flex-col gap-12 justify-center items-center">
                <Card cardTitle="Perception" cardLevel="1" isTitleCard />
                <Card cardTitle="Connection" cardLevel="2" isTitleCard />
                <Card cardTitle="Reflection" cardLevel="3" isTitleCard />
              </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
