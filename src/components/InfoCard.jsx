import { motion } from "framer-motion";

function InfoCard({ title, description, img, footer, className }) {
  const imgBaseURL = img.split("?")[0];
  return (
    <motion.div
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
      className={`flex flex-col items-start justify-center gap-2.5 md:gap-5 ${className}`}
    >
      <img
        srcSet={`${imgBaseURL}?tr=w-250,h-200,q-80 250w,
                 ${imgBaseURL}?tr=w-500,h-400,q-80 500w,
                 ${imgBaseURL}?tr=w-1000,h-800,q-80 1000w`}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1024px) 50vw, 33vw"
        src={`${imgBaseURL}?tr=w-250,h-200,q-80`} // Default image
        alt="hero"
        loading="lazy"
        className="mt-6 h-[250px] w-full rounded-[20px] object-cover sm:h-[300px] md:h-[300px] lg:h-[280px] lg:w-[400px]"
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
