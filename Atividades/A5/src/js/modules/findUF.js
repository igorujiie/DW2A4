export async function findUF() {
  function findCEP(cep) {
    try {
      return fetch(`https://viacep.com.br/ws/${cep}/json/`);
    } catch (err) {
      console.log(err);
    }
  }
  
  const cep = document.querySelector('#cep');
  try {
    const cepResult = await findCEP(cep.value);
    const data = await cepResult.json();
    return data.uf;
  } catch (err) {
    console.log(err);
  }
}