import { FaPercentage } from 'react-icons/fa'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="nav">
      <motion.h2
      initial={{ 
        opacity: 0 ,
        y: 50
      }}
      whileInView={{ 
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: .1,
        duration: 1
      }}
      >
        <Link href="/">
        Dasada
        </Link>
      </motion.h2>
      <ul>
        <motion.li whileHover={{ x: 40 }} whileTap={{ scale: .8 }}>
          <Link href="/news">news</Link>
        </motion.li>
        <motion.li whileHover={{ x: 40 }} whileTap={{ scale: .8 }}>
          <Link href="#">look <FaPercentage color={"red"} /></Link>
        </motion.li>
        <motion.li whileHover={{ x: 40 }} whileTap={{ scale: .8 }}>
          <Link href="/staff">staff photo</Link>
        </motion.li>
        <motion.li whileHover={{ x: 40 }} whileTap={{ scale: .8 }}>
          <Link href="#">web store</Link>
        </motion.li>
      </ul>
    </div>
  );
}
