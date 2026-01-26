import { useEffect, useRef } from "react";

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to parent container
        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Matrix characters
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$<>[]{}/*-+=^#";
        const fontSize = 15;
        const columns = Math.floor(canvas.width / fontSize);

        // Array to track drop positions
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * -1; // Start at random random vertical positions
        }

        const draw = () => {
            // Semi-transparent background to create trail effect
            ctx.fillStyle = "rgba(50, 56, 111, 0.1)"; // Exact RGB for #2d3365
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#F4BB46"; // Gold color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                // Draw the character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly or move down
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 35); // ~30 FPS

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block"
            style={{ background: "transparent" }} // Let parent background show through
        />
    );
}
