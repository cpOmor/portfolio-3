"use client"; // Error components must be Client Components

import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import sadGif from "../assets/giphy.gif";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center">
      <Image src={sadGif} width={300} height={300} alt="sad"></Image>
      <Typography variant="h2" pb={2}>
        Something went wrong!
      </Typography>
      <Stack gap={4}>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Button component={Link} href="/">
          GO to Home
        </Button>
      </Stack>
    </div>
  );
}
