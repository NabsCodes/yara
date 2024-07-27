/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <motion.footer
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
      className="mt-10 w-full bg-[#7854F7] py-5 text-white lg:mt-[90px] lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="mx-auto grid max-w-[1240px] grid-cols-1 justify-items-center gap-x-5 gap-y-10 px-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-y-20"
      >
        <div>
          <h2 className="mb-4 text-xl font-bold">YARA</h2>
          <p>
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
        </div>
        <div className="justify-self-start lg:justify-self-center">
          <h2 className="mb-4 text-xl font-bold">Useful Links</h2>
          <ul className="space-y-2 text-lg">
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Services</li>
            <li className="cursor-pointer hover:underline">Testimonial</li>
          </ul>
        </div>
        <div className="justify-self-start lg:justify-self-center">
          <h2 className="mb-4 text-xl font-bold">Social Links</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/hassanhauda"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://twitter.com/nabeelhassan_"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-300"
            >
              <FaXTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/_nabeelhassan"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://github.com/NabsCodes"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="hover:text-gray-300"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="mx-auto mt-12 max-w-[1240px] text-center text-sm font-normal text-gray-200"
      >
        © {new Date().getFullYear()} Yara. All rights reserved | Designed by
        <a
          href="https://www.perxels.com/"
          target="_blank"
          rel="noreferrer"
          className="mx-1 font-semibold hover:text-gray-300 hover:underline"
        >
          Perxcels Design School
        </a>
        | Developed by
        <a
          href="https://github.com/NabsCodes"
          target="_blank"
          rel="noreferrer"
          className="ml-1 font-semibold hover:text-gray-300 hover:underline"
        >
          Hassan Umar Hassan
        </a>
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
