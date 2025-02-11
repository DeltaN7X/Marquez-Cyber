(function() {
    console.log("Matrix script loaded");

    const matrixCanvas = document.querySelector('.matrix');
    if (!matrixCanvas) {
        console.error("Canvas element not found in DOM");
        return;  // Exit the script if no canvas is found
    }

    console.log("Canvas found and ready");

    const ctx = matrixCanvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get canvas context");
        return;  // Exit if the canvas context can't be obtained
    }

    console.log("Canvas context obtained");

    // Resize canvas to fit the window
    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();  // Initial resize on page load

    // Drawing the Matrix effect
    const letters = Array(256).join(1).split('');

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';  // Slight transparency for trailing effect
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#0F0';  // Bright green color
    ctx.font = '20pt monospace';

    const columns = Math.floor(matrixCanvas.width / 20);
    if (!window.drops) {
        window.drops = Array(columns).fill(1);
    }

    window.drops.forEach((y, index) => {
        const text = "01"[Math.floor(Math.random() * 2)];  // Use simple 0 and 1 characters
        const x = index * 20;

        ctx.fillText(text, x, y * 20);

        if (y * 20 > matrixCanvas.height && Math.random() > 0.975) {
            window.drops[index] = 0;
        }

        window.drops[index]++;
    });

    requestAnimationFrame(draw);
}


    window.drops.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);  // Random Japanese Katakana characters
        const x = index * 15;

        ctx.fillText(text, x, y * 15);

        // Reset drops to top randomly after falling off screen
        if (y * 15 > matrixCanvas.height && Math.random() > 0.975) {
            window.drops[index] = 0;
        }

        window.drops[index]++;
    });

    requestAnimationFrame(draw);
}




    console.log("Starting matrix animation");
    draw();

})();  // Ensure this closes the IIFE properly
