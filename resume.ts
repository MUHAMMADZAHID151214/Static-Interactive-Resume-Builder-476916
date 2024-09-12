function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Optionally, initialize sections to be visible or hidden
document.querySelectorAll('#profile-content, #work-content, #education-content').forEach(el => {
    (el as HTMLElement).style.display = 'block'; 
});
