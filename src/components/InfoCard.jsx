import { motion } from "framer-motion";

function InfoCard({ title, description, img, footer, className }) {
  return (
    <motion.div
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
      className={`flex flex-col items-start justify-center gap-2.5 md:gap-5 ${className}`}
    >
      <img
        src={img}
        alt="hero"
        className="mt-6 h-[200px] w-full rounded-[20px] object-cover md:h-[300px] lg:h-[280px] lg:w-[400px]"
      />
      <p className="text-xl font-bold text-black dark:text-white md:text-2xl">
        {title}
      </p>
      <p className="text-wrap text-sm font-normal text-[#444444] dark:text-gray-300 md:text-base">
        {description}
      </p>
      <p className="text-base font-semibold text-[#70c217]">{footer} &gt;</p>
    </motion.div>
  );
}

export default InfoCard;
