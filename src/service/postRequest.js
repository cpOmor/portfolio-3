"use client";
import { toast } from "sonner";
// import { storeUserInfo } from "../../../services/authServices";

const postRequest = async (data, url) => {
  const response = await fetch(`http://localhost:5000/api/v1/${url}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (result?.success && result?.message) {
    toast.success(result?.message, { duration: 2000 });
  }
  if (result?.message && !result?.success) {
    toast.error(result?.message, { duration: 2000 });
  }

  return result;
  
};
export default postRequest;
