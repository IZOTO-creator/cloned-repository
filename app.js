const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorIcon = document.querySelector(".error-icon");
const toggler = document.getElementById("toggler");

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstNameError.textContent = "First Name cannot be empty";
    firstName.classList.add("error");
    errorIcon.style.visibility = 'visible';
  }
   else {
    firstNameError.textContent = "";
    firstName.classList.remove("error");
    errorIcon.style.visibility = 'hidden';
  }
  // Check last name

  if (lName === "") {
    lastNameError.textContent = "Last Name cannot be empty";
    lastName.classList.add("error");
    errorIcon.style.visibility = 'visible';
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("error");
    errorIcon.style.visibility = 'hidden';
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    emailError.textContent = "Looks like this is not an email";
    email.classList.add("error");
    errorIcon.style.visibility = 'visible';
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    errorIcon.style.visibility = 'hidden';
  }

  // Check password

  if (passwordVal === "") {
    passwordError.textContent = "Password cannot be empty";
    password.classList.add("error");
    errorIcon.style.visibility = 'visible';
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    errorIcon.style.visibility = 'hidden';
  }

  if (
    firstNameError.textContent === "" &&
    lastNameError === "" &&
    emailError === "" &&
    passwordError === ""
  ) {
    form.onsubmit();
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

showHidePassword = () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
};
toggler.addEventListener("click", showHidePassword);

