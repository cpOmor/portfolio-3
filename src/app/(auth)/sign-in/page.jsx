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
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/auth/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const handleShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const user = useSelector(selectUser);
  // if (user) {
  //   router.push("./");
  //   toast.error("Your are already login", { duration: 2000 });
  //   return
  // }

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await postRequest(data, "auth/login");

      const user = verifyToken(result.data.accessToken);
      dispatch(setUser({ user, token: result.data.accessToken }));

      if (result.data.accessToken) {
        storeUserInfo(result.data.accessToken);
        router.push("./");
      }
    } catch (err) {
      return;
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
              Login your account
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
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-start font-semibold font-sans text-[18px] mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`border border-gray-400 p-2 outlet-none focus:outline-none ${
                      errors.password && "border-red-500"
                    }`}
                  />
                  <p
                    className="absolute top-1/2 -translate-y-1/2 right-10"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "hide" : "show"}
                  </p>
                  <span className="w-full "></span>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    defaultChecked
                    id="login"
                    {...register("login")}
                  />

                  <label
                    htmlFor="login"
                    className="text-start ml-2 font-sans text-[18px] mb-1"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="./forget-password"
                  className="underline hover:text-[#1586fd]"
                >
                  Forget password
                </Link>
              </div>

              <Button type="submit" variant="contained" color="primary">
                {loading === false ? "Submit" : "Submitting..."}
              </Button>
            </form>
            <Box mt="8px">
              have a no account{" "}
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

export default LoginPage;
