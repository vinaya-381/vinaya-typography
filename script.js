document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animations
    gsap.from(".title", { duration: 2, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".subtitle", { duration: 2, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });

    gsap.to(".floating-astronaut", {
        y: "+=20",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3
    });

    gsap.to(".spinning-planet", {
        rotation: 360,
        repeat: -1,
        ease: "linear",
        duration: 10
    });

    gsap.from(".animated-text", { duration: 1.5, opacity: 0, y: 30, ease: "power2.out", delay: 1 });
    gsap.from(".info-text", { duration: 2, opacity: 0, y: 20, ease: "power2.out", delay: 1.5 });

    // Falling Stars Animation
    const canvas = document.getElementById("starsCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let stars = [];
    const numStars = 150; // Increased number of stars for better visibility

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5, // Slight horizontal movement
            speedY: Math.random() * 3 + 1
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        stars.forEach(star => {
            star.x += star.speedX;
            star.y += star.speedY;

            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateStars);
    }
    animateStars();
});
