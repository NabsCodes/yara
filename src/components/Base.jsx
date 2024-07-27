import { motion } from "framer-motion";

function Base() {
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
      className="relative w-full bg-[#7854F7]"
    >
      <section className="mx-auto mt-10 flex max-w-[1240px] flex-col items-start justify-between gap-5 px-4 py-10 text-white md:flex-row lg:mt-20 lg:py-20 xl:mt-56">
        <p className="my-auto w-full text-base font-thin text-white md:w-[80%] md:text-lg lg:text-3xl lg:leading-[38px]">
          Woocommerce - the{" "}
          <span className="mr-1 font-bold">
            most customizable eCommerce platform
          </span>
          for building <span className="font-bold">your online business.</span>
        </p>
        <button className="my-auto w-full gap-2.5 rounded-[20px] border border-solid border-white px-5 py-2.5 text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#7854F7] focus:ring-2 focus:ring-[#7854F7] md:w-auto">
          Get Started
        </button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "some", once: true }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: 3, ease: "linear" }}
          className="absolute bottom-[-22%] right-36 hidden h-[100px] w-[100px] items-center justify-center rounded-full border-[6px] border-[#FFA20C] font-bold text-white lg:block"
        ></motion.div>
      </section>
    </motion.div>
  );
}

export default Base;
