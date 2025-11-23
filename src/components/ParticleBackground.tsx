import React, { useRef, useEffect } from "react";

interface ParticleType {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  baseColor: string;
  hue: number;
  draw: () => void;
  update: () => void;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let particlesArray: ParticleType[] = [];
    const numberOfParticles = 60;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle implements ParticleType {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      baseColor: string;
      hue: number;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        baseColor: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.baseColor = baseColor;
        this.hue = Math.random() * 360;
      }

      draw() {
        const color = `hsla(${this.hue}, 100%, 60%, 1)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 25;
        ctx.fill();
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.hue += 0.5; // Smooth color shifting
        if (this.hue > 360) this.hue = 0;

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const directionX = (Math.random() - 0.5) * 0.8;
        const directionY = (Math.random() - 0.5) * 0.8;

        const baseColor = Math.random() > 0.5 ? "#00D4FF" : "#0055FF";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, baseColor)
        );
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            const opacity = 1 - distance / 140;

            const grad = ctx.createLinearGradient(
              particlesArray[a].x,
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y
            );
            grad.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
            grad.addColorStop(1, `rgba(0, 85, 255, ${opacity})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;

            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => p.update());
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full bg-transparent"
    ></canvas>
  );
};

export default ParticleBackground;
