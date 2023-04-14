import VoteBox from "./VoteBox"
import { useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../../components/Spinner"


const index = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector ((state) => state.auth)
  

  return (
    <section className="bg-slate-900">
      <VoteBox />
    </section>
  )
}
export default index
