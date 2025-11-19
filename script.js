const flag = document.querySelector(".flag-3d");

flag.addEventListener("mousemove", (e) => {
    const rect = flag.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Qanchalik qiyshaysin?
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;

    flag.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
});

flag.addEventListener("mouseleave", () => {
    flag.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
});
