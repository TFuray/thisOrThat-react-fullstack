import Countdown from "./Countdown"

const Hero = () => {
  return (
    <section className="mb-40 mt-20">
      <div className="bg-base-300 ">
        <div className="container flex flex-col items-center px-4 py-6 pb-6 mx-auto text-center dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            <div>
              <Countdown />
            </div>
          </h1>
          <div className="drop-shadow-2xl text-xl ">
            <p className="mt-6 mb-8 sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Every Sunday you can upload an original image. <br />
              To have a chance at being voted Number 1
            </p>
          </div>
          <div className="flex flex-wrap justify-center mr-3">
            <button className="btn btn-primary text-lg ">Login</button>
            <button className="btn btn-secondary text-lg ml-3">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
