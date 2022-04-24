const btnRemind = document.querySelector("#remind-password");
const remindPasswordPopup = document.querySelector(".remind-password-popup");

btnRemind.addEventListener("click", () => {
    remindPasswordPopup.style.display = "flex";
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
    remindPasswordPopup.style.display = "none";
})