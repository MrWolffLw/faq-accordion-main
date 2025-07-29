document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        if (this.classList.contains('collapsed')) {
            icon.classList.remove('bi-dash-circle');
            icon.classList.add('bi-plus-circle')
        } else {
            icon.classList.remove('bi-plus-circle');
            icon.classList.add('bi-dash-circle');
        }
    })
})
