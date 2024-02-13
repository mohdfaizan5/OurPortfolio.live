import getUserDetails from "@/utils/getUserDetails";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Design2 = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  function getUserData(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        console.log(res);
        setUserData(res.data);
        console.log(userData);
      })
      .catch((error, res) => {
        console.log(res);
        if (error.res.status === 404) {
          console.error("User not found:", error.message);
        } else {
          console.error("Error fetching user:", error);
        }
      });
  }

  useEffect(() => {
    getUserData(username);
  }, []);

  return (
    <div>
      {userData ? (
        <div className="py-10 gap-2 bg-pink-100 h-screen flex flex-col items-center">
          {userData ? (
            <>
              <h1 className="text-3xl">Hi {userData.name}</h1>
              <img
                src={userData.avatar_url}
                className="w-20 h-20 rounded-full hover:shadow-2xl hover:shadow-pink-500"
              />
              <h3 className="text-balance text-center text-sm">
                {userData.bio}
              </h3>
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

                <a
                  href={`https://github.com/${userData.login}`}
                  target="_blank"
                >
                  <button className="rounded-full px-3 py-2 bg-[#161b22] text-white">
                    Github
                  </button>
                </a>
              </section>
              <section>
                {userData.location ? (
                  <span className="border border-black rounded-xl px-3 py-1">{userData.location}</span>
                ) : (
                  ""
                )}
              </section>
            </>
          ) : (
            "Loading"
          )}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Design2;
