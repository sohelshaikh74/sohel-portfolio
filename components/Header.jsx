import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="w-11/12 max-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          // src={assets.user1_image}
          src={assets.user_profile1}
          alt="pofile pic"
          className="w-32 rounded-full"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Outfit"
      >
        Hi! I'm Sohel Shaikh
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        // className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        className="text-3xl sm:text-6xl lg:text-[66px] font-Outfit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        MERN Stack Developer Based in India
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a passionate Mern Stack Developer with experience in building
        full-stack web applications. I specialize in using React, Node.js,
        Express, and MongoDB to create fast, scalable, and maintainable web
        applications. I am constantly learning new technologies and love to work
        on challenging projects that push my skills to the next level.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
