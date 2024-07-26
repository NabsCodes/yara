import { motion } from "framer-motion";
import img1 from "../assets/pexels-lisa-fotios-1546329.jpg";
import img2 from "../assets/pexels-thirdman-5256523.jpg";

function Documentation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: [0.44, 0, 0, 1],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="lg:px-38 relative z-20 mx-auto mt-[70px] w-full bg-[#7854F7] p-4 md:p-14 lg:mt-[122px] xl:bg-transparent xl:px-44"
    >
      <motion.svg
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="absolute inset-0 z-[-1] hidden xl:block"
        viewBox="0 0 1450 1090" // Defines the aspect ratio and scaling behavior
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" // Adjusts the scaling to maintain aspect ratio
        style={{ width: "100%", height: "auto" }} // CSS for responsiveness
      >
        <path
          d="M0 0C588.048 193.97 907.28 189.807 1450 0V1090C848.806 905.579 531.276 913.493 0 1090V0Z"
          fill="#7854F7"
        />
      </motion.svg>

      <div className="z-10 mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-[-50px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex flex-col items-start gap-8 md:flex-row lg:gap-[60px]"
        >
          <img
            src={img1}
            alt="img1"
            className="top-10 h-[400px] w-[300px] rounded-[20px] object-cover shadow-shadow lg:h-[500px] lg:w-[400px]"
            loading="lazy"
          />
          <div className="my-auto flex flex-col justify-center gap-5">
            <h1 className="text-2xl font-bold leading-[38px] text-white lg:text-[30px]">
              Develop Without Limits
            </h1>
            <p className="text-base font-normal text-white lg:text-xl">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable ane can integrate with virtually any
              service. Design a complex store from scratch, extend a store tor a
              client, or simply ace a single product to a WordPress site--your
              store, your way.
            </p>
            <button
              className="w-[270px] text-nowrap rounded-[30px] bg-[#70c217] px-[30px] py-2.5 text-base font-semibold text-white"
              aria-label="Read the Documentation"
            >
              Read the Documentation
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-10 flex flex-col items-end gap-8 sm:mt-0 md:flex-row md:items-start lg:gap-[60px]"
        >
          <img
            src={img2}
            alt="img2"
            loading="lazy"
            className="h-[400px] w-[300px] rounded-[20px] object-cover shadow-shadow md:order-2 md:mt-[-20px] lg:mt-[-40px] lg:h-[500px] lg:w-[400px]"
          />
          <div className="my-auto flex flex-col justify-center gap-5">
            <h1 className="text-right text-2xl font-bold leading-[38px] text-white md:text-left lg:text-[30px]">
              Know our Global Community
            </h1>
            <p className="text-right text-base font-normal text-white md:text-left lg:text-xl">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We&apos;re proud that the helpfulness of the community ane a
              wealth or online resources are frequently cited as reasons our
              users love it. There are 80+ meetups worldwide!
            </p>
            <button
              className="ml-auto w-[270px] text-nowrap rounded-[30px] bg-[#70c217] px-[30px] py-2.5 text-base font-semibold text-white md:ml-0"
              aria-label="Read the Documentation"
            >
              Read the Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Documentation;
