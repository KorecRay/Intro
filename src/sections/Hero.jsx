import { motion } from "framer-motion"
import ParticleBackground from "../components/ParticleBackground"

export default function Hero(){

  return(

    <section style={hero}>

      <ParticleBackground/>

      <div style={content}>

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          style={title}
        >
          Ray Qiu
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.4}}
          style={subtitle}
        >
          Software Developer · Creative Technologist
        </motion.p>

      </div>

    </section>

  )

}

const hero={
  height:"100vh",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  position:"relative",
  overflow:"hidden"
}

const content={
  position:"relative",
  zIndex:1,
  textAlign:"center"
}

const title={
  fontSize:"72px",
  margin:0
}

const subtitle={
  opacity:0.7,
  marginTop:"20px",
  fontSize:"20px"
}