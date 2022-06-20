export function renderData(data) {
  try {
    const desc = document.querySelector('#desc');
    const divBody = document.querySelector('.body');
    const form = document.querySelector('.form');

    const tb = document.createElement("table");
    const caption = document.createElement("caption");
    const tbody = document.createElement("tbody");
    const trCases = document.createElement("tr");
    const tdCasesHead = document.createElement("td");
    const tdCasesCont = document.createElement("td");
    const trSuspects = document.createElement("tr");
    const tdSuspectsHead = document.createElement("td");
    const tdSuspectsCont = document.createElement("td");
    const trDeaths = document.createElement("tr");
    const tdDeathsHead = document.createElement("td");
    const tdDeathsCont = document.createElement("td");

    desc.innerHTML = 'Estado consultado: ';
    divBody.removeChild(form);
    divBody.appendChild(tb);
    tb.classList.add('table');
    tb.appendChild(caption);
    caption.classList.add('caption');
    tb.appendChild(tbody);
    tbody.appendChild(trCases);
    trCases.appendChild(tdCasesHead);
    trCases.appendChild(tdCasesCont);
    tdCasesCont.classList.add('tdCont');
    tbody.appendChild(trSuspects);
    trSuspects.appendChild(tdSuspectsHead);
    trSuspects.appendChild(tdSuspectsCont);
    tdSuspectsCont.classList.add('tdCont');
    tbody.appendChild(trDeaths);
    trDeaths.appendChild(tdDeathsHead);
    trDeaths.appendChild(tdDeathsCont);
    tdDeathsCont.classList.add('tdCont');

    caption.innerHTML = data[0].state;
    tdCasesHead.innerHTML = 'Casos :';
    tdCasesCont.innerHTML = data[0].cases;
    tdSuspectsHead.innerHTML = 'Suspeitos :';
    tdSuspectsCont.innerHTML = data[0].suspects;
    tdDeathsHead.innerHTML = 'Mortos :';
    tdDeathsCont.innerHTML = data[0].deaths;
  } catch (error) {
    console.log(error);
  }
}