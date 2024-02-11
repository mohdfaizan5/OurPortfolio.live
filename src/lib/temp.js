const rawData = {
  login: "mohdfaizan5",
  id: 79694828,
  node_id: "MDQ6VXNlcjc5Njk0ODI4",
  avatar_url: "https://avatars.githubusercontent.com/u/79694828?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mohdfaizan5",
  html_url: "https://github.com/mohdfaizan5",
  followers_url: "https://api.github.com/users/mohdfaizan5/followers",
  following_url:
    "https://api.github.com/users/mohdfaizan5/following{/other_user}",
  gists_url: "https://api.github.com/users/mohdfaizan5/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/mohdfaizan5/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mohdfaizan5/subscriptions",
  organizations_url: "https://api.github.com/users/mohdfaizan5/orgs",
  repos_url: "https://api.github.com/users/mohdfaizan5/repos",
  events_url: "https://api.github.com/users/mohdfaizan5/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/mohdfaizan5/received_events",
  type: "User",
  site_admin: false,
  name: "Mohd Faizan",
  company: null,
  blog: "mohdfaizan.me",
  location: "Bangalore",
  email: null,
  hireable: true,
  bio: "This is Faizan, I'm currently working on python to get started in my career to my programming journey.",
  twitter_username: "mohdfaizan_5",
  public_repos: 33,
  public_gists: 0,
  followers: 18,
  following: 23,
  created_at: "2021-02-26T09:55:12Z",
  updated_at: "2024-01-18T13:08:07Z",
}

// const {
//   followers,
//   following,
//   location,
//   blog,
//   login,
//   avatar_url,
//   name,
//   bio,
//   email,
//   twitter_username,
// } = a;

// console.log(avatar_url);

console.log(rawData)

const finalData = (({
  followers,
  following,
  location,
  blog,
  login,
  avatar_url,
  name,
  bio,
  email,
  twitter_username,
}) => ({
  login,
  name,
  email,
  avatar_url,
  bio,
  location,
  blog,
  twitter_username,
  followers,
  following,
}))(rawData)

console.log(finalData)
