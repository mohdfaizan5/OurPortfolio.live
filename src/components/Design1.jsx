import { getUserDetails } from "@/utils/getUserDetails"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

const Design1 = () => {
  const { username } = useParams()

  let userData
  useEffect(() => {})
  userData = getUserDetails(username)

  return (
    <div className="bg-red-100 h-screen">
      <h1>Hi {userData.name}</h1>
      <img src={userData.avatar_url} className="w-20 h-20" />
      <h3>{userData.bio}</h3>
    </div>
  )
}

export default Design1
