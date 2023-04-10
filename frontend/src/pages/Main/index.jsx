import { motion } from "framer-motion"
import { useState } from "react"
import Hero from "./Hero"
import Modal from "../../components/Modal"

const index = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)


  return (
    <>
      <div><Hero /></div>
      <div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary"
            onClick={() => (modalOpen ? close() : open())}
          >
            Login
          </motion.button>
        </div>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            text="This is where we will log in"
          />
        )}
      </div>
    </>
  )
}
export default index
