document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");

    if (email.classList.contains("email-error")) {
      email.classList.remove("email-error");
    }

    const isExistingErrorMessage = document.querySelector(".error-message");
    if (isExistingErrorMessage) {
      isExistingErrorMessage.remove();
    }

    const emailValue = email.value;

    let isValid = true;

    if (emailValue.trim() === "") {
      isValid = false;
      email.classList.add("email-error");
      const errorMessage = document.createElement("div");
      errorMessage.innerText = "Input is empty";
      errorMessage.classList.add("error-message");
      document.getElementById("guf").appendChild(errorMessage);
      return;
    }

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!re.test(emailValue.trim())) {
      isValid = false;
      email.classList.add("email-error");
      const errorMessage = document.createElement("div");
      errorMessage.innerText = "Invalid email";
      errorMessage.classList.add("error-message");
      document.getElementById("guf").appendChild(errorMessage);
    }

    if (isValid) {
      const tnankYouCard = document.querySelector(".tnankYouCard");
      tnankYouCard.querySelector(".bold").innerText = `${emailValue}`;
      document.querySelector(".main-card").style.display = "none";
      document.querySelector(".tnankYouCard").style.display = "grid";
      email.value = "";

      const dismissButton = document.querySelector("#dismiss");
      dismissButton.addEventListener("click", () => {
        document.querySelector(".main-card").style.display = "grid";
        document.querySelector(".tnankYouCard").style.display = "none";
      });
    }
  });
});
