const form = document.querySelector("#validation-input");

form.addEventListener("blur", onLoseFocus);

function onLoseFocus () {
   if(form.value >= 6) {
      form.classList = valid;
   } else {
      form.classList = invalid
   }
}