"use client";

import React, { useEffect, useRef } from "react";

const AnimatedFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
    }[] = [];
    const colors = ["#FF6F91", "#FFC75F", "#D65DB1", "#845EC2", "#0081CF"];
    const maxParticles = 33;
    const radius = 5;
    const lineLength = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let i = index + 1; i < particles.length; i++) {
          const p2 = particles[i];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distance < lineLength) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    const createParticles = () => {
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    resizeCanvas();
    createParticles();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-50 z-0" />;
};

export default AnimatedFooter;
