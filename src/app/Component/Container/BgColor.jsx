"use client";
import React, { useEffect, useRef } from "react";

const BgColor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = window.innerWidth;
    const H = window.innerHeight;

    // Set Canvas and Background Color
    canvas.width = W;
    canvas.height = H;
    ctx.fillStyle = "#112";
    ctx.fillRect(0, 0, W, H);

    // Glow effect
    ctx.shadowBlur = 5;
    ctx.shadowColor = "black";

    const animate = () => {
      // Random position and size of stars
      const x = W * Math.random();
      const y = H * Math.random();
      const r = 1 * Math.random();

      // Draw the stars
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      setTimeout(animate, 1000);
    };

    animate();

    // Clean up on component unmount
    return () => {
      ctx.clearRect(0, 0, W, H);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full fixed top-0 min-h-[110vh] overflow-hidden -z-50"/>;
};

export default BgColor;
