const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginButton.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform login logic here
});

const signUpLink = document.getElementById("sign-up-link");
signUpLink.addEventListener("click", () => {
  // Redirect to sign-up page
});

const forgotPasswordLink = document.getElementById("forgot-password");
forgotPasswordLink.addEventListener("click", () => {
  // Redirect to forgot password page
});