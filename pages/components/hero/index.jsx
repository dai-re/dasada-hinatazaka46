import Image from "next/image";
import pf from "./../../../public/pf.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <motion.p
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .1,
            duration: 1
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magni
          cupiditate deserunt blanditiis a reprehenderit, dolorum esse
          repudiandae voluptas atque.
        </motion.p>
      </div>
      <motion.div
        initial={{ 
        opacity: 0 ,
        x: 100
      }}
      whileInView={{ 
        opacity: 1,
        x: 0
      }}
      transition={{
        delay: .1,
        duration: 1
      }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
        >
          <Image src={pf} alt="hero image" width={"100%"} />
        </motion.div>
      </motion.div>
    </div>
  );
}
