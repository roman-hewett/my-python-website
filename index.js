const button = document.querySelector("button")
let isDarkTheme = false
const changeTheme = () => {
    if (isDarkTheme == false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    isDarkTheme = !isDarkTheme
}
button.addEventListener("click", changeTheme)

