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
    ctx.fillStyle = 'yellow';  // Fill canvas with yellow to make it obvious
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = 'red';  // Bright red text
    ctx.font = '50pt monospace';  // Larger font size for visibility

    const text = "VISIBLE?";  // Clear message for testing
    ctx.fillText(text, 100, 100);  // Draw at a fixed position

    requestAnimationFrame(draw);
}



    console.log("Starting matrix animation");
    draw();

})();  // Ensure this closes the IIFE properly
