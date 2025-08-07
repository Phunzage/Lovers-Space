// 计时器功能
function updateTimer() {
    // 设置恋爱开始日期（这里设为2023年11月3日）
    const startDate = new Date(2023, 10, 3); // 月份从0开始，10代表11月
    const now = new Date();

    // 计算时间差（毫秒）
    const diff = now - startDate;

    // 计算天数、小时、分钟、秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 更新显示
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 初始化计时器
updateTimer();
setInterval(updateTimer, 1000);

// 导航切换功能
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        // 移除所有active类
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // 添加active类到当前点击的项
        this.classList.add('active');

        // 显示对应的内容区域
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 创建漂浮爱心
function createHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const colors = ['#ff6b9d', '#ff8fab', '#ffa7c4', '#ffb3d8'];

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-shape');

        // 随机属性
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];

        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${posX}%`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.backgroundColor = color;

        heartsContainer.appendChild(heart);
    }
}

// 初始化漂浮爱心
createHearts();

// 为照片添加弹跳效果
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// 为愿望卡片添加弹跳效果
const wishCards = document.querySelectorAll('.wish-card');
wishCards.forEach(card => {
    card.addEventListener('click', function () {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// 为时间轴项目添加摆动效果
const timelineItems = document.querySelectorAll('.timeline-content');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'rotate(1deg)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});