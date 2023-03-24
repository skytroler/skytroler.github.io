function scrollToSection() {
    var section = document.getElementById("my-projects");
    var rect = section.getBoundingClientRect();
    var offset = rect.top  -5;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

function redirectAndScroll() {
    // Redirect to another page
    window.location.href = "index.html#my-projects";
    // Add event listener to wait for the page to load
    window.addEventListener("load", function() {
        // Get the section
        var section = document.getElementById("my-projects");
        // Get the height of the section
        var rect = section.getBoundingClientRect();
        // Subtract the offset from the current scroll position
        var offset = rect.top + 100;
        // Scroll to the section with the offset
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
}

