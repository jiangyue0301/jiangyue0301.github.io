const material = document.querySelector('.material');
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const materialTop = material.getBoundingClientRect().top;
    const progressValue = (0 - materialTop) / (material.offsetHeight - window.innerHeight);
    progressBar.style.transform = `scaleX(${progressValue})`;
});