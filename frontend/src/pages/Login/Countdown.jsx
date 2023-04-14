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
        <h6 className="font-bold text-secondary-content  uppercase mb-2 drop-shadow-xl text-2xl">
          Next Contest
        </h6>
        <h3 className="text-5xl font-bold text-neutral-content font-heading mb-2">
          Sunday
        </h3>
        <div className="w-full mt-4 md:w-44">
        </div>
      </div>
      <div className="w-full px-5 md:w-auto">
        <div className="flex justify-center text-center text-secondary-content">
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

  )
}
export default Countdown
