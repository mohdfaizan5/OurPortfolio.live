import { getUserDetails } from "@/utils/getUserDetails"
import { Target } from "lucide-react"
import React from "react"
import { useParams } from "react-router-dom"

const Design2 = () => {
  const { username } = useParams()

  let userData
  // useEffect(() => {})
  userData = getUserDetails(username)

  return (
    <div className="py-10 gap-2 bg-blue-100 h-screen flex flex-col items-center">
      <h1 className="text-3xl">Hi {userData.name}</h1>
      <img src={userData.avatar_url} className="w-20 h-20 rounded-full" />
      <h3 className="text-balance text-center text-sm">{userData.bio}</h3>

      <section>
        {userData.twitter_username && (
          <a
            href={`https://twitter.com/${userData.twitter_username}`}
            target="_blank"
          >
            <button className="rounded-full px-3 py-2 bg-blue-700 text-white">
              Twitter Link
            </button>
          </a>
        )}
      </section>
    </div>
  )
}

export default Design2
