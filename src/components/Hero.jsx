import React from "react";
import { motion } from "framer-motion";
import bag from "../assets/pexels-angela-roma-7319328.webp";
import card from "../assets/pexels-anna-shvets-4482900.webp";
import shoe from "../assets/pexels-melvin-buezo-2529148.webp";
import card2 from "../assets/pexels-negative-space-34577.webp";

function Hero() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pt-24 lg:mb-[145px]">
      <motion.div
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: {
        //     type: "spring",
        //     damping: 100,
        //     stiffness: 300,
        //     mass: 1,
        //     delay: 0.5,
        //   },
        // }}
        // viewport={{
        //   amount: "some",
        //   once: true,
        // }}
        className="flex flex-col gap-6 lg:flex-row lg:gap-16"
      >
        <div className="mt-3 flex flex-col gap-3 md:gap-[30px] lg:mt-[150px] lg:max-w-[502px]">
          <h1 className="text-wrap text-[30px] font-bold leading-none text-[#444444] dark:text-gray-200 sm:text-[48px] sm:leading-[56px]">
            Building exactly the eCommerce website you want.
          </h1>
          <p className="text-wrap font-normal text-[#444444] dark:text-gray-300 md:text-[18px] md:leading-[26px]">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className="flex w-full flex-col items-start justify-between gap-y-1 md:flex-row md:items-center lg:w-[460px]">
            <button className="flex items-center justify-center gap-2.5 rounded-[30px] bg-[#7854f7] px-[30px] py-2.5 text-base font-normal text-white transition-all duration-200 ease-in-out hover:bg-[#7854f7]/80">
              Start a New Store
            </button>
            <p className="flex cursor-pointer items-center justify-center gap-2.5 p-2.5 text-base text-[#70c217]">
              or
              <span className="font-semibold">Customize and Extend</span>
              <span className="transition-transform duration-200 hover:scale-150">
                &gt;
              </span>
            </p>
          </div>
        </div>
        <div className="hidden grid-cols-1 gap-6 md:mt-5 md:grid md:grid-cols-2 lg:mt-[20px] lg:grid-cols-4 lg:grid-rows-1">
          <img
            src={bag}
            alt="bag"
            loading="lazy"
            className="order-2 justify-self-center rounded-[25px] object-cover shadow-custom md:h-[300px] md:w-full lg:z-10 lg:order-last lg:col-span-4 lg:mr-[7rem] lg:mt-[-4rem] lg:h-[200px] lg:w-[250px]"
          />
          <img
            src={card}
            alt="card"
            loading="lazy"
            className="justify-self-center rounded-[25px] object-cover shadow-custom md:h-[300px] md:w-full lg:z-10 lg:col-span-4 lg:mr-[7rem] lg:h-[200px] lg:w-[250px] lg:translate-x-0"
          />
          <img
            src={shoe}
            alt="shoe"
            // loading="lazy"
            className="order-2 justify-self-center object-cover shadow-custom md:h-[300px] md:w-full md:rounded-[25px] lg:col-span-2 lg:ml-[1rem] lg:mt-[-4rem] lg:h-[322px] lg:w-[380px] lg:rounded-none"
          />
          <img
            src={card2}
            alt="card2"
            loading="lazy"
            className="mr-10 justify-self-center rounded-[25px] object-cover shadow-custom sm:mr-28 md:mr-0 md:h-[300px] md:w-full lg:z-10 lg:col-span-2 lg:mr-[6rem] lg:h-[200px] lg:w-[250px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
