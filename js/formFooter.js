const form = document.getElementById("form-footer")
const modal = document.getElementById("exampleModal")
const background = document.getElementById("background")

form.addEventListener("submit", () => {
    modal.classList.add("show")
    modal.setAttribute("aria-hidden", "false")
    modal.setAttribute("aria-modal", "true")
    modal.setAttribute("role", "dialog")
    modal.style.display = "block"
})