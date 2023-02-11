import { formEventListener } from "./formFunction.js";
import { konami } from "./konami.js";

const form = document.getElementById('formSummit');

form.addEventListener('submit', formEventListener);

window.addEventListener('keyup', konami)
