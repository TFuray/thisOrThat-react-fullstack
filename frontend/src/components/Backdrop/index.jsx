import { motion } from "framer-motion"
import { useState } from "react"
import Modal from '../Modal/index'

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="flex justify-center items-center absolute top-0 left-0 h-full w-full bg-black/20"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
export default Backdrop
