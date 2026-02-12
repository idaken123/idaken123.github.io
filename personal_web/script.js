// 平滑滚动（点击导航栏链接跳转到对应位置）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 滚动时加载技能进度条
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    // 当技能区块进入视口时，触发进度条动画
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        document.querySelectorAll('.progress').forEach(progress => {
            progress.style.width = progress.style.width;
        });
    }
});