const button = document.querySelector("button")
const sections =document.querySelectorAll("section")
const dates =document.querySelectorAll(".left-column")
let isDarkTheme = false
const changeTheme = () => {
    if (isDarkTheme == false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";    
        sections.forEach((section, index) =>{
            section.style.border ="2px solid white"
            dates[index].style.backgroundColor="purple"
        })
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        sections.forEach((section, index) =>{
            section.style.border ="2px solid black"
            dates[index].style.backgroundColor="bisque"
        })
    }
    isDarkTheme = !isDarkTheme
}
button.addEventListener("click", changeTheme)

