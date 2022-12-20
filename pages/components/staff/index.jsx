import Image from 'next/image'
import { motion } from "framer-motion"

export default function Staff(){
  return (
    <motion.div className="staff"
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
        <Image src="/01.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Nao Kosaka</p>
      </div>
      <div className="list">
        <Image src="/02.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Miho Watanabe</p>
      </div>
      <div className="list">
        <Image src="/03.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Kyoko Saito</p>
      </div>
      <div className="list">
        <Image src="/04.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Shiho Kato</p>
      </div>
      <div className="list">
        <Image src="/05.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Mirei Sasaki</p>
      </div>
      <div className="list">
        <Image src="/06.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Kumi Sasaki</p>
      </div>
      <div className="list">
        <Image src="/07.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Suzuka Tomita</p>
      </div>
      <div className="list">
        <Image src="/08.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Shio Sarina</p>
      </div>
      <div className="list">
        <Image src="/09.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Niu Akari</p>
      </div>
      <div className="list">
        <Image src="/10.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Mei Higashimura</p>
      </div>
      <div className="list">
        <Image src="/11.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Konoka Matsuda</p>
      </div>
      <div className="list">
        <Image src="/12.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Haruna Kawata</p>
      </div>
      <div className="list">
        <Image src="/13.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Kanemura Miku</p>
      </div>
      <div className="list">
        <Image src="/14.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Hinano Uemura</p>
      </div>
      <div className="list">
        <Image src="/15.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Ayaka Takamoto</p>
      </div>
      <div className="list">
        <Image src="/16.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Manamo Miyata</p>
      </div>
      <div className="list">
        <Image src="/17.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Aina Takase</p>
      </div>
      <div className="list">
        <Image src="/18.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Mao Iguchi</p>
      </div>
      <div className="list">
        <Image src="/19.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Asaharu Hasegawa</p>
      </div>
      <div className="list">
        <Image src="/20.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Reina Ikebata</p>
      </div>
      <div className="list">
        <Image src="/21.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Toru Nomaguchi</p>
      </div>
      <div className="list">
        <Image src="/22.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Yuuta Moriya</p>
      </div>
      <div className="list">
        <Image src="/23.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Uno Kanda</p>
      </div>
      <div className="list">
        <Image src="/24.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Yoshiyuki Tsubokura</p>
      </div>
      <div className="list">
        <Image src="/25.jpg" alt="image" width={100} height={180} style={{
          objectFit: "cover",
          borderRadius: 10,
          border: "1px solid gray",
          padding: 5,
        }}/>
        <p style={{
          textAlign: "center",
        }}>Ezemata Kenta Charles</p>
      </div>
    </motion.div>
  )
}