const form = document.querySelector("#signupForm");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const successMessage = document.querySelector("#successMessage");

function validatePasswordMatch() {
    const passwordsMatch = password.value === confirmPassword.value;
    confirmPassword.setCustomValidity(passwordsMatch ? "" : "Mật khẩu xác nhận chưa khớp.");
}

password.addEventListener("input", validatePasswordMatch);
confirmPassword.addEventListener("input", validatePasswordMatch);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePasswordMatch();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        successMessage.classList.add("d-none");
        return;
    }

    form.classList.remove("was-validated");
    successMessage.classList.remove("d-none");
});
