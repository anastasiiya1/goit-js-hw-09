const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

function updateFormFields() {
  emailInput.value = localStorage.getItem(localStorageKey + '-email') ?? '';
  textarea.value = localStorage.getItem(localStorageKey + '-message') ?? '';
}

updateFormFields();

form.addEventListener('input', function () {
  localStorage.setItem(localStorageKey + '-email', emailInput.value);
  localStorage.setItem(localStorageKey + '-message', textarea.value);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (emailInput.value && textarea.value) {
    console.log({
      email: emailInput.value,
      message: textarea.value,
    });

    localStorage.removeItem(localStorageKey + '-email');
    localStorage.removeItem(localStorageKey + '-message');
    form.reset();
  }
});
