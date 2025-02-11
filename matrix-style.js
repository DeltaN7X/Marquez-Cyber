const canvas = document.createElement('canvas');
canvas.classList.add('matrix');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = Array(256).join(1).split('');

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15pt monospace';

    letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * 15;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > canvas.height + Math.random() * 1e4 ? 0 : y_pos + 15;
    });

    requestAnimationFrame(draw);
}

draw();
