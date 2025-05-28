// 鼠标尾巴特效
document.addEventListener('DOMContentLoaded', function () {
    // 创建多个尾巴元素
    const trailElements = [];
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff00ff'];

    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.width = `${20 - i * 3}px`;
        trail.style.height = `${20 - i * 3}px`;
        trail.style.background = colors[i % colors.length];
        trail.style.opacity = 1 - (i * 0.2);
        document.body.appendChild(trail);
        trailElements.push(trail);
    }

    // 鼠标移动事件
    document.addEventListener('mousemove', function (e) {
        trailElements.forEach((trail, index) => {
            setTimeout(() => {
                trail.style.left = `${e.pageX}px`;
                trail.style.top = `${e.pageY}px`;
            }, index * 50);
        });
    });

    // 按钮悬停效果增强
    const buttons = document.querySelectorAll('.neon-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 0 15px #00ffff, 0 0 30px #00ffff';
        });

        button.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.boxShadow = 'none';
            }
        });
    });

    // 图片故障效果
    const glitchImages = document.querySelectorAll('.glitch-img');
    glitchImages.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.classList.add('glitch-effect');
            setTimeout(() => {
                this.classList.remove('glitch-effect');
            }, 500);
        });
    });

    // 背景音乐控制
    const audio = document.querySelector('audio');
    audio.volume = 0.3;

    // 点击任意位置播放音乐（解决自动播放限制）
    document.body.addEventListener('click', function () {
        audio.play().catch(e => console.log('Autoplay prevented:', e));
    }, { once: true });
});