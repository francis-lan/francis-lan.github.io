function changeDiv(boxId, direction) {
    const box = document.getElementById(boxId);
    const contents = box.querySelectorAll('.wrap-1');
    let activeIndex = -1;

    contents.forEach((content, index) => {
        if (content.classList.contains('active')) {
            activeIndex = index;
        }
    });

    if (direction === 'left') {
        contents[activeIndex].classList.remove('active');
        if (activeIndex === contents.length - 1) {
            contents[0].classList.add('active');
        } else {
            contents[activeIndex + 1].classList.add('active');
        }
    } else if (direction === 'right') {
        contents[activeIndex].classList.remove('active');
        if (activeIndex === 0) {
            contents[contents.length - 1].classList.add('active');
        } else {
            contents[activeIndex - 1].classList.add('active', 'reverse');
        }
    }
}