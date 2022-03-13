const form = document.querySelector(".home .form");
const menu = document.getElementsByClassName("menu-1")[0];
const home = document.getElementsByClassName("home")[0];
const input = document.querySelectorAll("input");
const img = document.getElementsByClassName("thumb")[0];
const back = document.getElementsByClassName("back")[0];
const disableScroll = document.querySelector("#appBody");
const booking = document.getElementsByClassName("next-page")[0];
// form.addEventListener("click", () => {
//   menu.style.display = "none";
//   form.style.marginTop = "-20px";
//   form.style.margin = "auto";
// });

// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("click", () => {
//     menu.style.display = "none";
//     form.style.margin = "auto";
//   });
// }
// form.addEventListener("mouseout", () => {
//   menu.style.display = "inherit";
//   form.style.marginTop = "inherit";
//   form.style.margin = "inherit";
// });

booking.addEventListener("click", () => {
  alert("sorry can't do this right now \u{1F625} ");
});

// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("click", () => {
//     img.style.height = "170vh";
//     alert("sorry if this form bug");
//     disableScroll.classList.add("stop-scroll");
//   });
// }
// back.addEventListener("click", () => {
//   img.style.height = "100vh";
// });

// form.addEventListener("mouseout", () => {
//   img.style.height = "100vh";
//   disableScroll.classList.remove("stop-scroll");
// });
