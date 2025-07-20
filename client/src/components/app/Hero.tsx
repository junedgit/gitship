"use client";
import React from "react";
import { Spotlight } from "@/components/mini/spotlight-new";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="h-[20rem] md:h-[45rem] w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />

      <div className=" p-4 mt-12 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div className="flex justify-center items-center pb-6 gap-4">
          <Button
            variant="outline"
            className="rounded-4xl group flex items-center gap-2"
          >
            Give us a Star
            <StarIcon className="h-6 w-6 text-gray-400 group-hover:text-yellow-400 group-hover:fill-yellow-400 transition-all duration-300" />
          </Button>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          The Easiest Way to Ship Code
        </h1>
        <p className="mt-5 text-xl font-semibold  text-neutral-300  max-w-lg text-center mx-auto">
          Fast. Ownable. Modular. Zero corporate BS.
        </p>
        <div className="flex justify-center items-center mt-12 gap-4">
          <Button
            className="w-32 h-10 bg-gradient-to-r from-zinc-400 to-neutral-50 text-clip"
            variant="default"
          >
            Push First Repo
          </Button>
          <Button className=" w-32 h-10" variant="outline">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
