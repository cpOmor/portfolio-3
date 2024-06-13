"use client";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import postFromApi from "../../../service/postFromApi";
import { useState } from "react";
import verifyToken from "../../../util/verifyToken";
import { setUser } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../../../services/authServices";
import Image from "next/image";
import profile from "../../../assets/profile.png";
import Link from "next/link";

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [selectedImage, setSelectedImage] = useState(profile);

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result);
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // };

  // const onSubmit = async (inputData) => {
  //   setLoading(true);

  //   const data = { data: inputData };
  //   console.log(data);
  //   const result = await postFromApi(data, "user/create-user");

  //   setLoading(false);
  // };

  const [selectedImage, setSelectedImage] = useState(profile);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onSubmit = async (inputData) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("data", inputData);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      const result = await postFromApi(formData, "user/create-user");
      // Handle result
      console.log(result);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
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
              Register your account
            </Typography>
          </Box>

          <Box>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="h-[100px] mx-auto relative">
                <input
                  type="file"
                  id="profile"
                  className="hidden"
                  {...register("file", { required: true })}
                  onChange={onImageChange}
                />
                <label htmlFor="profile" className="cursor-pointer">
                  <Image
                    width={100}
                    height={100}
                    src={selectedImage}
                    alt="profile"
                    className={`rounded-full overflow-hidden outline-2 ${
                      errors.file ? "outline-red-500" : "outline-black"
                    }`}
                  />
                  <div
                    className={`absolute outline h-[100px] w-[100px] top-0 left-0 ${
                      errors.file ? "outline-red-500" : "outline-black"
                    } bg-black rounded-full opacity-70 flex items-center justify-center`}
                  ></div>
                  <div className="absolute h-[100px] w-[100px] top-0 left-0 flex items-center justify-center">
                    <FaPlus className="text-white" />
                  </div>
                </label>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-start font-semibold font-sans text-[18px] mb-1"
                >
                  Full Name <span className="text-red-500 ">*</span>
                </label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  className={`border border-gray-400 p-2 outlet-none ${
                    errors.name && "border-red-500"
                  }`}
                />
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
                  {...register("email", { required: true })}
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
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`border border-gray-400 p-2 outlet-none ${
                    errors.password && "border-red-500"
                  }`}
                />
              </div>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <Box mt="8px">
              Already have an account?{" "}
              <Link href="./sign-in" className="underline hover:text-[#1586fd]">
                sign in
              </Link>{" "}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUp;
