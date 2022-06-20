import { mask } from "./modules/mask.js";
import { valid } from "./modules/valid.js";
import { findUF } from "./modules/findUF.js";
import { results } from "./modules/results.js";
import { renderData } from "./modules/renderData.js";

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

const form = document.querySelector('.form');
form.addEventListener('submit', async el => {
  el.preventDefault();
  try {
    const uf = await findUF();
    const data = await results(uf);
    if (data[0]) {
      renderData(data); 
    } else {
      document.querySelector('#cep').classList.add("errorInput");
    }
  } catch (err) {
    console.log(err);
  }
});