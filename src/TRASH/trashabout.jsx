import aboutImg from "../assets/amelAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// tadinya tulisan about gaada animasi motion
// pt-40 dibuang karna ga pake navigation
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pt-10 pb-40">
      {/* <motion.h2
        whileInView={{ opacity: 1, scale: 1 }} // Animasi saat terlihat
        initial={{ opacity: 0, scale: 0.8 }} // Awal lebih kecil dan transparan
        transition={{ duration: 0.6, ease: "easeOut" }} // Transisi smooth
        viewport={{ once: false, amount: 0.5 }} // Animasi bisa terulang
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2> */}

      {/* h2 Pertama - Muncul lebih cepat */}
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }} // No delay
        viewport={{ once: false, amount: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        About <span className="text-pink-200">Me</span>
      </motion.h2>

      {/* h2 Kedua - Muncul dengan Delay
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} // Delay 0.5 detik
        viewport={{ once: false, amount: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Welcome to <span className="text-neutral-500">My World</span>
      </motion.h2> */}

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-72 h-auto ml-52"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            {/* di p ditambahin text-justify */}
            <p className="max-w-xl py-12 px-5 text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
