function navigate(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showDetails(element) {
    element.querySelector('.details').style.display = 'block';
}

function hideDetails(element) {
    element.querySelector('.details').style.display = 'none';
}

