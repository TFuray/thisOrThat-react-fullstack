import { useState, useEffect, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../../features/auth/authSlice"
import Spinner from "../../components/Spinner/index"
import Modal from "./Modal"
import Hero from './Hero'

const index = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/posts")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div>
        <Hero openModal={openModal}/>
        <Modal
          isOpen={isOpen}
          Fragment={Fragment}
          closeModal={closeModal}
          onChange={onChange}
          onSubmit={onSubmit}
          email={email}
          password={password}
        />
      </div>
    </>
  )
}

export default index
