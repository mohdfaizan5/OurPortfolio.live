import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/homepage"
import LoginPage from "./pages/loginpage"
import 'remixicon/fonts/remixicon.css'
import RegisterPage from "./pages/registerpage"
import CreatePortfolioPage from "./pages/CreatePortfolioPage"
import p1Page from "./portfolios/p1"
import boxComponent from "./components/box";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<HomePage boxComponent={boxComponent}/>}></Route>
        <Route path="/create" element={<CreatePortfolioPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/:username" element={<p1Page />}></Route>
      </Routes>

    </>
  )
}


const NavBar = () => {
  return (
    <section className="flex justify-between px-7 py-5 items-center text-3xl font-poppins fixed bg-white top-0 right-0 left-0">
      <Link to={'/'}>
        <div className="flex items-end gap-1">
          <i className="ri-blaze-line text-4xl"></i>
          <h3 className="font-bold text-2xl">OurPortfolio</h3>
        </div>
      </Link>
      <nav className="hidden md:block">
        <Link to={'/create'}>
          <button className="text-white text-sm rounded-md font-semibold font-poppins px-[20px] py-3 bg-blue-600 hover:bg-blue-700 ">Create <i class="ri-corner-right-up-fill"></i></button>
        </Link>
      </nav>
      <div className="mobile_nav_bar md:hidden">
        <i className="ri-menu-fill"></i>
      </div>

    </section>

  )
}

export default App
