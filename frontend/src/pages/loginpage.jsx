import RegisterPage from "./registerpage"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center mt-[150px]">

      <h1 className=" font-semibold text-4xl mb-10">Login</h1>
      <form className="flex flex-col items-center gap-3">
        <input type="text" name="name" className="border border-black p-1 rounded-md" placeholder="username" />
        <input type="password" name="password" className="border border-black p-1 rounded-md" placeholder="password" />
        <button type="submit" className="bg-black text-white px-5 py-2 rounded-full">Login
          <i className="ri-arrow-right-line text-white"></i>
        </button>
        {/* <Link to={'/login'}>
          <button className="text-white rounded-md font-semibold font-poppins px-[30px] py-4 bg-blue-600 hover:bg-blue-700 ">Try for free</button>
        </Link> */}

        {/* <Link to={'/register'}>
          <button className="">Create an Account</button>
          </Link> */}
          
      </form>
    </div>
  )
}

export default LoginPage;