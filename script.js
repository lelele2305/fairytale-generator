function startLoading() {
    const progressBar = document.getElementById('progress-bar');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 100);
}
