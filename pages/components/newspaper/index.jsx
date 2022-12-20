import { FaClock, FaUser } from 'react-icons/fa'
import { motion } from "framer-motion"

export default function Newspaper() {
  return (
    <motion.div className="paper"
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
      <div className="list">
        <h3>Dasada websites wannabe</h3>
        <span><FaClock style={{marginRight: 4}}/>2022 12 12 <FaUser style={{marginLeft: 10,marginRight: 4}}/>dai re</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          aliquam quod laborum. Nulla quod ducimus veniam commodi molestiae ea
          assumenda fuga harum alias iusto quasi nihil repudiandae in, facilis a
          deleniti quaerat delectus eius eligendi quas soluta ipsam repellendus
          laborum cum. Rem asperiores, optio doloremque vel enim rerum
          consequuntur perspiciatis, illum dolore quod, laborum aperiam nemo
          omnis quae saepe explicabo, et inventore? Quae asperiores,
          reprehenderit sapiente soluta dolores temporibus, explicabo, sed ab
          repellendus quisquam qui provident? Mollitia fuga perferendis, ullam
          earum nostrum ratione accusantium, necessitatibus laborum est ipsa
          doloremque nulla nihil deserunt in incidunt. Aperiam quaerat delectus
          doloremque non cum! Ullam possimus atque, suscipit perspiciatis
          explicabo dolorem. Architecto, facere odit. Animi nihil dignissimos
          officiis molestias omnis aspernatur architecto, ratione cupiditate
          perspiciatis provident eligendi tenetur aliquam minus quidem libero
          ullam ex, commodi? Autem quaerat ab, eum laboriosam omnis repellat
          animi id consequuntur eius eligendi rem, tenetur, debitis minima
          dolorem incidunt ad. <br />
          copyright 2022 &copy; dai re All rights reserved 
        </p>
      </div>
      <div className="list">
        <h3>First Post</h3>
        <span><FaClock style={{marginRight: 4}}/>2022 12 12 <FaUser style={{marginLeft: 10,marginRight: 4}}/>dai re</span>
        <p>
          oke
        </p>
      </div>
    </motion.div>
  );
}
