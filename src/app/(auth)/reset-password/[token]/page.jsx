"use client";
import { Container, Stack, Box, Typography, Button } from "@mui/material";

import Image from "next/image";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import verifyToken from "../../../../util/verifyToken";
import postRequest from "../../../../service/postRequest";
import sadGif from "../../../../assets/giphy.gif";
import Link from "next/link";
import { storeUserInfo } from "../../../../services/authServices";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const { token } = useParams();
  const tokenInfo = verifyToken(token);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    data.token = token;
    try {
      const result = await postRequest(data, "auth/reset-password");

      const accessToken = result?.data?.accessToken;
      const refreshToken = result?.data?.refreshToken;
      Cookies.set("refreshToken", refreshToken);
      const user = verifyToken(accessToken);

      if (accessToken) {
        storeUserInfo(accessToken);
        router.push("/");
      }

      if (refreshToken) {
        dispatch(setUser({ user, token: accessToken }));
      }

      setLoading(false);
    } catch (err) {
      return;
    }
    setLoading(false);
  };

  const currentTime = Math.floor(new Date().getTime() / 1000);

  return (
    <Container>
      {tokenInfo.exp >= currentTime ? (
        <>
          <Stack
            sx={{
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
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
                  className="text-start"
                  fontWeight={700}
                >
                  Update my password
                </Typography>
              </Box>

              <Box>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col">
                    <label className="text-start font-semibold font-sans text-[18px] mb-1">
                      Email address
                    </label>
                    <input
                      value={tokenInfo?.email}
                      disabled
                      {...register("email")}
                      className={`border border-gray-400 p-2 outlet-none `}
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

                  <Button type="submit" variant="contained" color="primary">
                    {loading === false ? "Submit" : "Submitting..."}
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <div className="flex flex-col h-[100vh] w-full justify-center items-center">
            <Image src={sadGif} width={300} height={300} alt="sad"></Image>
            <Typography variant="h2" pb={2}>
              Session is expired!
            </Typography>
            <Stack gap={4}>
              <Button component={Link} href="/../forget-password">
                Mail send agin
              </Button>
            </Stack>
          </div>
        </>
      )}
    </Container>
  );
};

export default ForgetPassword;
