"use client";
import Markdown from 'react-markdown'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState, useRef, useMemo } from "react";
import TinderCard from "react-tinder-card";
import getJobs from "@/services";

function SwipePage() {
  const [lastDirection, setLastDirection] = useState();
  const [companies, setCompanies] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(companies.length)
        .fill(0)
        .map((i) => React.createRef()),
    [companies]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < companies.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(name + " left the screen!");
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    console.log(canSwipe);
    if (canSwipe && currentIndex < companies.length) {
      await childRefs[currentIndex]?.current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    console.log(canGoBack);
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const fetchData = async () => {
    const data = await getJobs();
    setCompanies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(lastDirection);
    if (lastDirection === "right") {
      setCount((prev) => prev + 1);
    }
    setIsMatched(false);
  }, [lastDirection, currentIndex]);

  useEffect(() => {
    if (count === 3) {
      setIsMatched(true);
    }
  }, [count]);

  return (
    <div id="swipe-container">
      {isMatched && (
        <div>
          <Alert>
            <PartyPopper className="w-4 h-4" />
            <AlertTitle className="text-green-500">
              You have Matched!
            </AlertTitle>
          </Alert>
        </div>
      )}
      <div className="cardContainer">
        {companies.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={index}
            onSwipe={(dir) => swiped(dir, character.company, index)}
            onCardLeftScreen={() => outOfFrame(character.company, index)}
          >
            <div className="card">
              <img className="card-img " src="/bg-img.png" alt="bg-img" />
              <h1 className="pt-4 font-sans text-4xl font-bold text-gray-800 hover:font-serif">
                {character.company}
              </h1>
              <p className="pt-2 font-semibold text-md">{character.title}</p>
              <div className="pt-10">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg">Job Description</Button>
                  </DialogTrigger>
                  <DialogContent className="mx-auto flex w-[calc(100%_-_48px)] flex-col items-center justify-center rounded-2xl bg-white px-6 py-4 sm:max-w-[534px]">
                    <DialogHeader className="flex flex-col gap-4 mt-16">
                      <DialogTitle className="text-center text-[28px] font-bold leading-9 text-zinc-900">
                        Please read the Job Description Carefully
                      </DialogTitle>
                      <DialogDescription className="p-3 overflow-y-auto rounded-xl bg-gray-50 max-h-[400px]">
                      <Markdown >
                        {character.description}
                      </Markdown>
                        
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="flex">
        <div className="space-x-3">
          <Button
            variant="destructive"
            className={`${!canSwipe}`}
            onClick={() => swipe("left")}
          >
            Swipe left!
          </Button>
          <Button
            variant="outline"
            className={`${!canGoBack}`}
            onClick={() => goBack()}
          >
            Undo swipe!
          </Button>
          <Button className={`${!canSwipe}`} onClick={() => swipe("right")}>
            Swipe right!
          </Button>
        </div>
      </div>
      {lastDirection ? (
        <h2
          key={lastDirection}
          className="font-sans font-semibold text-gray-800 text-md hover:font-serif"
        >
          You swiped {lastDirection}
        </h2>
      ) : (
        <div>
          <Alert>
            <Terminal className="w-4 h-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Swipe a card or press a button to get Restore Card button visible!
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default SwipePage;
