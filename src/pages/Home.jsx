import React from 'react'
import Popularr from '../components/Popularr'
import Veggiess from '../components/Veggiess'
import {motion} from 'framer-motion'
function Home() {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <Veggiess/>
        <Popularr/>
        
    </motion.div>
  )
}

export default Home