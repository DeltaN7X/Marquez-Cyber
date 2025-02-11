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
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Slight transparency for trailing effect
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.fillStyle = '#0F0';  // Bright green text
        ctx.font = '15pt monospace';

        letters.map((y_pos, index) => {
            const text = String.fromCharCode(3e4 + Math.random() * 33);
            const x_pos = index * 15;
            ctx.fillText(text, x_pos, y_pos);
            letters[index] = y_pos > matrixCanvas.height + Math.random() * 1e4 ? 0 : y_pos + 15;
        });

        requestAnimationFrame(draw);
    }

    console.log("Starting matrix animation");
    draw();

})();  // Ensure this closes the IIFE properly
