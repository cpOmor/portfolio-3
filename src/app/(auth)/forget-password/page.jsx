"use client";
import { Container, Stack, Box, Typography, Button } from "@mui/material";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import postRequest from "../../../service/postRequest";
import { useState } from "react";
import verifyToken from "../../../util/verifyToken";
import { setUser } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../../../services/authServices";
import Image from "next/image";
import profile from "../../../assets/profile.png";
import Link from "next/link";
import { toast } from "sonner";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // const data = { email: "qteam9035@gmail.com" };
    console.log(data);
    try {
      const result = await postRequest(data, "auth/forget-password");
    } catch (err) {
     
      return
    }
    setLoading(false);
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 6,
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              fontSize={"30px"}
              mb={"20px"}
              fontWeight={700}
            >
              Send verification link
            </Typography>
          </Box>

          <Box>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="h-[100px] mx-auto">
                <Image
                  width={100}
                  height={100}
                  src={profile}
                  alt="profile"
                  className="rounded-full"
                ></Image>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-start font-semibold font-sans text-[18px] mb-1"
                >
                  Email address <span className="text-red-500 ">*</span>
                </label>
                <input
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className={`border border-gray-400 p-2 outlet-none ${
                    errors.email && "border-red-500"
                  }`}
                />
              </div>

              <Button type="submit" variant="contained" color="primary">
                {loading === false ? "Submit" : "Submitting..."}
              </Button>
            </form>
            <Box mt="8px">
              Can not find account{" "}
              <Link href="./sign-up" className="underline hover:text-[#1586fd]">
                sign up
              </Link>{" "}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ForgetPassword;
