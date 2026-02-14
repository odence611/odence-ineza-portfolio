import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles - increased count for more dots
    const particleCount = Math.min(150, Math.floor(window.innerWidth / 12));
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse repulsion
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120;
          particle.vx -= (dx / dist) * force * 0.3;
          particle.vy -= (dy / dist) * force * 0.3;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 70, 229, ${particle.opacity})`;
        ctx.fill();

        // Draw connections - increased connection distance
        particles.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.12 * (1 - dist2 / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
