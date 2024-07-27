import InfoCard from "./InfoCard";
import img1 from "../assets/pexels-sora-shimazaki-5935739.jpg";
import img2 from "../assets/pexels-canva-studio-3153204.jpg";
import img3 from "../assets/pexels-field-engineer-442161.jpg";
import { motion } from "framer-motion";

const data = [
  {
    title: "All You Need to Start",
    description:
      "Add Woocommerce plugin to any WordPress site and set up a new store in minutes",
    img: img1,
    footer: "Ecommerce for wordpress",
  },
  {
    title: "Active Community",
    description:
      "WooCommerce is one of the fastest-growing eCommerce communities.",
    img: img2,
    footer: "Check our forum",
  },
  {
    title: "Ready to Customize",
    description:
      "WooCommerce is one of the fastest-growing eCommerce communities.",
    img: img3,
    footer: "Add Woocommerce plugin",
  },
];

function Info() {
  return (
    <section className="mx-auto max-w-[1240px] px-4">
      <motion.h1
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        //   transition: {
        //     duration: 0.8,
        //     delay: 0.4,
        //     ease: [0.44, 0, 0, 1],
        //   },
        // }}
        // viewport={{
        //   amount: "some",
        //   once: true,
        // }}
        className="mx-auto mt-5 text-center text-[18px] font-bold leading-[56px] text-[#444444] dark:text-gray-200 sm:text-[22px] md:mt-10 md:text-[24px] lg:mt-0 lg:max-w-[500px] lg:text-[48px]"
      >
        Your eCommerce made simple
      </motion.h1>
      <div className="grid grid-cols-1 sm:gap-x-3 md:gap-y-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
        {data.map((d, i) => (
          <InfoCard
            key={i}
            title={d.title}
            description={d.description}
            img={d.img}
            footer={d.footer}
            className={`${
              i === 1
                ? "lg:mt-[3rem]"
                : i === 2
                  ? "lg:mt-[13rem]"
                  : "lg:mt-[-7rem]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Info;
