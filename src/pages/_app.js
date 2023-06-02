import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { AnimatePresence,motion } from 'framer-motion'

export default function App({ Component, pageProps }) {
 
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
       duration:0.75
      }}
      variants={{
        initialState:{
          opacity:0,
          clipPath: "inset(0 50% 0 50%)",
        },
        animateState:{
          opacity:1,
          clipPath: "inset(0 0 0 0)",
        },
        exitState:{
          clipPath: "inset(0 50% 0 50%)",
        }
      }}
    >
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  )
}
