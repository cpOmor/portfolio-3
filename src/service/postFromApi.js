"use client";
import { toast } from "sonner";
// import { storeUserInfo } from "../../../services/authServices";

const postFromApi = async (data, url) => {
  const response = await fetch(`http://localhost:5000/api/v1/${url}`, {
    method: "POST",
    credentials: "include",
    cache: "no-store",
    body: data,
  });

  const result = await response.json();
  if (result?.success && result?.message) {
    toast.success(result?.message, { duration: 2000 });
  }
  if (result?.message && !result?.success) {
    toast.error(result?.message, { duration: 2000 });
  }

  return response;
};
export default postFromApi;
