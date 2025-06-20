function initMatrix() {
        const matrixCanvas = document.querySelector('.matrix');
        if (!matrixCanvas) {
            console.error("Canvas element not found in DOM");
            return;
        }

        console.log("Canvas found and ready");

        const ctx = matrixCanvas.getContext('2d');
        if (!ctx) {
            console.error("Failed to get canvas context");
            return;
        }

        console.log("Canvas context obtained");

        let animationId;
        let columns, drops;
        const fontSize = 20;

        // Resize canvas and reinitialize variables
        function resizeCanvas() {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            columns = Math.floor(matrixCanvas.width / fontSize);
            drops = Array(columns).fill(1);
            
            // Reset drops with random starting positions for smoother effect
            for (let i = 0; i < drops.length; i++) {
                drops[i] = Math.random() * -100;
            }
            
            console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
        }

        // Handle window resize
        window.addEventListener('resize', function() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            resizeCanvas();
            draw();
        });

        // Initial setup
        resizeCanvas();

        // Drawing the Matrix effect
        function draw() {
            // Semi-transparent black rectangle for trailing effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            // Set text properties
            ctx.fillStyle = '#0F0'; // Bright green color
            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            // Draw each column
            for (let i = 0; i < drops.length; i++) {
                // Character pool: mix of 1s, 0s, and Japanese katakana
                const chars = '10アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
                const text = chars[Math.floor(Math.random() * chars.length)];
                
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reset drop to top when it goes off screen, with some randomness
                if (y > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }

            // Continue animation
            animationId = requestAnimationFrame(draw);
        }

        // Start the animation
        console.log("Starting matrix animation");
        draw();

        // Cleanup function for page unload
        window.addEventListener('beforeunload', function() {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
    }
})();
