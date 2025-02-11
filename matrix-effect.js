(function() {
   console.log("Matrix script loaded");

const matrixCanvas = document.querySelector('.matrix');
if (matrixCanvas) {
    console.log("Canvas found and ready");
    const ctx = matrixCanvas.getContext('2d');

    if (ctx) {
        console.log("Canvas context obtained");

        function resizeCanvas() {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);

            // Force canvas redraw after resize
            drawMatrix();
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawMatrix() {
            ctx.fillStyle = 'green';  // Fill with green to test
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            console.log("Canvas filled with green");
        }

        // Ensure it draws immediately on page load
        drawMatrix();
    } else {
        console.error("Failed to get canvas context");
    }
} else {
    console.error("Canvas element not found in DOM");
}



        function resizeCanvas() {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Fill the canvas with green for testing
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        console.log("Canvas filled with green");
    } else {
        console.error("Failed to get canvas context");
    }
} else {
    console.error("Canvas element not found in DOM");
}

}

const ctx = matrixCanvas.getContext('2d');

function resizeCanvas() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// TEST: Fill the entire canvas with solid green to verify it's rendering
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

console.log("Canvas filled with green");


    }

    const ctx = matrixCanvas.getContext('2d');

    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const letters = Array(256).join(1).split('');

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.fillStyle = '#0F0';
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
})();
