document.addEventListener('keydown', function(event) {
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    let malePosition = parseInt(window.getComputedStyle(male).getPropertyValue('bottom'));
    let femalePosition = parseInt(window.getComputedStyle(female).getPropertyValue('bottom'));

    if(event.key === 'ArrowUp') {
        male.style.bottom = malePosition + 10 + 'px';
        female.style.bottom = femalePosition + 10 + 'px';
    }
    if(event.key === 'ArrowDown') {
        if(malePosition > 0 && femalePosition > 0) {
            male.style.bottom = malePosition - 10 + 'px';
            female.style.bottom = femalePosition - 10 + 'px';
        }
    }
});
