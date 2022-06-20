export async function results(uf) {
  function findResults() {
    try {
      return fetch(`https://covid19-brazil-api.now.sh/api/report/v1`);
    } catch (err) {
      console.log(err);
    }
  }
  
  try {
    const results = await findResults();
    const data = await results.json();
    const filtered = data.data.filter( obj => obj.uf == uf );
    return filtered;
  } catch (err) {
    console.log(err);
  }
}