"use server";

import baseUrl from "../../helpers/baseUrl";

const userLogin = async (data) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();

  return userInfo;
};

export default userLogin;
