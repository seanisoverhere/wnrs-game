"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

// Components
import Header from "@/components/Header";
import Auth from "@/components/Auth";
import Card from "@/components/Card";
import ModeCard from "@/components/ModeCard";

const cards = [1];

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mode, setMode] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());

  // @ts-ignore
  const handlePanEnd = (_e, info, card) => {
    if (selectedId) {
      if (Math.abs(info.offset.x) < 5) {
        const styles = getComputedStyle(containerRefs.current[card]);
        // @ts-ignore
        const timeout = styles.transform.split(",")[4] * -0.6;
        setCanDrag(false);
        setTimeout(() => {
          setSelectedId(null);
        }, timeout);
      }
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };

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
              <div
                className="font-semibold cursor-pointer"
                onClick={() => handleOnClick("")}
              >
                {"<"} Back
              </div>
            ) : (
              <>
                <h1 className="mb-8 font-semibold text-center">
                  ✨ Select Mode ✨
                </h1>
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
              <div className="relative">
                <div className="font-semibold text-center py-4 text-2xl">
                  {mode}
                </div>
                <div className="layout-cards">
                  {cards.map((card, i) => (
                    <motion.div
                      className={selectedId === card ? "opened-card" : "card"}
                      key={i}
                      layout
                      drag={selectedId === card ? "x" : false}
                      dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
                      dragElastic={0.2}
                      onPanEnd={(e, info) => handlePanEnd(e, info, card)}
                      // @ts-ignore
                      ref={(el) => (containerRefs.current[card] = el)}
                    >
                      {selectedId === card && (
                        <>
                          <div />
                          <div />
                          <div />
                        </>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    className="dim-layer"
                    animate={{ opacity: selectedId ? 0.3 : 0 }}
                  />
                </div>
                <div className="flex flex-col gap-12 justify-center items-center">
                  <Card cardTitle="Perception" cardLevel="1" isTitleCard />
                  <Card cardTitle="Connection" cardLevel="2" isTitleCard />
                  <Card cardTitle="Reflection" cardLevel="3" isTitleCard />
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
