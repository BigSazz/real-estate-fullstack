"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 w-full -translate-x-1/2 -translate-y-1/2 transform text-center"
      >
        <div className="mx-auto max-w-4xl px-16 sm:px-12">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Start your journey with us to find the perfect apartment.
          </h1>
          <p className="mb-8 text-xl text-white">
            Explore our wide range of apartments and find the one that suits all
            your needs.
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              value={""}
              onChange={() => {}}
              placeholder={
                "Search for apartments by city, neighborhood, or address"
              }
              className="h-12 w-full max-w-lg rounded-none rounded-l-xl border-none bg-white"
            />
            <Button
              onClick={() => {}}
              className="h-12 rounded-none rounded-r-xl border-none bg-secondary-500 text-white hover:bg-secondary-600"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
