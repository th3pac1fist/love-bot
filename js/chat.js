console.log('JavaScript is loaded and running.');

document.addEventListener('keydown', function(event) {
    const male = document.getElementById('male');
    const female = document.getElementById('female');

    // Check if elements are being selected correctly
    if (!male || !female) {
        console.error('Character elements not found!');
        return;
    }

    // Check the key pressed
    console.log(`Key pressed: ${event.key}`);

    let malePosition = parseInt(window.getComputedStyle(male).getPropertyValue('bottom'));
    let femalePosition = parseInt(window.getComputedStyle(female).getPropertyValue('bottom'));

    console.log(`Initial Male position: ${malePosition}`);
    console.log(`Initial Female position: ${femalePosition}`);

    if (event.key === 'ArrowUp') {
        male.style.bottom = (malePosition + 10) + 'px';
        female.style.bottom = (femalePosition + 10) + 'px';
    } else if (event.key === 'ArrowDown') {
        if (malePosition > 0 && femalePosition > 0) {
            male.style.bottom = (malePosition - 10) + 'px';
            female.style.bottom = (femalePosition - 10) + 'px';
        }
    }

    console.log(`Updated Male position: ${male.style.bottom}`);
    console.log(`Updated Female position: ${female.style.bottom}`);
});
