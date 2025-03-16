const scrollToSection = (idname) => {
    const section = document.getElementById(idname);
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};
