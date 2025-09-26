
function navaction(name) {
    var projects = document.getElementsByClassName("projects")
    var exper = document.getElementsByClassName("experance")
    var about = document.getElementsByClassName("about")
    if (name == "about") {
        console.log("about" ,about)
        about.style = "display:none;"
        exper.style = "display:none;"
        projects.style = "display:none;"

    } else {
        if (name == "experance") {
            console.log("exp")
            about.style = "display:none;"

            exper.style = "display:flex;"
            projects.style = "display:none;"

        } else {
            if (name == "projects") {
                console.log("project")
                about.style = "display:none;"

                exper.style = "display:flex;"
                projects.style = "display:none;"
            }
        }
    }



}
document.addEventListener('mousemove', function(e) {
    const spotlight = document.querySelector('.spotlight');
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});