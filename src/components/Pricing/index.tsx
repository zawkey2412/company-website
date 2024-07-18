"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Acolyte's Tome"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="A basic selection of tools and resources for fledgling adventurers."
          >
            <OfferList text="Essential Spells & Cantrips" status="active" />
            <OfferList text="Limited Equipment Compendium" status="active" />
            <OfferList
              text="Access to Guild Library (Basic Tier)"
              status="active"
            />
            <OfferList text="Basic Quest Support" status="active" />
            <OfferList
              text="Limited Party Formation Assistance"
              status="inactive"
            />
            <OfferList text="No Advanced Crafting Recipes" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Adventurer's Handbook"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="A comprehensive toolkit for seasoned heroes on their path to legend."
          >
            <OfferList
              text="Extensive Spell Library & Rituals"
              status="active"
            />
            <OfferList text="Expanded Equipment Compendium" status="active" />
            <OfferList
              text="Access to Guild Library (Full Access)"
              status="active"
            />
            <OfferList
              text="Dedicated Quest Support & Guidance"
              status="active"
            />
            <OfferList
              text="Party Formation & Teambuilding Assistance"
              status="active"
            />
            <OfferList
              text="Limited Access to Advanced Crafting Recipes"
              status="inactive"
            />
          </PricingBox>
          <PricingBox
            packageName="Archmage's Codex"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="The ultimate resource for legendary heroes and masters"
          >
            <OfferList
              text="Complete Spell Compendium & Forbidden Lore"
              status="active"
            />
            <OfferList
              text="Unrestricted Equipment Compendium"
              status="active"
            />
            <OfferList
              text="Exclusive Access to Guild Archives"
              status="active"
            />
            <OfferList
              text="Legendary Quest Guidance & Patronage"
              status="active"
            />
            <OfferList
              text="Advanced Party Optimization & Synergies"
              status="active"
            />
            <OfferList
              text="Full Access to Advanced Crafting Recipes"
              status="active"
            />
            <OfferList
              text="Master Artisan Services (Limited)"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
