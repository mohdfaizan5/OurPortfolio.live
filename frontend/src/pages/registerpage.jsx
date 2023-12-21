const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center">

      <h1 className=" font-semibold text-4xl mb-10 mt-[120px]">Register</h1>
      <form className="flex flex-col items-center gap-3">
        <input type="text" name="name" className="border border-black p-1 rounded-md" placeholder="username" />
        <input type="password" name="password" className="border border-black p-1 rounded-md" placeholder="password" />
        <input type="password" name="password" className="border border-black p-1 rounded-md" placeholder="Confirm password" />
        <button type="submit" className="bg-black text-white px-5 py-2 rounded-full">Register


          <i className="ri-arrow-right-line text-white"></i>
        </button>
      </form>
    </div>
  )
}

export default RegisterPage;