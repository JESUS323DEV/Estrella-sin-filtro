export default function ScrollSections(sectionId) {
    if (sectionId === 'inicio') {
        // Caso especial para inicio - scroll a 0
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}