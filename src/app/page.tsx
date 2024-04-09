"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosBackspace } from "react-icons/io";

// Components
import Header from "@/components/Header";
import Auth from "@/components/Auth";
import Card from "@/components/Card";
import ModeCard from "@/components/ModeCard";

// Questions
import {
  LEVEL_ONE,
  LEVEL_TWO,
  LEVEL_THREE,
  LEVEL_ONE_DATING,
  LEVEL_TWO_DATING,
  LEVEL_THREE_DATING,
} from "@/utils/questions";

type LevelData = Record<string, string[]>;

type Data = {
  Normal: LevelData;
  Dating: LevelData;
  [key: string]: LevelData;
};


const levels: Data = {
  Normal: {
    "1": LEVEL_ONE,
    "2": LEVEL_TWO,
    "3": LEVEL_THREE,
  },
  Dating: {
    "1": LEVEL_ONE_DATING,
    "2": LEVEL_TWO_DATING,
    "3": LEVEL_THREE_DATING,
  },
};

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mode, setMode] = useState("");
  const [level, setLevel] = useState("");
  const [index, setIndex] = useState<boolean | number>(false);

  const handleOnClick = (selectedMode: string) => {
    setMode(selectedMode);
  };

  const handleLevelClick = (selectedLevel: string) => {
    setLevel(selectedLevel);
  };

  const handleBack = () => {
    if (level) {
      setLevel("");
    } else {
      setMode("");
    }
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
                className="font-semibold cursor-pointer flex items-center gap-2 pb-4"
                onClick={handleBack}
              >
                <IoIosBackspace className="w-7 h-7" /> Back
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
            {!level && mode && (
              <div className="relative">
                <div className="font-semibold text-center py-4 text-2xl">
                  {mode}
                </div>
                <div className="flex flex-col gap-12 justify-center items-center">
                  <Card
                    cardTitle="Perception"
                    cardLevel="1"
                    isTitleCard
                    handleClick={handleLevelClick}
                  />
                  <Card
                    cardTitle="Connection"
                    cardLevel="2"
                    isTitleCard
                    handleClick={handleLevelClick}
                  />
                  <Card
                    cardTitle="Reflection"
                    cardLevel="3"
                    isTitleCard
                    handleClick={handleLevelClick}
                  />
                </div>
              </div>
            )}
            {level && (
              <div className="max-h-[800px] overflow-y-scroll">
                <h1 className="font-semibold text-center py-4">
                  Level {level} - {mode}
                </h1>
                <ul className="grid grid-cols-3 items-center place-items-center">
                  {levels[mode][level].map((question, i) => (
                    <motion.li
                      className="cursor-pointer rounded-lg my-4 bg-white shadow-lg h-24 w-24"
                      key={question}
                      onClick={() => setIndex(i)}
                      layoutId={question}
                    >
                      <span className="text-black text-2xl font-semibold flex justify-center items-center h-full">
                        {i}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <AnimatePresence>
                  {index !== false && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                      key="overlay"
                      className=" bg-black fixed top-0 left-0 w-full h-full z-30"
                      onClick={() => setIndex(false)}
                    />
                  )}
                  {index !== false && (
                    <div
                      className="single-image-container z-50"
                      onClick={() => setIndex(false)}
                    >
                      <motion.div
                        layoutId={levels[mode][level][index as number]}
                        className="single-image bg-white"
                      >
                        <div className="flex justify-center items-center font-semibold text-lg h-full">
                          {levels[mode][level][index as number]}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
