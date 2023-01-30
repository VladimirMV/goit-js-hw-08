
import   _throttle  from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData ={};

form.addEventListener('submit', FormSubmit);
form.addEventListener('input', _throttle(onFormInput, 500));

formLoad();

function FormSubmit(e) {
  e.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log("Отправили",savedData);
  
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(e) {

  formData[e.target.name]=e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function formLoad() {

  const formLoad = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!formLoad) { return; }
  form.email.value = formLoad.email || '';
  form.message.value = formLoad.message || '';
}

