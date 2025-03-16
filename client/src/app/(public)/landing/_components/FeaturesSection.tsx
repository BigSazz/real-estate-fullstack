"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  return (
    <div className="text-center">
      <div className="mb-4 flex h-48 items-center justify-center rounded p-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link
        href={linkHref}
        className="inline-block rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white px-6 py-24 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-4xl xl:max-w-6xl">
        <motion.h2
          variants={itemVariants}
          className="mx-auto mb-12 w-full text-center text-3xl font-bold sm:w-2/3"
        >
          Quickly find the home you desire using our advanced search filters.
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={
                  [
                    "Trustworthy and Verified Listings",
                    "Advanced Search Filters",
                    "Explore a variety of properties with ease",
                  ][index]
                }
                description={
                  [
                    "Find homes that match your needs with our advanced search filters.",
                    "Connect with real estate agents who can help you find the perfect home.",
                    "Enjoy secure and convenient payments with our secure payment system.",
                  ][index]
                }
                linkText={["Explore", "Search", "Discover"][index]}
                linkHref={["/explore", "/search", "/discover"][index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
