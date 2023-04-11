import { useState, useEffect } from "react"

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0)

  useEffect(() => {
    const nextSunday = getNextSunday()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = nextSunday - now

      if (distance < 0) {
        clearInterval(interval)
      } else {
        setTimeRemaining(distance)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getNextSunday = () => {
    const now = new Date()
    const daysUntilNextSunday = 7 - now.getDay()
    const nextSunday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilNextSunday,
      0,
      0,
      0,
      0
    )

    return nextSunday.getTime()
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return (
    <div className="flex flex-col items-center mx-5 md:flex-row drop-shadow-xl">
      <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
        <h6 className="font-bold text-black uppercase mb-2 drop-shadow-xl text-2xl">
          Next Contest
        </h6>
        <h3 className="text-5xl font-bold text-white font-heading mb-2">
          Sunday
        </h3>
        <div className="w-full mt-4 md:w-44">
        </div>
      </div>
      <div className="w-full px-5 md:w-auto">
        <div className="flex justify-center text-center text-white">
          <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
            <div className="text-2xl font-semibold md:text-3xl">
              <span>0</span>
              <span>{days}</span>
            </div>
            <div className="mt-3 text-xs uppercase opacity-75">Day</div>
          </div>
          <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
            <div className="text-2xl font-semibold md:text-3xl">
              <span>{hours < 10 ? "0" : null}</span>
              <span>{hours}</span>
            </div>
            <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
          </div>
          <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
            <div className="text-2xl font-semibold md:text-3xl">
              <span>{minutes < 10 ? "0" : null}</span>
              <span>{minutes}</span>
            </div>
            <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
          </div>
          <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
            <div className="text-2xl font-semibold md:text-3xl">
              <span>{seconds < 10 ? "0" : null}</span>
              <span>{seconds}</span>
            </div>
            <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
          </div>
        </div>
      </div>
    </div>
    // <section className="flex py-8 bg-indigo-500 bg-gradient dark:bg-gray-800 md:py-16">
    //   <div className="box-content max-w-5xl px-5 mx-auto">
    //     <div className="flex flex-col items-center -mx-5 md:flex-row">
    //       <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
    //         <h6 className="text-xs font-semibold text-indigo-800 uppercase md:text-base dark:text-gray-100">
    //          Next Contest Starts
    //         </h6>
    //         <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">
    //           Sunday 17
    //         </h3>
    //         <h3 className="text-lg font-bold leading-tight text-white font-heading md:text-xl">
    //           @ 10:00 AM
    //         </h3>
    //         <div className="w-full mt-4 md:w-44">
    //           <button
    //             type="button"
    //             className="w-full px-4 py-2 text-base font-semibold text-center text-indigo-500 transition duration-200 ease-in bg-white rounded-lg shadow-md hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
    //           >
    //             Early bird
    //           </button>
    //         </div>
    //       </div>
    //       <div className="w-full px-5 md:w-auto">
    //         <div className="flex justify-center text-center text-white">
    //           <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
    //             <div className="text-2xl font-semibold md:text-3xl">
    //               <span>0</span>
    //               <span>1</span>
    //             </div>
    //             <div className="mt-3 text-xs uppercase opacity-75">Day</div>
    //           </div>
    //           <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
    //             <div className="text-2xl font-semibold md:text-3xl">
    //               <span>1</span>
    //               <span>8</span>
    //             </div>
    //             <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
    //           </div>
    //           <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
    //             <div className="text-2xl font-semibold md:text-3xl">
    //               <span>5</span>
    //               <span>0</span>
    //             </div>
    //             <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
    //           </div>
    //           <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
    //             <div className="text-2xl font-semibold md:text-3xl">
    //               <span>1</span>
    //               <span>9</span>
    //             </div>
    //             <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
export default Countdown
