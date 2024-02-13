import axios from "axios";

async function getUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return [response.data, response.status]; // Return the actual data
  } catch (error) {
    // Handle errors here
    return null; // Or throw an error
  }
}

export default getUserData;
