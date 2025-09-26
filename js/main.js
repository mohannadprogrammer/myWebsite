
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