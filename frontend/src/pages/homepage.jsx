
import { Link, Route } from "react-router-dom"

const HomePage = () => {
  return (
    <>
     <title>React App</title>
      <main className="hero_section flex flex-col items-center justify-center h-screen w-full mt-[20px] md:mt-[140px] px-1 md:flex-row md:items-start">
        <section className="flex flex-col items-center w-[90vw] md:w-[60vw]">
          <h1 className="text-6xl font-poppins font-semibold py-4 ml-4 lg:text-[75px]">Let your portfolio <br/>define you</h1>
          <p className="text-center text-[21px] font-[500] max-w-[500px]">Create a portfolio that wins your potential clients,
          employeer and world</p>
          <div className="flex gap-3 my-5">
            <Link to={'/login'}>
              <button className="text-white rounded-md font-semibold font-poppins px-[30px] py-4 bg-blue-600 hover:bg-blue-700 ">Try for free</button>
            </Link>


            <Link to={'/register'}>
              <button className="text-black font-semibold font-poppins px-[30px] py-3 border-2 border-black rounded-md bg-white text-[18px] hover:border-blue-700">Book a Demo</button>
            </Link>
          </div>
          <div className="font-inter text-sm text-[#141414]">
            <div>✓ 14-day free trail</div>
            <div>✓ No Credit card required</div>
            <div>✓ Cancle anytime</div>
          </div>
        </section>
        <aside className="hidden md:block w-[600px] h-[100vh]">
          <img className=" h-full md:mt-[-70px]" src="https://cdn.revealbot.com/vite/assets/mp-hero-img2x-57f8a3e1.png" alt="" />
        </aside>
      </main>
      <boxComponent/>
    </>
  )
}

export default HomePage;