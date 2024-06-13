"use client";
import { useEffect } from "react";

const User = () => {
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      console.log(storedUser);
    }, []);

  return 
};
export default User;
