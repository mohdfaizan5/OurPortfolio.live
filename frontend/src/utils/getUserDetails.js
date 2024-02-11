import axios from "axios"

export const getUserDetails = (username = "mohdfaizan5") => {
  // console.log("Getting data from Github")
  // const url = `https://api.github.com/users/${username}`

  // axios
  //   .get(url)
  //   .then((response) => {
  //     const rawData = response.data // User data
  //     console.log(rawData)

  //     const finalData = (({
  //       followers,
  //       following,
  //       location,
  //       blog,
  //       login,
  //       avatar_url,
  //       name,
  //       bio,
  //       email,
  //       twitter_username,
  //     }) => ({
  //       login,
  //       name,
  //       email,
  //       avatar_url,
  //       bio,
  //       location,
  //       blog,
  //       twitter_username,
  //       followers,
  //       following,
  //     }))(rawData)

  //     return finalData
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
  return {
    avatar_url: "https://avatars.githubusercontent.com/u/79694828?v=4",
    bio: "This is Faizan, I'm currently working on python to get started in my career to my programming journey.",
    blog: "mohdfaizan.me",
    email: null,
    followers: 19,
    following: 23,
    location: "Bangalore",
    login: "mohdfaizan5",
    name: "Mohd Faizan",
    twitter_username: "mohdfaizan_5",
  }
}
