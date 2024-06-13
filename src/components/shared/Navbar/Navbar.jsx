"use client";
import dynamic from "next/dynamic";
import Container from "../Container/Container";
import { Button } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/features/auth/authSlice";
import { storeUserInfo } from "../../../services/authServices";

const AuthInfo = dynamic(() => import("../../ui/AuthInfo/AuthInfo"), {
  ssr: false,
});

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logout());
    storeUserInfo("");
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center h-[12vh]">
          <div>This is a navbar</div>
          {user ? (
            <Button onClick={handleLogOut}>Log out</Button>
          ) : (
            <Link href="./sign-in">
              <Button>Login</Button>
            </Link>
          )}

          <div>This is a navbar</div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
