import axios from "axios"
import { useState } from "react";

const CreatePortfolioPage = () => {

  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [isLoading, setIsloading] = useState(false)

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    // Check for data validation first.👉👉

    try {
      setIsloading(true)
      console.log({firstname, lastname, jobTitle })
      const response = await axios.post("http://localhost:3000/add", { username: username, name: { first: firstname, last: lastname }, jobTitle: jobTitle })

      alert(response.username)
      setIsloading(false)

    }
    catch (error) {
      console.log(error)
      setIsloading(false)
    }

  }

  return (
    <div className="px-6">
      <h1 className="font-poppins font-semibold text-3xl mt-[120px]">Enter your Portfolio details</h1>

      <form onSubmit={formSubmitHandler} className="py-8 flex flex-col gap-2 items-center justify-start">
        <div>
          <label htmlFor="username" className="text-sm block">Username</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-600 rounded px-4 py-2 w-96 focus:outline-none focus:border-blue-500" />
        </div>

        <div className="flex gap-1">

          <div>
            <label htmlFor="firstname" className="text-sm block">First Name</label>
            <input type="text" name="firstname" className="border border-gray-600 rounded px-4 py-2 w-48 focus:outline-none focus:border-blue-500" placeholder="First name" onChange={(e)=> setFirstname(e.target.value)} />
          </div>

          <div>
            <label htmlFor="lastname" className="text-sm block">Last Name</label>
            <input type="text" name="lastname" className="border border-gray-600 rounded px-4 py-2 w-48 focus:outline-none focus:border-blue-500" placeholder="Last name" onChange={e=> setLastname(e.target.value)}/>
          </div>
        </div>

        <div>
          <label htmlFor="Job" className="text-sm block">Job Title</label>
          <input type="text" placeholder="eg: Full Stack Developer" className="border border-gray-600 rounded px-4 py-2 w-96 focus:outline-none focus:border-blue-500" onChange={e=> setJobTitle(e.target.value)} />
        </div>
        <div>
          {!isLoading && (<button type="submit" className="bg-black text-white py-2 rounded-md mt-8 px-10">Register
            <i className="ri-arrow-right-line text-white"></i>
          </button>
          )}
        </div>

      </form>

    </div>
  )

}

export default CreatePortfolioPage;