const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  /*numbers.forEach((prvek) => {
    document.body.innerHTML += `<div>${prvek}</div>`;
  });*/
  
document.getElementById("vsechna").innerText = numbers.join(', ');
 
const mocniny = numbers.map(num => num ** 2);

  /*mocniny.forEach((prvek) => {
    document.body.innerHTML += `<div>${prvek}</div>`
  });*/
  
document.getElementById("mocniny").innerText = mocniny.join(', ');

const minus = numbers.filter(num => num < 0);

/*minus.forEach((prvek) => {
    document.body.innerHTML += `<div>${prvek}</div>`
});*/

document.getElementById("minus").innerText = minus.join(', ');

const absolutniHodnoty = numbers.map(num => Math.abs(num));

/*absolutniHodnoty.forEach((prvek) => {
    document.body.innerHTML += `<div>${prvek}</div>`
});*/

document.getElementById("absolutniHodnoty").innerText = absolutniHodnoty.join(', ');

const sudaCisla = numbers.filter(num => num % 2 === 0);

/*sudaCisla.forEach ((prvek) => {
    document.body.innerHTML += `<div>${prvek}</div>`
});*/

document.getElementById("sudaCisla").innerText = sudaCisla.join(', ');

const delitelnaTremi = numbers.filter(num => Math.abs(num) % 3 === 0);

/*delitelnaTremi.forEach((prvek) => {
  document.body.innerHTML += `<div>${prvek}</div>`;
});*/

document.getElementById("delitelnaTremi").innerText = delitelnaTremi.join(', ');

const vzdalenostiOd5 = numbers.map(num => Math.abs(num - 5));

vzdalenostiOd5.forEach((vzdalenost, index) => {
    document.getElementById("vzdalenostiOd5").innerHTML += `<div>Číslo ${numbers[index]} je vzdáleno od 5 o ${vzdalenost}</div>`;
  });

const mocninyVzdalenosti = numbers.map(num => Math.pow(Math.abs(num - 5), 2));

mocninyVzdalenosti.forEach((mocnina, index) => {
    document.getElementById("mocninyVzdalenosti").innerHTML += `<div>Číslo ${numbers[index]} je vzdáleno od 5 o ${mocnina}</div>`;
});

const negativeNumbers = numbers.filter(num => num < 0);

const count = negativeNumbers.length;

document.getElementById("count").innerHTML = `Počet záporných čísel v seznamu je: ${count}`;

const soucet = numbers.reduce((accum, num) => accum + num, 0);

document.getElementById("soucet").innerHTML = `Součet všech čísel v seznamu je: ${soucet}`;

const prumer = soucet / numbers.length;

document.getElementById("prumer").innerHTML = `Průměr všech čísel v seznamu je: ${prumer}`;

const positiveNumbers = numbers.filter(num => num > 0);

const soucetPositive = positiveNumbers.reduce((accum, num) => accum + num, 0);

document.getElementById("kladnaCisla").innerHTML = `Součet všech kladných čísel v seznamu je: ${soucetPositive}`;