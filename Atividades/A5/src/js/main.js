import { mask } from "./modules/mask.js";
import { valid } from "./modules/valid.js";

document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js;

  if (field in mask) {
    $input.addEventListener('input', (e) => {
      e.target.value = mask[field](e.target.value);
    }, false);
  }

  $input.addEventListener('input', (e) => {
    if (valid[e.target.id](e.target.value)) {
      e.target.classList.remove("errorInput");
    } else {
      e.target.classList.add("errorInput");
    };
  }, false);

});