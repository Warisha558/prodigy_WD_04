document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skill-level');

    // Scroll Animation for Skill Bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (barTop < windowHeight - 50) {
                bar.style.width = bar.dataset.level;
            }
        });
    }

    // Trigger animation on scroll
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Initial check
});
